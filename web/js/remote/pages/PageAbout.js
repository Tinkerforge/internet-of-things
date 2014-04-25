function PageAbout() {
  this.name = "About";
  this.running = false;

  this.addDOMElements = function() {
    var about = '<div class="row col-xs-18 col-sm-12"><div class="col-xs-18 col-sm-12">' +
                  '<h3>What and Why?</h3>' +
                  '<p>' +
                    'iot-remote.com is a project from <a href="http://www.tinkerforge.com">Tinkerforge</a>. It is used as an example implementation of a controlling web site for the <a href="http://www.tinkerforge.com/en/doc/Kits/InternetOfThings/InternetOfThings.html">Starter Kit: Internet of Things</a>.' +
                  '</p>' +
                  '<h3>How?</h3>' +
                  '<p>' +
                    'iot-remote.com consists of just one index.html with lots of JavaScript. There is no server-side code that runs on this webpage. Everything is done directly in your browser. <b>If you visit this site the HTML and JavaScript is downloaded from iot-remote.com to your browser, after that there is no communication between the browser and the internet whatsoever</b>. We use the new WebSocket support of the Tinkerforge system to directly communicate between the browser and the Brick Daemon or Ethernet Extension. Configurations are saved in Cookies. If you want to use the same configuration across different devices or browsers you can save it (see "Settings"). The configuration is saved online, but you can install your own server, see below.' +
                  '</p>' +
                  '<h3>Can I run it locally?</h3>' +
                  '<p>' +
                    'Yes! You can find the source code for this web site at <a href="https://github.com/Tinkerforge/internet-of-things">https://github.com/Tinkerforge/internet-of-things</a>. It is even possible to open and use this web site without a webserver. More information can be found <a href="http://www.tinkerforge.com/en/doc/Kits/InternetOfThings/InternetOfThings.html#control-by-your-own-tablet-smart-phone-or-pc">here</a> under "Offline/Local usage".' +
                  '</p>' +
                  '<h3>I have a Remote Switch Bricklet, how do i use it here?</h3>' +
                  '<p>' +
                    'Easy. Connect the Bricklet to your PC, enable the WebSocket support of your <a href="http://www.tinkerforge.com/en/doc/Software/Brickd.html#websockets">Brick Daemon</a> or your <a href="http://www.tinkerforge.com/de/doc/Hardware/Master_Extensions/Ethernet_Extension.html#websockets">Ethernet Extension</a>, press "New Remote..." and start the configuration. A more detailed description can be found <a href="http://www.tinkerforge.com/en/doc/Kits/InternetOfThings/InternetOfThings.html#control-by-your-own-tablet-smart-phone-or-pc">here</a>.' +
                  '</p>' +
                '</div></div>';
    $('#dashboard').append(about);
  };

  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
    }
  };

  this.stop = function() {
    $('#dashboard').empty();
    this.running = false;
  };
}
