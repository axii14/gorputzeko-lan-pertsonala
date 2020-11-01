const botoilikidua = class botoilikidua{
  
    constructor(botoia){
      const { width, height } = botoia.getBoundingClientRect();
      const estilua = window.getComputedStyle(botoia);
      const opziñuak = botoia.dataset || {};
  
      this.tensiñua = opziñuak.tensiñua || 0.4;
      this.width = width;
      this.height = height;
      this.margena = opziñuak.margena || 50;
   
      this.hoverra = opziñuak.hoverra || 0.5;
      this.bretxia = opziñuak.bretxia || 5;
      this.indarra = opziñuak.indarra || 0.2;
   
      this.koloria1 = opziñuak.koloria1 || '#e77c72';
      this.koloria2 = opziñuak.koloria2 || '#00c87a';
      this.koloria3 = opziñuak.koloria3 || '#E509E6';
      this.kapak = [{
        viscosity: 0.5,
        mouseForce: 100,
        forceLimit: 2,
      },{
        viscosity: 0.8,
        mouseForce: 150,
        forceLimit: 3,
      }];
      
      this.canvasa = opziñuak.canvasa || document.createElement('canvas');
      this.kontenidua = this.canvasa.getContext('2d');
   
      botoia.append(this.canvasa)
      this.ikututakuan = [];
      this.bibraziñuak = opziñuak.bibraziñuak || 0;
      botoia.addEventListener('mousemove', this.mousemove);
      botoia.addEventListener('mouseout', this.mouseout);
      this.hasierarabueltau();
      this.animau();
      this.behekua();
    }
  
    behekua(){
      this.mousemove({ offsetX: Math.random() * this.width, offsetY: 1 })
    }
  
    get mousemove(){
      return (e) => {
        this.ikututakuan = [{
          x: e.offsetX,
          y: e.offsetY,
          force: 1,
        }];};}
  
    get mouseout(){
      return (e) => {};
    }
  
    get animaziokapa(){
      return this.__animaziokapa || (this.__animaziokapa = (
        function (callbacka){setTimeout(callbacka, 10)}).bind(window));
    }
  
    distantzia(d1, d2){
      return Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2));
    }
  
    aldatu(){
      for (let kapia = 0; kapia < this.kapak.length; kapia++){
        const kapa = this.kapak[kapia];
        const puntuak = kapa.puntuak;
        for (let puntua = 0; puntua < puntuak.length; puntua++){
          const puntuaa = puntuak[puntua];
          const dx = puntuaa.ox - puntuaa.x + (Math.random() - 0.5) * this.bibraziñuak;
          const dy = puntuaa.oy - puntuaa.y + (Math.random() - 0.5) * this.bibraziñuak;
          const d = Math.sqrt(dx * dx + dy * dy);
          const f = d * this.indarra;
          puntuaa.vx += f * ((dx / d) || 0);
          puntuaa.vy += f * ((dy / d) || 0);
          
          for (let ikutu = 0; ikutu < this.ikututakuan.length; ikutu++){
            const ikututakua = this.ikututakuan[ikutu];
            let xaguanindarra = kapa.mouseForce;
            if (ikututakua.x > this.margena && ikututakua.x < this.margena + this.width && ikututakua.y > this.margena && ikututakua.y < this.margena + this.height){
              xaguanindarra *= -this.hoverra;
            }
            const mx = puntuaa.x - ikututakua.x;
            const my = puntuaa.y - ikututakua.y;
            const md = Math.sqrt(mx * mx + my * my);
            const mf = Math.max(-kapa.forceLimit, Math.min(kapa.forceLimit, (xaguanindarra * ikututakua.force) / md));
            puntuaa.vx += mf * ((mx / md) || 0);
            puntuaa.vy += mf * ((my / md) || 0);
          }
          puntuaa.vx *= kapa.viscosity;
          puntuaa.vy *= kapa.viscosity;
          puntuaa.x += puntuaa.vx;
          puntuaa.y += puntuaa.vy;
        }
        
        for (let puntua = 0; puntua < puntuak.length; puntua++){
          const aurrekua = puntuak[(puntua + puntuak.length - 1) % puntuak.length];
          const puntuaa = puntuak[puntua];
          const hurrengua = puntuak[(puntua + puntuak.length + 1) % puntuak.length];
          const daurrekua = this.distantzia(puntuaa, aurrekua);
          const dhurrengua = this.distantzia(puntuaa, hurrengua);
  
          const linea ={
            x: hurrengua.x - aurrekua.x,
            y: hurrengua.y - aurrekua.y,
          };
          
          const dLinea = Math.sqrt(linea.x * linea.x + linea.y * linea.y);
  
          puntuaa.caurrekua = {
            x: puntuaa.x - (linea.x / dLinea) * daurrekua * this.tensiñua,
            y: puntuaa.y - (linea.y / dLinea) * daurrekua * this.tensiñua,
          };
          puntuaa.churrengua = {
            x: puntuaa.x + (linea.x / dLinea) * dhurrengua * this.tensiñua,
            y: puntuaa.y + (linea.y / dLinea) * dhurrengua * this.tensiñua,
          };}}}
  
    animau(){
      this.animaziokapa(() => {
        this.aldatu();
        this.marraztu();
        this.animau();
      });}
  
    marraztu(){
      this.kontenidua.clearRect(0, 0, this.canvasa.width, this.canvasa.height);
      for (let kapia = 0; kapia < this.kapak.length; kapia++){
        const kapa = this.kapak[kapia];
        if (kapia === 1){
          if (this.ikututakuan.length > 0){
            const gx = this.ikututakuan[0].x;
            const gy = this.ikututakuan[0].y;
            kapa.koloria = this.kontenidua.createRadialGradient(gx, gy, this.height * 2, gx, gy, 0);
            kapa.koloria.addColorStop(0, this.koloria2);
            kapa.koloria.addColorStop(1, this.koloria3);
          } else{
            kapa.koloria = this.koloria2;
          }} else{
          kapa.koloria = this.koloria1;
        }
        const puntuak = kapa.puntuak;
        this.kontenidua.fillStyle = kapa.koloria;
  
        this.kontenidua.beginPath();
        this.kontenidua.moveTo(puntuak[0].x, puntuak[0].y);
        for (let puntua = 1; puntua < puntuak.length; puntua += 1){
          this.kontenidua.bezierCurveTo(
            puntuak[(puntua + 0) % puntuak.length].churrengua.x,
            puntuak[(puntua + 0) % puntuak.length].churrengua.y,
            puntuak[(puntua + 1) % puntuak.length].caurrekua.x,
            puntuak[(puntua + 1) % puntuak.length].caurrekua.y,
            puntuak[(puntua + 1) % puntuak.length].x,
            puntuak[(puntua + 1) % puntuak.length].y
          );}
        this.kontenidua.fill();
     }}
    
    puntuaksortu(x, y){
      return{
        x: x,
        y: y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0,
      }}
  
    hasierarabueltau(){
      this.canvasa.width = this.width + this.margena * 2;
      this.canvasa.height = this.height + this.margena * 2;
      for (let kapia = 0; kapia < this.kapak.length; kapia++){
        const kapa = this.kapak[kapia];
        const puntuak = [];
        for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.bretxia){
          puntuak.push(this.puntuaksortu(x + this.margena,this.margena));}
        
        for (let a = ~~(this.height * 1.25); a >= 0; a -= this.bretxia){
          const angulua = (Math.PI / ~~(this.height * 1.25)) * a;
          puntuak.push(this.puntuaksortu(Math.sin(angulua) * this.height / 2 + this.margena + this.width - this.height / 2,Math.cos(angulua) * this.height / 2 + this.margena + this.height / 2));}
        
        for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.bretxia){
          puntuak.push(this.puntuaksortu(x + this.margena,this.margena + this.height));}
        
        for (let a = 0; a <= ~~(this.height * 1.25); a += this.bretxia){
          const angulua = (Math.PI / ~~(this.height * 1.25)) * a;
          puntuak.push(this.puntuaksortu((this.height - Math.sin(angulua) * this.height / 2) + this.margena - this.height / 2,Math.cos(angulua) * this.height / 2 + this.margena + this.height / 2));}
        kapa.puntuak = puntuak;
      }}}
  
  const botoiak = document.querySelectorAll('.botoia');
  
  botoiak.forEach(botoia => {
    botoia.botoialikidua = new botoilikidua(botoia);
  })
