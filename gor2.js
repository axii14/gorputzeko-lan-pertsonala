function elementuenatributuak(atributua){
    var elementua = [];
    var elementuak = document.getElementsByTagName('span');
    for (var i = 0, j = elementuak.length; i < j; i++){
      if (elementuak[i].getAttribute(atributua)){
        elementua.push(elementuak[i]);
      }}
    return elementua;
  }
  
  var terminalanelementuak = elementuenatributuak("terminal");
  function hasi(){
    var elementudanak = terminalanelementuak;
    for (var i = 0; i < elementudanak.length; i++){
      var e = elementudanak[i]
      e.completeHTML = e.innerHTML
      e.innerHTML = ""
      e.i = 0
    }}
  
  function animau(){
    hurrengua()
  }
  
  function hurrengua(){
    var bukatuta = true
    var elementudanak = terminalanelementuak;
    for (var i = 0; i < elementudanak.length && bukatuta == true; i++){
      var e = elementudanak[i]
      e.i ++
      if (e.innerHTML.length < e.completeHTML.length){
        var a =  e.completeHTML.substring(0, e.i) 
        e.innerHTML = a
        bukatuta = false
      }}
  
    if (!bukatuta){
      setTimeout(hurrengua, 500/20)
    }}
  
  hasi()
  window.onload = function() { animau() };
