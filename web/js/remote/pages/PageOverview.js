function PageOverview() {
  this.name = "Overview";
  this.running = false;

  this.init = function() {

  };

  this.addDOMElements = function() {
    html = 'overview';
    $('#dashboard').append(html);
  };

  this.start = function() {
    if(!this.running) {
      this.init();
      this.running = true;
      this.addDOMElements();
    }
  };

  this.stop = function() {
    $('#dashboard').empty();
    this.running = false;
  };
}
