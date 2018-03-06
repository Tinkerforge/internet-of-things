function PageRemoteSwitch() {
  this.name = "Remote Switch Placeholder";
  this.remoteDefinition = null; 
  this.running = false;
  this.ipcon = null;
  this.remoteBricklet = null;
  this.buttonsEnabled = true;
  this.updateStatusTimeout = null;

  this.setRemoteDefinition = function(remoteDefinition) {
    this.remoteDefinition = remoteDefinition;
    var name = '<span id="span-remote-switch-name">' + remoteDefinition.name + '</span> ';
    var edit =   '<span id="remote-switch-buttons">' +
                   '<button id="remote-switch-edit" type="button" class="btn btn-default btn-sm">' +
                     '<span class="glyphicon glyphicon-wrench"></span> Edit' +
                   '</button>';
    
    var remove =   '<button id="remote-switch-remove" type="button" class="btn btn-default btn-sm">' +
                     '<span class="glyphicon glyphicon-remove"></span> Remove' +
                   '</button></span><span class="clearfix">' +
                 '</span>';
    
    this.name = name + edit + ' ' + remove;
  };

  this.addDOMElements = function() {
    var html = '<div class="col-sm-12">' +
                 '<p>' +
                   '<span id="remote-switch-connection" class="label label-warning">' +
                     'Connecting...' +
                   '</span>' +
                   '<button id="remote-switch-connection-retry-button" type="button" class="btn btn-default btn-xs">' +
                     '<span class="glyphicon glyphicon-repeat" id="remote-switch-connection-retry"></span> Retry' +
                   '</button>' +
                 '</p>';
    switch(this.remoteDefinition.type) {
      case 'A Switch':
      case 'B Switch':
      case 'C Switch':
        html += '<p>' +
                  '<button id="remote-switch-on" type="button" class="btn btn-primary btn-block btn-lg">On</button>' +
                  '<button id="remote-switch-off" type="button" class="btn btn-primary btn-block btn-lg">Off</button>' +
                '</p>';
        break;
        
      case 'B Dimmer':
        html += '<form class="form-horizontal" role="form">' +
                  '<div class="form-group">' +
                    '<label class="col-sm-2 control-label">Dim Value</label>' +
                    '<div id="div-remote-switch-dim-value" class="col-sm-10">' +
                      '<input class="form-control" type="text" id="remote-switch-dim-value"/>' +
                    '</div>' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<div class="col-sm-offset-2 col-sm-10">' +
                      '<button id="remote-switch-dim" type="button" class="btn btn-primary btn-block btn-lg">Dim</button>' +
                    '</div>' +
                  '</div>' +
                '</form>';
        break;
    }
    
    
    html += '</div>';
    
    var switchName = "Switching... ";
    if(this.remoteDefinition.type === 'B Dimmer') {
      switchName = "Dimming... ";
    }
    
    var switching = '<div id="remote-switch-switching" class="col-sm-12">' +
                      '<h3><span id="remote-switch-switching-name">' + switchName + '</span><img width="50" height="66" src=img/switching.gif></h3>';
                    '</div>';
                
    html += switching;

    $('#dashboard').append(html);
    
    $('#remote-switch-switching').hide();
    $('#remote-switch-connection-retry-button').hide();
    
    // Configure touchspin here already, otherwise we can't disable the buttons
    $('#remote-switch-dim-value').TouchSpin({
      min: 0,
      max: 15,
      stepinterval: 1,
      maxboostedstep: 1,
      initval: this.remoteDefinition.typeDefinition.dimValue,
    });
    
    this.buttonsEnabled = true;
    this.disableButtons();
  };
  
  this.disableButtons = function() {
    if(this.buttonsEnabled === false) {
      return;
    } 
    this.buttonsEnabled = false;
    
    switch(this.remoteDefinition.type) {
      case 'A Switch':
      case 'B Switch':
      case 'C Switch':
        $('#remote-switch-on').prop('disabled', true);
        $('#remote-switch-off').prop('disabled', true);
        break;
        
      case 'B Dimmer':
        $('#remote-switch-dim-value').prop('disabled', true);
        $('#remote-switch-dim').prop('disabled', true);
        $('#div-remote-switch-dim-value button').prop('disabled', true);
        break;
    }
  };
  
  this.enableButtons = function() {
    if(this.buttonsEnabled === true) {
      return;
    } 
    this.buttonsEnabled = true;
    
    switch(this.remoteDefinition.type) {
      case 'A Switch':
      case 'B Switch':
      case 'C Switch':
        $('#remote-switch-on').attr('disabled', false);
        $('#remote-switch-off').attr('disabled', false);
        break;
        
      case 'B Dimmer':
        $('#remote-switch-dim-value').prop('disabled', false);
        $('#remote-switch-dim').prop('disabled', false);
        $('#div-remote-switch-dim-value button').prop('disabled', false);
        break;
    }
    
    $('#remote-switch-connection').text('Connection to ' + this.remoteDefinition.host + ':' + this.remoteDefinition.port.toString() + ' established');
    $('#remote-switch-connection').addClass('label-success');
    $('#remote-switch-connection').removeClass('label-warning');
  };
  
  this.updateStatus = function() {
    this.remoteBricklet.getSwitchingState(
      function(state) {
        if(state === Tinkerforge.BrickletRemoteSwitch.SWITCHING_STATE_READY) {
          this.enableButtons();
          $('#remote-switch-switching').hide();
        } else {
          this.disableButtons();
          $('#remote-switch-switching').show();
        }
        this.updateStatusTimeout = setTimeout(this.updateStatus.bind(this), 1000);
      }.bind(this),
      function(error) {
        $('#remote-switch-connection').text('Connection to Remote Switch Bricklet "' + this.remoteDefinition.uid + '" lost (Error: ' + error.toString() + ')');
        $('#remote-switch-connection').addClass('label-danger');
        $('#remote-switch-connection').removeClass('label-warning');
        $('#remote-switch-connection').removeClass('label-success');
        this.disableButtons();
        $('#remote-switch-connection-retry-button').show();
      }.bind(this)
    );
  };

  this.checkBrickletIdentity = function(uid,
                                        connected_uid,
                                        position,
                                        hardware_version,
                                        firmware_version,
                                        device_identifier) {
                                  if (device_identifier == Tinkerforge.BrickletRemoteSwitchV2.DEVICE_IDENTIFIER) {
                                    this.remoteBricklet =
                                      new Tinkerforge.BrickletRemoteSwitchV2(this.remoteDefinition.uid,
                                                                             this.ipcon);
                                  }

                                  this.updateStatusTimeout = setTimeout(this.updateStatus.bind(this), 1000);

                                  $('#remote-switch-dim').click(function() {
                                    this.disableButtons();
                                    $('#remote-switch-switching').show();
                                    this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                    this.remoteBricklet.dimSocketB(this.remoteDefinition.typeDefinition.address,
                                                                   this.remoteDefinition.typeDefinition.unit,
                                                                   parseInt($('#remote-switch-dim-value').val()));
                                  }.bind(this));

                                  $('#remote-switch-on').click(function() {
                                    this.disableButtons();
                                    $('#remote-switch-switching').show();
                                    switch(this.remoteDefinition.type) {
                                      case 'A Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketA(this.remoteDefinition.typeDefinition.houseCode,
                                                                          this.remoteDefinition.typeDefinition.receiverCode,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_ON);
                                        break;

                                      case 'B Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketB(this.remoteDefinition.typeDefinition.address,
                                                                          this.remoteDefinition.typeDefinition.unit,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_ON);
                                        break;

                                      case 'C Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketC(this.remoteDefinition.typeDefinition.systemCode,
                                                                          this.remoteDefinition.typeDefinition.deviceCode,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_ON);
                                        break;
                                    }
                                  }.bind(this));

                                  $('#remote-switch-off').click(function() {
                                    this.disableButtons();
                                    $('#remote-switch-switching').show();
                                    switch(this.remoteDefinition.type) {
                                      case 'A Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketA(this.remoteDefinition.typeDefinition.houseCode,
                                                                          this.remoteDefinition.typeDefinition.receiverCode,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_OFF);
                                        break;

                                      case 'B Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketB(this.remoteDefinition.typeDefinition.address,
                                                                          this.remoteDefinition.typeDefinition.unit,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_OFF);
                                        break;

                                      case 'C Switch':
                                        this.remoteBricklet.setRepeats(this.remoteDefinition.typeDefinition.repeats);
                                        this.remoteBricklet.switchSocketC(this.remoteDefinition.typeDefinition.systemCode,
                                                                          this.remoteDefinition.typeDefinition.deviceCode,
                                                                          Tinkerforge.BrickletRemoteSwitch.SWITCH_TO_OFF);
                                        break;
                                    }
                                  }.bind(this));
                               }

  this.connectionEstablished = function() {
    this.remoteBricklet = new Tinkerforge.BrickletRemoteSwitch(this.remoteDefinition.uid, this.ipcon);
    this.remoteBricklet.getIdentity(this.checkBrickletIdentity.bind(this), null);
  };

  this.start = function() {
    if(!this.running) {
      this.addDOMElements();
      this.running = true;
      
      this.ipcon = new Tinkerforge.IPConnection();
      this.ipcon.connect(this.remoteDefinition.host, this.remoteDefinition.port,
        function(error) {
          $('#remote-switch-connection').text('Could not connect to ' + this.remoteDefinition.host + ':' + this.remoteDefinition.port.toString() + ' (Error: ' + error.toString() + ')');
          $('#remote-switch-connection').addClass('label-danger');
          $('#remote-switch-connection').removeClass('label-warning');
          this.ipcon.disconnect();
          $('#remote-switch-connection-retry-button').show();
        }.bind(this)
      );

      this.ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
        function(connectReason) {
          if(typeof this.remoteDefinition.secret === 'string' && this.remoteDefinition.secret.length > 0) {
            this.ipcon.authenticate(this.remoteDefinition.secret,
              this.connectionEstablished.bind(this),
              function(error) {
                clearTimeout(this.updateStatusTimeout);
                this.ipcon.disconnect();
                
                $('#remote-switch-connection').text('Authentication failed' + ' (Error: ' + error.toString() + ')');
                $('#remote-switch-connection').addClass('label-danger');
                $('#remote-switch-connection').removeClass('label-warning');
                
                $('#remote-switch-connection-retry-button').show();
              }.bind(this)
            );
          } else {
            this.connectionEstablished();
          }
        }.bind(this)
      );
      
      $('#remote-switch-remove').click(function(e) {
        e.preventDefault();
        remoteControl.remotes.splice(this.remoteDefinition.num, 1);
        remoteControl.updateMenu(remoteControl.remotes);
        $.cookie("remotes", remoteControl.remotes, {expires : 365});
        $.cookie("configurationID", configurationID, {expires : 365});
        $('.glyphicon-pencil').css('color', '');
        $('#remote-page-overview').trigger('click');
      }.bind(this));
      
      $('#remote-switch-edit').click(function(e) {
        e.preventDefault();
        remoteControl.pages['edit-remote'].editRemoteId = this.remoteDefinition.num;
        remoteControl.brickMenuClick('edit-remote');
      }.bind(this));
      
      $('#remote-switch-connection-retry-button').click(function() {
        remoteControl.brickMenuClick('remote-' + this.remoteDefinition.num);
      }.bind(this));
    }
  };

  this.stop = function() {
    clearTimeout(this.updateStatusTimeout);
    
    $('#dashboard').empty();
    if(this.ipcon !== null) {
      this.ipcon.disconnect();
    }
    
    this.running = false;
  };
}
