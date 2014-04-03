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
    this.name = remoteDefinition.name + ' <button type="button" class="btn btn-default btn-lg">' +
                                          '<span class="glyphicon glyphicon-wrench"></span> Edit' +
                                        '</button>';
  };

  this.addDOMElements = function() {
    html = '<div class="col-sm-12">' +
             '<p>' +
               '<span id="remote-a-connection" class="label label-warning">Connecting...</span>' +
             '</p>' +
             '<p>' +
               '<button id="remote-a-on" type="button" class="btn btn-primary btn-block btn-lg">On</button>' +
               '<button id="remote-a-off" type="button" class="btn btn-primary btn-block btn-lg">Off</button>' +
             '</p>' +
           '</div>';
    $('#dashboard').append(html);
    $('#remote-a-on').attr('disabled', true);
    $('#remote-a-off').attr('disabled', true);
  };
  
  this.start = function() {
    if(!this.running) {
      this.init();
      
      this.addDOMElements();
      this.running = true;
      
      // TODO: call getter in regular intervals after connection
      // TODO: Write "Connection lost..." if no answer

      this.ipcon = new Tinkerforge.IPConnection();
      this.ipcon.connect(this.remoteDefinition.host, this.remoteDefinition.port,
        function(error) {
          $('#remote-a-connection').text('Could not connect to ' + this.remoteDefinition.host + ':' + this.remoteDefinition.port.toString() + ' (Error: ' + error.toString() + ')');
          $('#remote-a-connection').addClass('label-danger');
          $('#remote-a-connection').removeClass('label-warning');
          this.ipcon.disconnect();
        }.bind(this)
      );

      this.ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
        function(connectReason) {
          $('#remote-a-connection').text('Connection to ' + this.remoteDefinition.host + ':' + this.remoteDefinition.port.toString() + ' established');
          $('#remote-a-connection').addClass('label-success');
          $('#remote-a-connection').removeClass('label-warning');
          $('#remote-a-on').attr('disabled', false);
          $('#remote-a-off').attr('disabled', false);
          
          this.remoteBricklet = new Tinkerforge.BrickletRemoteSwitch(this.remoteDefinition.uid, this.ipcon);
          // TODO: call getter and remove "Connecting...", otherwise write "Could not find Remote Switch with UID XXX"
          
          $('#remote-a-on').click(function() {
            this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
            this.remoteBricklet.switchSocket(this.remoteDefinition.typeDefinition.houseCode, 
                                             this.remoteDefinition.typeDefinition.receiverCode, 
                                             Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_ON);
          }.bind(this));
          
          $('#remote-a-off').click(function() {
            this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
            this.remoteBricklet.switchSocket(this.remoteDefinition.typeDefinition.houseCode, 
                                             this.remoteDefinition.typeDefinition.receiverCode, 
                                             Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_OFF);
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