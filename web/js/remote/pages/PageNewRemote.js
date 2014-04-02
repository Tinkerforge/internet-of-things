function PageNewRemote() {
  this.name = "New Remote...";
  this.running = false;

  this.addDOMElements = function() {
    html = '<form class="form-horizontal" role="form">' +
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
                 '<input type="text" class="form-control" id="new-remote-name" placeholder="Name of Socket (e.g. bedside lamp)">' +
               '</div>' +
             '</div>' +
             '<div id="div-new-remote-type" class="form-group">' +
               '<label for="new-remote-type" class="col-sm-2 control-label">Type</label>' +
               '<div class="col-sm-10">' +
                 '<select id="new-remote-type" class="form-control">' +
                   '<option value="choose" selected disabled>Choose Type</option>' +
                   '<option value="A">Type A</option>' +
                   '<option value="B">Type B</option>' +
                   '<option value="C">Type C</option>' +
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

  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
      
      $('#new-remote-save').click(function(e) {
        e.preventDefault();
        
        var rd = new RemoteDefinition();
        rd.host = $('#new-remote-host').val();
        rd.port = parseInt($('#new-remote-port').val());
        rd.uid = $('#new-remote-uid').find(':selected').text();
        rd.name = $('#new-remote-name').val();
        rd.type = $('#new-remote-type').find(':selected').text();
        console.log(rd);
        switch(rd.type) {
          case 'Type A':
            var a = new RemoteTypeA();
            a.repeats = 5; // TODO: get from user
            a.houseCode = parseInt($('#new-remote-a-house-code').val());
            a.receiverCode = parseInt($('#new-remote-a-receiver-code').val());
            rd.typeDefinition = a;
            break;
            
          case 'Type B':
            break;
            
          case 'Type C':
            break;
        }
        
        remoteControl.remotes.push(rd);
        remoteControl.updateMenu(remoteControl.remotes);
      });
      
      $('#new-remote-find').click(function(e) {
        e.preventDefault();
        
        var progress = function(width) {
          var bar = $('#new-remote-progress-bar');
          
          console.log(width);

          var newWidth = width + 2.5;
          if(newWidth > 100) {
            newWidth = 100; 
          }
          bar.width(newWidth.toString() +'%');
          bar.text(newWidth.toString() + "%");
          
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
              // TODO: Message to user
            }
          } else {
            setTimeout(progress.bind(this, newWidth), 100);
          }
        };
        
        setTimeout(progress.bind(this, 0), 25);
        
        var HOST = $('#new-remote-host').val();
        var PORT = parseInt($('#new-remote-port').val());
        var ipcon = new Tinkerforge.IPConnection();
        var uids = [];
        ipcon.connect(HOST, PORT,
          function(ipcon, error) {
            ipcon.disconnect();
            var alert_msg = 'Connection Error ' + error + '.';
            var alert = '<div class="row col-xs-18 col-sm-12"><div class="col-sm-6 alert alert-error"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Error:</strong> ' + alert_msg + '</div></div></div>';
            $('div.main').prepend(alert);
          }.bind(this, ipcon)
        );

        ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
          function(ipcon, connectReason) {
            ipcon.enumerate();
          }.bind(this, ipcon)
        );

        ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
          function(uids, uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
            if(enumerationType !== Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
              if(deviceIdentifier === Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER) {
                uids.push(uid);
              }
            }
          }.bind(this, uids)
        );
      });
      
      $('#new-remote-host').keyup(function() {
        // TODO: Hide everything again, delete UIDs
      });
      
      $('#new-remote-port').keyup(function() {
        // TODO: Hide everything again, delete UIDs
      });
      
      $('#new-remote-port').TouchSpin({
        min: 1,
        max: 65535,
        stepinterval: 1,
        maxboostedstep: 5,
        initval: 4280,
      });
      
      $('#new-remote-uid').change(function() {
        $('#div-new-remote-name').show();
      });
      
      $('#new-remote-name').keyup(function() {
        var value = $(this).val();
        if(value.length > 0) {
          $('#div-new-remote-type').show();
        } else {
          $('#div-new-remote-type-options').empty();
          $('#new-remote-type option[value="choose"]').prop('selected', true);
          $('#div-new-remote-type').hide();
          $('#div-new-remote-save').hide();
        }
      });
      
      $('#new-remote-type').on('change', function(e) {
        $('#div-new-remote-save').show();
        $('#div-new-remote-type-options').empty();
        switch(this.value) {
          case "A":
            html = '<div class="form-group">' +
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
          case "B":
            break;
          case "A":
            break;
        }
      });
    }
  };

  this.stop = function() {
    $('#dashboard').empty();
    this.running = false;
  };
}
