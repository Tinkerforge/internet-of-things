function PageSettings() {
  this.name = "Settings";
  this.running = false;

  this.addDOMElements = function() {
    var html = '<form class="form-horizontal" role="form">' +
                 '<div class="form-group">' +
                   '<div id="div-remote-switch-dim-value" class="col-sm-12">' +
                     '<input placeholder="Configuration ID" class="form-control" type="text" id="remote-settings-load-value"/>' +
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
  };

  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
      
      $('#remote-settings-save').click(function() {
        $('#remote-settings-id').removeClass('label-warning');
        $('#remote-settings-id').addClass('label-success');
        $('#remote-settings-id').empty();
        $('#remote-settings-id').append('Configuration ID: <b>X41876</b>');
        $('#remote-settings-save').prop('disabled', true);
        $('#remote-settings-save').empty();
        $('#remote-settings-save').append('<span class="glyphicon glyphicon-saved"></span> Current configuration saved');
      });
    }
  };

  this.stop = function() {
    $('#dashboard-header').show();
    $('#dashboard').empty();
    this.running = false;
  };
}
