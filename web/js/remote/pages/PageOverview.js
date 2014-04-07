function PageOverview() {
  this.name = "Overview";
  this.running = false;

  this.addDOMElements = function() {
    $('#dashboard-header').hide();
    var html = '<div class="col-sm-8 hidden-xs" id="div-img-overview-left"><img width="336" height="265" id="img-overview-left" src="img/overview_left.png"></div>' +
               '<div class="col-sm-4 hidden-xs" id="div-img-overview-right"><img width="166" height="198" id="img-overview-right" src="img/overview_right.png"></div>';
    $('#dashboard').append(html);
  };

  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
    }
  };

  this.stop = function() {
    $('#dashboard-header').show();
    $('#dashboard').empty();
    this.running = false;
  };
}
