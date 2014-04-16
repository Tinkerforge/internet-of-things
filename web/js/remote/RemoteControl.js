function RemoteSwitchA() {
  var houseCode;
  var receiverCode;
  var repeats;
}

function RemoteSwitchB() {
  var address;
  var unit;
  var switchAll;
  var repeats;
}

function RemoteDimmerB() {
  var address;
  var unit;
  var switchAll;
  var dimValue;
  var repeats;
}

function RemoteSwitchC() {
  var systemCode;
  var deviceCode;
  var repeats;
}

function RemoteDefinition() {
  var host;
  var port;
  var secret;
  var uid;
  var name;
  var num;
  var type;
  var typeDefinition;
}

function RemoteControl() {
  this.pages = {};
  this.pages['overview'] = new PageOverview();
  this.pages['settings'] = new PageSettings();
  this.pages['about'] = new PageAbout();
  this.pages['legal-info'] = new PageLegalInfo();
  this.pages['new-remote'] = new PageNewRemote();
  this.pages['edit-remote'] = new PageNewRemote();
  this.pages['edit-remote'].setEdit();
  
  this.remotes = [];

  this.currentPage = this.pages['overview'];
  this.currentPage.start();
  
  this.init = function() {
    $.cookie.json = true;
    var remotes = $.cookie("remotes");
    if(remotes !== undefined) {
      remoteControl.remotes = remotes;
      remoteControl.updateMenu(remoteControl.remotes);
    }
    
    var configurationID = $.cookie("configurationID");
    if(typeof configurationID !== 'string' || configurationID.length !== 6) {
      $('.glyphicon-pencil').css('color', '#FF0000');
    }

  };
  
  this.brickMenuClick = function(name, ev) {
    $('.remote-can-be-active').each(function() {
      $(this).parent().removeClass('active');
    });
    
    if(this.currentPage !== undefined) {
      this.currentPage.stop();
    }

    if(this.pages[name] === undefined) {
      // TODO: This should not be possible, show error page?
      // this.pages[page] = ErrorPage();
    }

    this.currentPage = this.pages[name];
    $('#dashboard-header').empty();
    $('#dashboard-header').append(this.currentPage.name);

    $('#remote-page-' + name).parent().addClass('active');
    this.currentPage.start();
  };

  this.updateMenu = function(remotes) {
    var ul = $('#sidebar-remotes');
    ul.empty();

    for(var i = 0; i < remotes.length; i++) {
      var remote = remotes[i];
      remote.num = i;
      var li = $("<li>");
      
      var id = 'remote-' + remote.num;

      var a = $("<a>", {
        'text': remote.name,
        'href': '#dashboard-header',
        'id': 'remote-page-' + id,
        'class': 'remote-can-be-active',
        'click': this.brickMenuClick.bind(this, id)
      });
      
      if(this.pages[id] === undefined) {
        this.pages[id] = new PageRemoteSwitch();
      }
      this.pages[id].setRemoteDefinition(remote);

      li.append(a);
      ul.append(li);
    }
  };
  
  $('#remote-page-overview').click(this.brickMenuClick.bind(this, 'overview'));
  $('#remote-page-settings').click(this.brickMenuClick.bind(this, 'settings'));
  $('#remote-page-about').click(this.brickMenuClick.bind(this, 'about'));
  $('#remote-page-legal-info').click(this.brickMenuClick.bind(this, 'legal-info'));
  $('#remote-page-new-remote').click(this.brickMenuClick.bind(this, 'new-remote'));
  $('#dashboard-header').text(this.currentPage.name);
}

var remoteControl =  new RemoteControl();
remoteControl.init();