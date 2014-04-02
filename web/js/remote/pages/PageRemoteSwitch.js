function PageRemoteSwitchA() {
  this.name = "Remote Switch";
  this.remoteDefinition = null; 
  this.running = false;
  this.ipcon = null;
  this.remoteBricklet = null;

  this.init = function() {
  };
  
  this.setRemoteDefinition = function(remoteDefinition) {
    this.remoteDefinition = remoteDefinition;
    this.name = "Remote Switch: " + remoteDefinition.name;
  };

  this.addDOMElements = function() {
    html = '<div class="col-sm-6">' +
             '<p>' +
               '<button id="remote-a-on" type="button" class="btn btn-primary btn-block btn-lg">On</button>' +
               '<button id="remote-a-off" type="button" class="btn btn-primary btn-block btn-lg">Off</button>' +
             '</p>' +
           '</div>';
    $('#dashboard').append(html);
  };
  
  this.start = function() {
    if(!this.running) {
      this.init();
      
      this.addDOMElements();
      this.running = true;
      
      // TODO: call getter in regular intervals after connection
      // TODO: Write "Connection lost..." if no answer

      // TODO: Show "Connecting..." or something
      this.ipcon = new Tinkerforge.IPConnection();
      this.ipcon.connect(this.remoteDefinition.host, this.remoteDefinition.port,
        function(error) {
          // TODO: Write "Could not connect...
          this.ipcon.disconnect();
        }.bind(this)
      );

      this.ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
        function(connectReason) {
          this.remoteBricklet = new Tinkerforge.BrickletRemoteSwitch(this.remoteDefinition.uid, this.ipcon);
          // TODO: call getter and remove "Connecting...", otherwise write "Could not find Remote Switch with UID XXX"
          
          $('#remote-a-on').click(function() {
            this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
            this.remoteBricklet.switchSocket(this.remoteDefinition.typeDefinition.houseCode, 
                                             this.remoteDefinition.typeDefinition.receiverCode, 
                                             Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_ON);
            console.log("on");
          }.bind(this));
          
          $('#remote-a-off').click(function() {
            this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
            this.remoteBricklet.switchSocket(this.remoteDefinition.typeDefinition.houseCode, 
                                             this.remoteDefinition.typeDefinition.receiverCode, 
                                             Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_OFF);
            console.log("off");
          }.bind(this));
          
        }.bind(this)
      );
    }
  };

  this.stop = function() {
    $('#dashboard').empty();
    if(this.ipcon !== null) {
      this.ipcon.disconnect();
    }
    
    this.running = false;
  };
}