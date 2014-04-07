function PageLegalInfo() {
  this.name = "Legal Info";
  this.running = false;

  this.addDOMElements = function() {
    var impressum = '<div class="row col-xs-18 col-sm-12"><div class="col-xs-18 col-sm-12">Tinkerforge GmbH<br>Römerstr. 18<br>33758 Stukenbrock<br></p><h3>Represented by:</h3><p>Bastian Nordmeyer<br>Olaf Lüke</p><h3>Contact:</h3><p>Fax: +49 5207 8996087<br>Email: <a href="mailto:info@tinkerforge.com">info@tinkerforge.com</a></p><h3>Entry in Commercial Register:</h3><p>Registry Court: Bielefeld<br>Register Number: HRB 40300</p><h3>VAT-ID:</h3><p>Value Added Tax Identification Number: DE 276514068</p><h3>WEEE Registration:</h3><p>WEEE-Reg.-Nr.: DE 53246002</p></div></div>';
    $('#dashboard').append(impressum);
  };

  this.start = function() {
    if(!this.running) {
      this.running = true;
      this.addDOMElements();
    }
  };

  this.stop = function() {
    $('#dashboard').empty();
    this.running = false;
  };
}
