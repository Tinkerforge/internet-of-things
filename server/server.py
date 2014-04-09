import sys
import random
import os

from twisted.python import log
from twisted.internet import reactor
from twisted.web.server import Site
from twisted.web.static import Data

CONFIGURATION_PATH = os.path.join('/' + 'home', 'olaf', 'ee', 'remote-control', 'configurations')

try:
    from autobahn.twisted.websocket import WebSocketServerProtocol, WebSocketServerFactory
except:
    from autobahn.websocket import WebSocketServerProtocol, WebSocketServerFactory

try:
    from autobahn.twisted.resource import WebSocketResource
except:
    from autobahn.resource import WebSocketResource

class RemoteControlLoadProtocol(WebSocketServerProtocol):
    def onMessage(self, payload, isBinary):
        if not isBinary:
            p = payload.decode('utf8')
            if len(p) == 6: # character + 5 digit number
                url = os.path.join(CONFIGURATION_PATH, p)
                if os.path.isfile(url):
                    with open(url, 'r') as f:
                        s = f.read()
                        self.sendMessage(s, False)
        
        self.sendClose()

class RemoteControlSaveProtocol(WebSocketServerProtocol):
    # Random easy to read character + 5 digit number
    def generateConfigurationID(self):
        letter = random.choice('abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ')
        number = str(random.randrange(0, 100000))
        configurationID = letter + number
        return configurationID

    def onMessage(self, payload, isBinary):
        if not isBinary:
            p = payload.decode('utf8')

            # Sanity check: Maximum configuration size is 25k byte
            if len(p) <  25000:
                search = 1000
                while search > 0:
                    i = self.generateConfigurationID()
                    url = os.path.join(CONFIGURATION_PATH, i)
                    if not os.path.isfile(url):
                        search = -1
                    else:
                        search -= 1

                # If search = 0 we couldn't find an ID that is not yet used...
                if search == -1: 
                    with open(url, 'w') as f:
                        f.write(p)
                        self.sendMessage(i, False)

        self.sendClose()

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'debug':
        log.startLogging(sys.stdout)
        debug = True
    else:
        debug = False

    factorySave = WebSocketServerFactory("ws://localhost:9000",
                                         debug = debug,
                                         debugCodePaths = debug)
    factorySave.protocol = RemoteControlSaveProtocol
    resourceSave = WebSocketResource(factorySave)

    factoryLoad = WebSocketServerFactory("ws://localhost:9000",
                                         debug = debug,
                                         debugCodePaths = debug)
    factoryLoad.protocol = RemoteControlLoadProtocol
    resourceLoad = WebSocketResource(factoryLoad)

    # Establish a dummy root resource
    root = Data("", "text/plain")

    # and our WebSocket servers under different paths ..
    root.putChild("save", resourceSave)
    root.putChild("load", resourceLoad)

    # both under one Twisted Web Site
    site = Site(root)
    reactor.listenTCP(9000, site)

    reactor.run()
