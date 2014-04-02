function getDeviceInformationDOM(deviceInformation) {
  html = '<div class="row col-xs-18 col-sm-12">' +
           '<div class="col-xs-4 col-sm-2"><h4 class="centered">UID</h4><span class="text-muted">' + deviceInformation.uid + '</span></div>' +
           '<div class="col-xs-4 col-sm-2"><h4>Connected</h4><span class="text-muted">' + deviceInformation.connectedUid + '</span></div>' +
           '<div class="col-xs-4 col-sm-2"><h4>Position</h4><span class="text-muted">' + deviceInformation.position + '</span></div>' +
           '<div class="col-xs-4 col-sm-2"><h4>Firmware</h4><span class="text-muted">' + deviceInformation.firmwareVersion[0] + '.' + deviceInformation.firmwareVersion[1] + '.' + deviceInformation.firmwareVersion[2] + '</span></div>' +
           '<div class="col-xs-4 col-sm-2"><h4>Timeouts</h4><span id="device-info-timeouts" class="text-muted">0</span></div>' +
         '</div>';

  return html;
}
