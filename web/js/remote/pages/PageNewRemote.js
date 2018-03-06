addSwitchAOptions = function() {
  var html = '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Repeats</label>' +
               '<div class="col-sm-10">' +
                 '<input class="form-control" type="text" id="new-remote-a-repeats"/>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">House Code</label>' +
               '<div class="col-sm-10">' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-house-code-checkbox" id="new-remote-a-house-code-1">1' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-house-code-checkbox" id="new-remote-a-house-code-2">2' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-house-code-checkbox" id="new-remote-a-house-code-3">3' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-house-code-checkbox" id="new-remote-a-house-code-4">4' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-house-code-checkbox" id="new-remote-a-house-code-5">5' +
                 '</label>' +
                 '<input class="form-control" type="text" id="new-remote-a-house-code"/>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Receiver Code</label>' +
               '<div class="col-sm-10">' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-receiver-code-checkbox" id="new-remote-a-receiver-code-1">A' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-receiver-code-checkbox" id="new-remote-a-receiver-code-2">B' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-receiver-code-checkbox" id="new-remote-a-receiver-code-3">C' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-receiver-code-checkbox" id="new-remote-a-receiver-code-4">D' +
                 '</label>' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" class="new-remote-a-receiver-code-checkbox" id="new-remote-a-receiver-code-5">E' +
                 '</label>' +
                 '<input class="form-control" type="text" id="new-remote-a-receiver-code"/>' +
               '</div>' +
             '</div>';
  $('#div-new-remote-type-options').append(html);
};

addSwitchBOptions = function() {
  var html = '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Repeats</label>' +
               '<div class="col-sm-10">' +
                 '<input class="form-control" type="text" id="new-remote-b-repeats"/>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Address</label>' +
               '<div class="col-sm-10">' +
                 '<input class="form-control" type="text" id="new-remote-b-address"/>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Unit</label>' +
               '<div class="col-sm-8" id="div-new-remote-b-unit">' +
                 '<input class="form-control" type="text" id="new-remote-b-unit"/>' +
               '</div>' +
               '<div class="col-sm-2">' +
                 '<label class="checkbox-inline">' +
                   '<input type="checkbox" id="new-remote-b-switch-all" value="sa"> Switch All' +
                 '</label>' +
               '</div>' +
             '</div>';
  $('#div-new-remote-type-options').append(html);
};

addSwitchCOptions = function() {
  var html = '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Repeats</label>' +
               '<div class="col-sm-10">' +
                 '<input class="form-control" type="text" id="new-remote-c-repeats"/>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">System Code</label>' +
               '<div class="col-sm-10">' +
                 '<select id="new-remote-c-system-code" class="form-control">' +
                   '<option value="A">A</option>' +
                   '<option value="B">B</option>' +
                   '<option value="C">C</option>' +
                   '<option value="D">D</option>' +
                   '<option value="E">E</option>' +
                   '<option value="F">F</option>' +
                   '<option value="G">G</option>' +
                   '<option value="H">H</option>' +
                   '<option value="I">I</option>' +
                   '<option value="J">J</option>' +
                   '<option value="K">K</option>' +
                   '<option value="L">L</option>' +
                   '<option value="M">M</option>' +
                   '<option value="N">N</option>' +
                   '<option value="O">O</option>' +
                   '<option value="P">P</option>' +
                 '</select>' +
               '</div>' +
             '</div>' +
             '<div class="form-group">' +
               '<label class="col-sm-2 control-label">Device Code</label>' +
               '<div class="col-sm-10" id="div-new-remote-c-device-code">' +
                 '<input class="form-control" type="text" id="new-remote-c-device-code"/>' +
               '</div>' +
             '</div>';
  $('#div-new-remote-type-options').append(html);
};

function PageNewRemote() {
  this.name = "New Remote...";
  this.running = false;
  this.connectTimeout = null;
  this.editRemoteId = -1; // -1 = new remote
  
  this.setEdit = function() {
    this.name = "Edit Remote...";
  };
  
  this.editRemote = function() {
    var r = remoteControl.remotes[this.editRemoteId];
    
    $('#new-remote-host').val(r.host);
    $('#new-remote-port').val(r.port);
    $('#new-remote-secret').val(r.secret);
    
    $('#new-remote-uid').append('<option value="' + r.uid + '">' + r.uid + '</option>');
    $('#new-remote-uid option[value="choose"]').prop('selected', false);
    $('#new-remote-uid option[value="' + r.uid + '"]').prop('selected', true);
    $('#div-new-remote-uid').show();
    
    $('#div-new-remote-name').show();
    $('#new-remote-name').val(r.name);
    var e = $.Event("keyup");
    e.keyCode = 13;
    $('#new-remote-name').trigger(e);
    
    $('#new-remote-type option[value="choose"]').prop('selected', false);
    $('#div-new-remote-type').show();
    
    switch(r.type) {
      case 'A Switch':
        $('#new-remote-type option[value="A"]').prop('selected', true);
        $('#new-remote-type option[value="A"]').trigger('change');
        
        $('#new-remote-a-repeats').val(r.typeDefinition.repeats);
        $('#new-remote-a-house-code').val(r.typeDefinition.houseCode);
        $('#new-remote-a-house-code').trigger('change');
        $('#new-remote-a-receiver-code').val(r.typeDefinition.receiverCode);
        $('#new-remote-a-receiver-code').trigger('change');
        break;
        
      case 'B Switch':
        $('#new-remote-type option[value="B"]').prop('selected', true);
        $('#new-remote-type option[value="B"]').trigger('change');
        
        $('#new-remote-b-repeats').val(r.typeDefinition.repeats);
        $('#new-remote-b-address').val(r.typeDefinition.address);
        $('#new-remote-b-unit').val(r.typeDefinition.unit);
        $('#new-remote-b-switch-all').prop('checked', r.typeDefinition.switchAll);
        $('#new-remote-b-switch-all').trigger('change');
        break;
        
      case 'B Dimmer':
        $('#new-remote-type option[value="Bd"]').prop('selected', true);
        $('#new-remote-type option[value="Bd"]').trigger('change');
        
        $('#new-remote-b-repeats').val(r.typeDefinition.repeats);
        $('#new-remote-b-address').val(r.typeDefinition.address);
        $('#new-remote-b-unit').val(r.typeDefinition.unit);
        $('#new-remote-b-switch-all').prop('checked', r.typeDefinition.switchAll);
        $('#new-remote-b-switch-all').trigger('change');
        break;
        
      case 'C Switch':
        $('#new-remote-type option[value="C"]').prop('selected', true);
        $('#new-remote-type option[value="C"]').trigger('change');
        
        $('#new-remote-c-repeats').val(r.typeDefinition.repeats);
        $('#new-remote-c-device-code').val(r.typeDefinition.deviceCode);
        $('#new-remote-c-system-code option[value="' + r.typeDefinition.systemCode + '"]').prop('selected', true);
        break;
    }
  };

  this.addDOMElements = function() {
    var html = '<form class="form-horizontal" role="form">' +
                 '<div class="form-group">' +
                   '<label for="new-remote-host" class="col-sm-2 control-label">Host</label>' +
                   '<div class="col-sm-10">' +
                     '<input type="text" class="form-control" id="new-remote-host" placeholder="Host" value="localhost">' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<label for="new-remote-port" class="col-sm-2 control-label">Port</label>' +
                   '<div class="col-sm-10">' +
                     '<input type="text" class="form-control" id="new-remote-port" value="4280">' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<label for="new-remote-secret" class="col-sm-2 control-label">Secret</label>' +
                   '<div class="col-sm-10">' +
                     '<input type="password" class="form-control" id="new-remote-secret" placeholder="Leave empty if authentication is not used" value="">' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<div class="col-sm-offset-2 col-sm-10">' +
                     '<div id="new-remote-progress" class="progress progress-striped active">' +
                       '<div id="new-remote-progress-bar" class="progress-bar" style="width: 0%;"></div>' +
                     '</div>' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-new-remote-find" class="form-group">' +
                   '<div class="col-sm-offset-2 col-sm-10">' +
                     '<button type="button" id="new-remote-find" class="btn btn-default">Find Remote Switch Bricklets</button>' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<div class="col-sm-offset-2 col-sm-10">' +
                   '  <div id="new-remote-error">' +
                     '</div>' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-new-remote-uid" class="form-group">' +
                   '<label for="new-remote-uid" class="col-sm-2 control-label">UID</label>' +
                   '<div class="col-sm-10">' +
                     '<select id="new-remote-uid" class="form-control">' +
                       '<option value="choose" selected disabled>Choose UID of Remote Switch Bricklet</option>' +
                     '</select>' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-new-remote-name" class="form-group">' +
                   '<label for="new-remote-name" class="col-sm-2 control-label">Name</label>' +
                   '<div class="col-sm-10">' +
                     '<input maxlength="13" type="text" class="form-control" id="new-remote-name" placeholder="Name of Socket (e.g. bedside lamp)">' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-new-remote-type" class="form-group">' +
                   '<label for="new-remote-type" class="col-sm-2 control-label">Type</label>' +
                   '<div class="col-sm-10">' +
                     '<select id="new-remote-type" class="form-control">' +
                       '<option value="choose" selected disabled>Choose Type</option>' +
                       '<option value="A">A Switch</option>' +
                       '<option value="B">B Switch</option>' +
                       '<option value="Bd">B Dimmer</option>' +
                       '<option value="C">C Switch</option>' +
                     '</select>' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-new-remote-type-options">' +
                 '</div>' +
                 '<div id="div-new-remote-save" class="form-group"> ' +
                   '<div class="col-sm-offset-2 col-sm-10">' +
                     '<button type="button" id="new-remote-save" class="btn btn-primary">Save</button>' +
                   '</div>' +
                 '</div>' +
               '</form>';
    $('#dashboard').append(html);
    
    $('#div-new-remote-uid').hide();
    $('#div-new-remote-name').hide();
    $('#div-new-remote-type').hide();
    $('#div-new-remote-save').hide();
  };
  
  this.removeElements = function(stage) {
    switch(stage) {
      case 0:
        $('#div-new-remote-uid option[value="choose"]').prop('selected', true);
        $('#div-new-remote-uid').hide();
        $('#new-remote-name').val('');
        $('#div-new-remote-name').hide();
        clearTimeout(this.connectTimeout);
        var bar = $('#new-remote-progress-bar');
        bar.width('0%');
        bar.text('');
        
      case 1:
        $('#new-remote-type option[value="choose"]').prop('selected', true);
        $('#div-new-remote-type').hide();
        $('#div-new-remote-save').hide();
        $('#new-remote-error').empty();
        $('#div-new-remote-type-options').empty();
    }
  };

  this.findRemotes = function() {
    this.removeElements(0);
    
    var progress = function(width) {
      var bar = $('#new-remote-progress-bar');
      
      var newWidth = width + 2.5;
      if(newWidth > 100) {
        newWidth = 100; 
      }
      bar.width(newWidth.toString() +'%');
      bar.text(Math.round(newWidth).toString() + "%");
      
      if(newWidth >= 100) {
        $('#new-remote-progress').removeClass('active');
        ipcon.disconnect();
        if(uids.length > 0) {
          for(var i = 0; i < uids.length; i++) {
            if($('#new-remote-uid option[value="' + uids[i] + '"]').length === 0) {
              $('#new-remote-uid').append('<option value="' + uids[i] + '">' + uids[i] + '</option>');
            }
          }
          $('#div-new-remote-uid').show();
        } else {
          var alert_msg = 'Could not find any Remote Switch Bricklets at ' + $('#new-remote-host').val() + ':' + $('#new-remote-port').val();
          var alert = '<div class="col-sm-12 alert alert-error"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Error:</strong> ' + alert_msg + '</div>';
          $('#new-remote-error').prepend(alert);
          var bar = $('#new-remote-progress-bar');
          bar.width('0%');
          bar.text('');
        }
      } else {
        this.connectTimeout = setTimeout(progress.bind(this, newWidth), 100);
      }
    };
    
    var bar = $('#new-remote-progress-bar');
    bar.width('0%');
    bar.text('');
    
    this.connectTimeout = setTimeout(progress.bind(this, 0), 25);
    
    var HOST = $('#new-remote-host').val();
    var PORT = parseInt($('#new-remote-port').val());
    var SECRET = $('#new-remote-secret').val();
    var ipcon = new Tinkerforge.IPConnection();
    var uids = [];
    ipcon.connect(HOST, PORT,
      function(ipcon, host, port, error) {
        ipcon.disconnect();
        clearTimeout(this.connectTimeout);
        var bar = $('#new-remote-progress-bar');
        bar.width('0%');
        bar.text('');
        var alert_msg = 'Could not connect to ' + host + ':' + port.toString() + ' (Error: ' + error.toString() + ')';
        var alert = '<div class="col-sm-12 alert alert-error"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Error:</strong> ' + alert_msg + '</div>';
        $('#new-remote-error').prepend(alert);
      }.bind(this, ipcon, HOST, PORT)
    );

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
      function(ipcon, SECRET, connectReason) {
        if(typeof SECRET === 'string' && SECRET.length > 0) {
          ipcon.authenticate(SECRET,
            function(ipcon) {
              ipcon.enumerate();
            }.bind(this, ipcon),
            function(ipcon, error) {
              ipcon.disconnect();
              clearTimeout(this.connectTimeout);
              var bar = $('#new-remote-progress-bar');
              bar.width('0%');
              bar.text('');
              var alert_msg = 'Authentication failed' + ' (Error: ' + error.toString() + ')';
              var alert = '<div class="col-sm-12 alert alert-error"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Error:</strong> ' + alert_msg + '</div>';
              $('#new-remote-error').prepend(alert);
            }.bind(this, ipcon)
          );
        } else {
          ipcon.enumerate();
        }
      }.bind(this, ipcon, SECRET)
    );

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
      function(uids, uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
        if(enumerationType !== Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
          if(deviceIdentifier === Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER ||
             deviceIdentifier === Tinkerforge.BrickletRemoteSwitchV2.DEVICE_IDENTIFIER) {
               uids.push(uid);
          }
        }
      }.bind(this, uids)
    );
  };
  
  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
      
      $('#new-remote-save').click(function(e) {
        e.preventDefault();
        
        var rd = null;
        if(this.editRemoteId == -1) {
          rd = new RemoteDefinition();
        } else {
          rd = remoteControl.remotes[this.editRemoteId];
        }
        rd.host = $('#new-remote-host').val();
        rd.port = parseInt($('#new-remote-port').val());
        rd.secret = $('#new-remote-secret').val();
        rd.uid = $('#new-remote-uid').find(':selected').text();
        rd.name = $('#new-remote-name').val();
        rd.type = $('#new-remote-type').find(':selected').text();
        switch(rd.type) {
          case 'A Switch':
            var a = new RemoteSwitchA();
            a.repeats = parseInt($('#new-remote-a-repeats').val());
            a.houseCode = parseInt($('#new-remote-a-house-code').val());
            a.receiverCode = parseInt($('#new-remote-a-receiver-code').val());
            rd.typeDefinition = a;
            break;
            
          case 'B Switch':
            var b = new RemoteSwitchB();
            b.repeats = parseInt($('#new-remote-b-repeats').val());
            b.address = parseInt($('#new-remote-b-address').val());
            b.unit = parseInt($('#new-remote-b-unit').val());
            b.switchAll = $('#new-remote-b-switch-all').prop('checked');
            rd.typeDefinition = b;
            break;
            
          case 'B Dimmer':
            var b = new RemoteDimmerB();
            b.repeats = parseInt($('#new-remote-b-repeats').val());
            b.address = parseInt($('#new-remote-b-address').val());
            b.unit = parseInt($('#new-remote-b-unit').val());
            b.switchAll = $('#new-remote-b-switch-all').prop('checked');
            b.dimValue = 0;
            rd.typeDefinition = b;
            break;
            
          case 'C Switch':
            var c = new RemoteSwitchC();
            c.repeats = parseInt($('#new-remote-c-repeats').val());
            c.deviceCode = parseInt($('#new-remote-c-device-code').val());
            c.systemCode =$('#new-remote-c-system-code').find(':selected').text();
            rd.typeDefinition = c;
            break;
        }
        
        var num = rd.num;
        if(this.editRemoteId === -1) {
          remoteControl.remotes.push(rd);
        }
        
        remoteControl.updateMenu(remoteControl.remotes);
        
        if(this.editRemoteId === -1) {
          num = remoteControl.remotes[remoteControl.remotes.length-1].num;
        }
        
        var id = '#remote-page-remote-' + num;
        $(id).trigger('click');
        
        $.cookie("remotes", remoteControl.remotes, {expires : 365});
        $.cookie("configurationID", null);
        $('.glyphicon-pencil').css('color', '#FF0000');
      }.bind(this));
      
      $('#new-remote-find').click(function(e) {
        e.preventDefault();
        this.findRemotes();
      }.bind(this));
      
      $('#new-remote-host').keypress(function(e) {
        if(e.keyCode === 13) {
          e.preventDefault();
          $('#new-remote-port').focus();
        }
      });
      
      $('#new-remote-port').keypress(function(e) {
        if(e.keyCode === 13) {
          e.preventDefault();
          $('#new-remote-secret').focus();
        }
      });
      
      $('#new-remote-secret').keypress(function(e) {
        if(e.keyCode === 13) {
          console.log("secret keypress");
          e.preventDefault();
          this.findRemotes();
        }
      }.bind(this));
      
      $('#new-remote-secret').keyup(function(e) {
        if(e.keyCode !== 13) {
          this.removeElements(0);
        }
      }.bind(this));
      
      $('#new-remote-host').keyup(function() {
        this.removeElements(0);
      }.bind(this));
      
      $('#new-remote-port').keyup(function() {
        this.removeElements(0);
      }.bind(this));
      
      $('#new-remote-port').change(function() {
        this.removeElements(0);
      }.bind(this));
      
      $('#new-remote-port').TouchSpin({
        min: 1,
        max: 65535,
        stepinterval: 1,
        maxboostedstep: 5,
        initval: 4280,
      });
      
      $('#new-remote-uid').change(function() {
        $('#div-new-remote-name').show();
        $('#div-new-remote-name').focus();
      });
      
      $('#new-remote-name').keyup(function() {
        var value = $('#new-remote-name').val();
        if(value.length > 0) {
          $('#div-new-remote-type').show();
        } else {
          this.removeElements(1);
        }
      }.bind(this));
      
      $('#new-remote-type').on('change', function(e) {
        $('#div-new-remote-save').show();
        $('#div-new-remote-type-options').empty();
        switch(this.value) {
          case "A":
            addSwitchAOptions();
            
            $('#new-remote-a-repeats').TouchSpin({
              min: 4,
              max: 32,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 8,
            });
            
            $('#new-remote-a-house-code').TouchSpin({
              min: 0,
              max: 31,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 0,
            });
            
            $('#new-remote-a-receiver-code').TouchSpin({
              min: 0,
              max: 31,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 0,
            });
            
            $('.new-remote-a-house-code-checkbox').click(function() {
              var code = 0;
              for(var i = 0; i < 5; i++) {
                if($('#new-remote-a-house-code-' + (i+1).toString()).prop('checked')) {
                  code += (1 << i);
                }
              }          
              $('#new-remote-a-house-code').val(code);
            });
            
            $('#new-remote-a-house-code').change(function() {
              var value = $('#new-remote-a-house-code').val();
              if(value >= 0 && value <= 31) {
                for(var i = 0; i < 5; i++) {
                  var checkbox = $('#new-remote-a-house-code-' + (i+1).toString());
                  if(value & (1 << i)) {
                    checkbox.prop('checked', true);
                  } else {
                    checkbox.prop('checked', false);
                  }
                }
              }
            });
            
            $('.new-remote-a-receiver-code-checkbox').click(function() {
              var code = 0;
              for(var i = 0; i < 5; i++) {
                if($('#new-remote-a-receiver-code-' + (i+1).toString()).prop('checked')) {
                  code += (1 << i);
                }
              }          
              $('#new-remote-a-receiver-code').val(code);
            });
            
            $('#new-remote-a-receiver-code').change(function() {
              var value = $('#new-remote-a-receiver-code').val();
              if(value >= 0 && value <= 31) {
                for(var i = 0; i < 5; i++) {
                  var checkbox = $('#new-remote-a-receiver-code-' + (i+1).toString());
                  if(value & (1 << i)) {
                    checkbox.prop('checked', true);
                  } else {
                    checkbox.prop('checked', false);
                  }
                }
              }
            });
            break;
            
          case "Bd":
          case "B":
            addSwitchBOptions();
            
            $('#new-remote-b-repeats').TouchSpin({
              min: 4,
              max: 32,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 8,
            });
            
            $('#new-remote-b-address').TouchSpin({
              min: 0,
              max: 67108863,
              stepinterval: 1,
              maxboostedstep: 100,
              initval: 0,
            });
            
            $('#new-remote-b-unit').TouchSpin({
              min: 0,
              max: 15,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 0,
            });
            
            $('#new-remote-b-switch-all').change(function() {
              if($(this).is(":checked")) {
                $('#new-remote-b-unit').prop('disabled', true);
                $('#div-new-remote-b-unit button').prop('disabled', true);
              } else {
                $('#new-remote-b-unit').prop('disabled', false);
                $('#div-new-remote-b-unit button').prop('disabled', false);
              }  
            });
            
            break;
            
          case "C":
            addSwitchCOptions();
            
            $('#new-remote-c-repeats').TouchSpin({
              min: 4,
              max: 32,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 8,
            });
            
            $('#new-remote-c-device-code').TouchSpin({
              min: 1,
              max: 16,
              stepinterval: 1,
              maxboostedstep: 1,
              initval: 1,
            });
            
            break;
        }
      });
    }
    
    if(this.editRemoteId !== -1) {
      this.editRemote();
    }
  };

  this.stop = function() {
    clearTimeout(this.connectTimeout);
    $('#dashboard').empty();
    this.running = false;
  };
}
