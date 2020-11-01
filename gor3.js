(function () {
    var zenbat = 75;
    var topia = document.querySelector('.elurretan');
    var canvasa = document.createElement('canvas');
    var kontextua = canvasa.getContext('2d');
    var luzeera = topia.clientWidth;
    var altuera = topia.clientHeight;
  
    var funtzionau = false;
  
    function neurrixak_aldatu() {
      luzeera = topia.clientWidth;
      altuera = topia.clientHeight;
      canvasa.width = luzeera;
      canvasa.height = altuera;
      kontextua.fillStyle = '#fdff84';
      var funtzionaitteneben = funtzionau;
      funtzionau = luzeera > 600;
  
      if (!funtzionaitteneben && funtzionau)
        animaziñua(aldatu);
    }
  
    var elurra1 = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
    }
    elurra1.prototype.reset = function() {
      this.x = Math.random() * luzeera;
      this.y = Math.random() * -altuera;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  
    canvasa.style.position = 'absolute';
    canvasa.style.left = canvasa.style.top = '0';
  
    var elurra2 = [], elurra3;
    for (i = 0; i < zenbat; i++) {
      elurra3 = new elurra1();
      elurra3.reset();
      elurra2.push(elurra3);
    }
  
    function aldatu() {
      kontextua.clearRect(0, 0, luzeera, altuera);
  
      for (i = 0; i < zenbat; i++) {
        elurra3 = elurra2[i];
        elurra3.y += elurra3.vy;
        kontextua.beginPath();
        kontextua.arc(elurra3.x, elurra3.y, elurra3.r, 0, Math.PI * 2, false);
        kontextua.fill();
  
        if (elurra3.y > altuera) {
          elurra3.reset();
        }}
      animaziñua(aldatu);
    }
  
    window.animaziñua = (function(){
      return  window.requestAnimationFrame       ||
              function(berriz){};
    })();
    neurrixak_aldatu();
    topia.appendChild(canvasa);
  })();
