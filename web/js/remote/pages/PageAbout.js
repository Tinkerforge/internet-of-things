function PageAbout() {
  this.name = "About";
  this.running = false;

  this.init = function() {

  };

  this.addDOMElements = function() {
    html = '<div class="row col-xs-18 col-sm-12"><div class="col-xs-18 col-sm-12">' +
           '<h3>What and Why?</h3>' +
           '<p>The Web Brick Viewer is a project from <a href="http://www.tinkerforge.com">Tinkerforge</a> to test and showcase new web technologies in combination with Bricks and Bricklets.<p>' +
           '<p>This web site can be used as a replacement for the Brick Viewer for some Bricks and Bricklets. Support for new Bricks Bricklets is added continously.' +
           '<h3>How?</h3>' +
           '<p>brickv.com consists of just one index.html with lots of JavaScript. There is no server-side code that runs on this webpage. Everything is done directly in your browser. <b>If you visit this site the HTML and JavaScript is downloaded from brickv.com to your browser, after that there is no communication between the browser and the internet whatsoever.</b> We use the new WebSocket support of the Tinkerforge system to directly communicate between the browser and the Brick Daemon.</p>' +
           '<h3>Can I run it locally?</h3>' +
           '<p>Yes! You can find the source code for this web site at <a href="https://github.com/Tinkerforge/brickv.com">https://github.com/Tinkerforge/brickv.com</a>. You can <a href="https://github.com/Tinkerforge/brickv.com.git">clone</a> or <a href="https://github.com/Tinkerforge/brickv.com/archive/master.zip">download</a> it from there. Unzip all of the files in one directory and just open the index.html with your browser, you don\'t even need a webserver to run it!</p>' +
           '<h3>I have a Brick, how do i use it here?</h3>' +
           '<p>Easy. Connect the Brick to your PC, <a href="#">enable the WebSocket support</a> of your Brick Daemon, enter host and port at the top and press "Connect".' +
           '</div></div>';
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
