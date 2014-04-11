function PageSettings() {
  this.name = "Settings";
  this.running = false;
  this.socket = null;
  this.HOST = 'www.iot-remote.com';
  this.PORT = '80';
  this.gotAnswer = false;

  this.addDOMElements = function() {
    var html = '<form class="form-horizontal" role="form">' +
                 '<div id="div-remote-settings-error" class="form-group">' +
                   '<div class="col-sm-12">' +
                     '<div id="remote-settings-error" class="alert alert-error">' +
                     '</div>' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<div id="div-remote-settings-load-value" class="col-sm-12">' +
                     '<input placeholder="Configuration ID to load" class="form-control" type="text" id="remote-settings-load-value"/>' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<div id="div-remote-settings-load" class="col-sm-12">' +
                     '<button id="remote-settings-load" type="button" class="btn btn-primary btn-block btn-lg"><span class="glyphicon glyphicon-cloud-download"></span> Load configuration</button>' +
                   '</div>' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<div id="div-remote-settings-save" class="col-sm-12">' +
                     '<button id="remote-settings-save" type="button" class="btn btn-primary btn-block btn-lg"><span class="glyphicon glyphicon-cloud-upload"></span> Save configuration</button>' +
                   '</div>' +
                 '</div>' +
                 '<div id="div-remote-settings-id" class="col-sm-12 center-block">' +
                   '<div id="remote-settings-id" class="label label-warning">Current configuration not saved.</div>' +
                 '</div>' +
               '</form>';
    $('#dashboard').append(html);
    
    $('#div-remote-settings-error').hide();
    
    this.checkConfiguration();
  };
  
  
  this.checkConfiguration = function() {
    var configurationID = $.cookie("configurationID");
    if(typeof configurationID === 'string' && configurationID.length === 6) {
      $('#remote-settings-id').removeClass('label-warning');
      $('#remote-settings-id').addClass('label-success');
      $('#remote-settings-id').empty();
      $('#remote-settings-id').append('Configuration ID: <b>' + configurationID + '</b>');
      
      $('#remote-settings-save').prop('disabled', true);
      $('#remote-settings-save').empty();
      $('#remote-settings-save').append('<span class="glyphicon glyphicon-saved"></span> Current configuration saved');
    } else {
      $('#remote-settings-id').removeClass('label-success');
      $('#remote-settings-id').addClass('label-warning');
      $('#remote-settings-id').empty();
      $('#remote-settings-id').append('Current configuration not saved.');
      
      $('#remote-settings-save').prop('disabled', false);
      $('#remote-settings-save').empty();
      $('#remote-settings-save').append('<span class="glyphicon glyphicon-cloud-upload"></span> Save configuration');
    }
  };
  
  this.loadConfiguration = function() {
    $('#div-remote-settings-error').hide();
    this.socket = new WebSocket('ws://' + this.HOST +':' + this.PORT + '/load');
    this.socket.binaryType = "arraybuffer";
    
    this.socket.onopen = function() {
      this.gotAnswer = false;
      configurationID = $('#remote-settings-load-value').val();
      if(configurationID.length === 6) {
        this.socket.send(configurationID);
      } else {
        this.gotAnswer = true;
        $('#remote-settings-error').text('Error: The Configuration ID is malformed. It should consist of one character and a five digit number.');
        $('#div-remote-settings-error').show();
        this.socket.close();
      }
    }.bind(this);
    
    this.socket.onmessage = function(e) {
      if(typeof e.data == "string") {
        remoteControl.remotes = JSON.parse(e.data);
        // TODO: Sanity check: Does remoteControl.remotes have correct structure?
        
        this.gotAnswer = true;
        
        configurationID = $('#remote-settings-load-value').val();
        $.cookie("configurationID", configurationID, {expires : 365});
        $('.glyphicon-pencil').css('color', '');
        
        remoteControl.updateMenu(remoteControl.remotes);
        $.cookie("remotes", remoteControl.remotes, {expires : 365});
        
        this.checkConfiguration();
      }
      this.socket.close();
    }.bind(this);
    
    this.socket.onclose = function(e) {
      if(this.gotAnswer === false) {
        configurationID = $('#remote-settings-load-value').val();
        $('#remote-settings-error').text('Error: Server does not have a configuration for ID ' + configurationID + '.');
        $('#div-remote-settings-error').show();
      }
    }.bind(this);
    
    this.socket.onerror = function(e) {
      this.gotAnswer = true;
      $('#remote-settings-error').text('Error: Could not open connection to server. Do you have access to the Internet?');
      $('#div-remote-settings-error').show();
    }.bind(this);
  };

  this.saveConfiguration = function() {
    $('#div-remote-settings-error').hide();
    this.socket = new WebSocket('ws://' + this.HOST +':' + this.PORT + '/save');
    this.socket.binaryType = "arraybuffer";
    
    this.socket.onopen = function() {
      this.gotAnswer = false;
      var str = JSON.stringify(remoteControl.remotes);
      this.socket.send(str);
    }.bind(this);
    
    this.socket.onmessage = function(e) {
      if(typeof e.data == "string") {
        this.gotAnswer = true;
        var configurationID = e.data;
        if(configurationID.length === 6) {
          $.cookie("configurationID", configurationID, {expires : 365});
          $('.glyphicon-pencil').css('color', '');
        } else {
          $('#remote-settings-error').text('Error: Server returned malformed Cofiguration ID.');
          $('#div-remote-settings-error').show();
        }
        
        this.checkConfiguration();
      }
      this.socket.close();
    }.bind(this);
    
    this.socket.onclose = function(e) {
      if(this.gotAnswer === false) {
        $('#remote-settings-error').text('Error: Could not save configuration to server.');
        $('#div-remote-settings-error').show();
      }
    }.bind(this);
    
    this.socket.onerror = function(e) {
      this.gotAnswer = true;
      $('#remote-settings-error').text('Error: Could not open connection to server. Do you have access to the Internet?');
      $('#div-remote-settings-error').show();
    }.bind(this);
  };
  
  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
      
      $('#remote-settings-save').click(this.saveConfiguration.bind(this));
      
      $('#remote-settings-load').click(this.loadConfiguration.bind(this));
      $('#remote-settings-load-value').keypress(function(e) {
        if(e.keyCode === 13) {
          e.preventDefault();
          this.loadConfiguration();
        }
      }.bind(this));
    }
  };

  this.stop = function() {
    $('#dashboard-header').show();
    $('#dashboard').empty();
    this.running = false;
  };
}
