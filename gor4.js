if (document.getElementById('mapia')){
    var rekorridua = [
       {"LATITUDE":"43.033773","LONGITUDE":"-2.411234"},
       {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}, 
       {"LATITUDE":"43.033457","LONGITUDE":"-2.411948"},
       {"LATITUDE":"43.033602","LONGITUDE":"-2.412079"},
       {"LATITUDE":"43.033691","LONGITUDE":"-2.412336"},
       {"LATITUDE":"43.034336","LONGITUDE":"-2.412489"},
       {"LATITUDE":"43.034730","LONGITUDE":"-2.412647"},
       {"LATITUDE":"43.035587","LONGITUDE":"-2.412301"},
       {"LATITUDE":"43.036291","LONGITUDE":"-2.411700"},
       {"LATITUDE":"43.036783","LONGITUDE":"-2.411432"},
       {"LATITUDE":"43.037408","LONGITUDE":"-2.411335"},
       {"LATITUDE":"43.038055","LONGITUDE":"-2.411051"},
       {"LATITUDE":"43.039023","LONGITUDE":"-2.410378"},
       {"LATITUDE":"43.040256","LONGITUDE":"-2.410281"},
       {"LATITUDE":"43.041075","LONGITUDE":"-2.410084"},
       {"LATITUDE":"43.041172","LONGITUDE":"-2.409886"},
       {"LATITUDE":"43.042038","LONGITUDE":"-2.409164"},
       {"LATITUDE":"43.042477","LONGITUDE":"-2.409215"},
       {"LATITUDE":"43.043118","LONGITUDE":"-2.408888"},
       {"LATITUDE":"43.042184","LONGITUDE":"-2.408741"},
       {"LATITUDE":"43.041634","LONGITUDE":"-2.408483"},
       {"LATITUDE":"43.041127","LONGITUDE":"-2.408445"},
       {"LATITUDE":"43.040025,","LONGITUDE":"-2.408764"},
       {"LATITUDE":"43.039456","LONGITUDE":"-2.408539"},
       {"LATITUDE":"43.038518","LONGITUDE":"-2.408746"},
       {"LATITUDE":"43.038210","LONGITUDE":"-2.409044"},
       {"LATITUDE":"43.037773","LONGITUDE":"-2.408988"},
       {"LATITUDE":"43.036781","LONGITUDE":"-2.409071"},
       {"LATITUDE":"43.036185","LONGITUDE":"-2.409342"},
       {"LATITUDE":"43.036163","LONGITUDE":"-2.409782"},
       {"LATITUDE":"43.034107","LONGITUDE":"-2.411009"},
       {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}
       
      ];
     
    var koordenatuak = [];
      
    for (i = 0; i < rekorridua.length; i++) {
    var longitudiak = parseFloat(rekorridua[i].LONGITUDE);
    var latitudiak = parseFloat(rekorridua[i].LATITUDE);
    koordenatuak.push({
    lat: latitudiak,
    lng: longitudiak
    });}
      
    var loturak = new google.maps.LatLngBounds();
    
    for (i = 0; i < rekorridua.length; i++) {
    loturak.extend( new google.maps.LatLng(rekorridua[i].LATITUDE, rekorridua[i].LONGITUDE) );
    }
      
    var markadoria = loturak.getCenter();
    
    var mapia = new google.maps.Map(document.getElementById("mapia"), {
    center: markadoria,
    });
      
    var mota = 'satellite';
    mapia.setMapTypeId(mota);
    mapia.fitBounds(loturak);
    
    var ikonua = {
    path: "M -2,2 -2,-2 2,-2 2,2 z",
    fillColor: 'black',
    fillOpacity: 0.8, 
    anchor: new google.maps.Point(0,0),
    strokeWeight: 1,
    strokeColor: 'red',
    scale: 1,
    }
    
    for( i = 0; i < koordenatuak.length; i++ ) {
    var posiziñua = new google.maps.LatLng(koordenatuak[i]);
    marñadoria = new google.maps.Marker({
    position: posiziñua,
    map: mapia,
    icon: ikonua,
    title: koordenatuak[i][0]
    });};
      
    var lerruak = new google.maps.Polyline({
    path: koordenatuak,
    geodesic: true,
    strokeColor: 'red',
    strokeOpacity: 1.0,
    strokeWeight: 2
    });
    
    lerruak.setMap(mapia);
    }



    if (document.getElementById('mapixia')){
      var rekorridua = [
         {"LATITUDE":"43.033773","LONGITUDE":"-2.411234"},
         {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}, 
         {"LATITUDE":"43.033457","LONGITUDE":"-2.411948"},
         {"LATITUDE":"43.033602","LONGITUDE":"-2.412079"},
         {"LATITUDE":"43.033691","LONGITUDE":"-2.412336"},
         {"LATITUDE":"43.034336","LONGITUDE":"-2.412489"},
         {"LATITUDE":"43.034730","LONGITUDE":"-2.412647"},
         {"LATITUDE":"43.035587","LONGITUDE":"-2.412301"},
         {"LATITUDE":"43.036291","LONGITUDE":"-2.411700"},
         {"LATITUDE":"43.036783","LONGITUDE":"-2.411432"},
         {"LATITUDE":"43.037408","LONGITUDE":"-2.411335"},
         {"LATITUDE":"43.038055","LONGITUDE":"-2.411051"},
         {"LATITUDE":"43.039023","LONGITUDE":"-2.410378"},
         {"LATITUDE":"43.040256","LONGITUDE":"-2.410281"},
         {"LATITUDE":"43.041075","LONGITUDE":"-2.410084"},
         {"LATITUDE":"43.041172","LONGITUDE":"-2.409886"},
         {"LATITUDE":"43.042038","LONGITUDE":"-2.409164"},
         {"LATITUDE":"43.042477","LONGITUDE":"-2.409215"},
         {"LATITUDE":"43.043118","LONGITUDE":"-2.408888"},
         {"LATITUDE":"43.042184","LONGITUDE":"-2.408741"},
         {"LATITUDE":"43.041634","LONGITUDE":"-2.408483"},
         {"LATITUDE":"43.041127","LONGITUDE":"-2.408445"},
         {"LATITUDE":"43.040025,","LONGITUDE":"-2.408764"},
         {"LATITUDE":"43.039456","LONGITUDE":"-2.408539"},
         {"LATITUDE":"43.038518","LONGITUDE":"-2.408746"},
         {"LATITUDE":"43.038210","LONGITUDE":"-2.409044"},
         {"LATITUDE":"43.037773","LONGITUDE":"-2.408988"},
         {"LATITUDE":"43.036781","LONGITUDE":"-2.409071"},
         {"LATITUDE":"43.036185","LONGITUDE":"-2.409342"},
         {"LATITUDE":"43.036163","LONGITUDE":"-2.409782"},
         {"LATITUDE":"43.034107","LONGITUDE":"-2.411009"},
         {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}
         
        ];
       
      var koordenatuak = [];
        
      for (i = 0; i < rekorridua.length; i++) {
      var longitudiak = parseFloat(rekorridua[i].LONGITUDE);
      var latitudiak = parseFloat(rekorridua[i].LATITUDE);
      koordenatuak.push({
      lat: latitudiak,
      lng: longitudiak
      });}
        
      var loturak = new google.maps.LatLngBounds();
      
      for (i = 0; i < rekorridua.length; i++) {
      loturak.extend( new google.maps.LatLng(rekorridua[i].LATITUDE, rekorridua[i].LONGITUDE) );
      }
        
      var markadoria = loturak.getCenter();
      
      var mapixia = new google.maps.Map(document.getElementById("mapixia"), {
      center: markadoria,
      });
        
      var mota = 'satellite';
      mapixia.setMapTypeId(mota);
      mapixia.fitBounds(loturak);
      
      var ikonua = {
      path: "M -2,2 -2,-2 2,-2 2,2 z",
      fillColor: 'black',
      fillOpacity: 0.8, 
      anchor: new google.maps.Point(0,0),
      strokeWeight: 1,
      strokeColor: 'red',
      scale: 1
      }
      
      for( i = 0; i < koordenatuak.length; i++ ) {
      var posiziñua = new google.maps.LatLng(koordenatuak[i]);
      marñadoria = new google.maps.Marker({
      position: posiziñua,
      map: mapixia,
      icon: ikonua,
      title: koordenatuak[i][0]
      });};
        
      var lerruak = new google.maps.Polyline({
      path: koordenatuak,
      geodesic: true,
      strokeColor: 'red',
      strokeOpacity: 1.0,
      strokeWeight: 2
      });
      
      lerruak.setMap(mapixia);
      }



      if (document.getElementById('mapia3')){
        var rekorridua = [
           {"LATITUDE":"43.032973","LONGITUDE":"-2.401905"},
           {"LATITUDE":"43.032755","LONGITUDE":" -2.401846"}, 
           {"LATITUDE":"43.033046","LONGITUDE":"-2.398820"},
           {"LATITUDE":"43.033315","LONGITUDE":"-2.398764"},
           {"LATITUDE":"43.033293","LONGITUDE":"-2.398335"},
           {"LATITUDE":"43.033397","LONGITUDE":"-2.398016"},
           {"LATITUDE":"43.033389","LONGITUDE":"-2.397117"},
           {"LATITUDE":"43.033566","LONGITUDE":"-2.396707"},
           {"LATITUDE":"43.032797","LONGITUDE":"-2.395669"},
           {"LATITUDE":"43.031870","LONGITUDE":"-2.393857"},
           {"LATITUDE":"43.031639","LONGITUDE":"-2.392571"},
           {"LATITUDE":"43.031577","LONGITUDE":"-2.391663"},
           {"LATITUDE":"43.031371","LONGITUDE":"-2.390808"},
           {"LATITUDE":"43.030522","LONGITUDE":"-2.391098"},
           {"LATITUDE":"43.030185","LONGITUDE":"-2.391086"},
           {"LATITUDE":"43.029916","LONGITUDE":" -2.390987"},
           {"LATITUDE":"43.029751","LONGITUDE":"-2.391094"},
           {"LATITUDE":"43.029580","LONGITUDE":"-2.390971"},
           {"LATITUDE":"43.029588","LONGITUDE":"-2.390676"},
           {"LATITUDE":"43.029025","LONGITUDE":"-2.389838"},
           {"LATITUDE":"43.029158,","LONGITUDE":"-2.389496"},
           {"LATITUDE":"43.028946","LONGITUDE":"-2.388987"},
           {"LATITUDE":"43.029009","LONGITUDE":"-2.388394"},
           {"LATITUDE":"43.028743","LONGITUDE":"-2.388249"},
           {"LATITUDE":"43.028588","LONGITUDE":"-2.387503"},
           {"LATITUDE":"43.028776","LONGITUDE":"-2.387232"},
           {"LATITUDE":"43.028688","LONGITUDE":"-2.386709"}
          ];
         
        var koordenatuak = [];
          
        for (i = 0; i < rekorridua.length; i++) {
        var longitudiak = parseFloat(rekorridua[i].LONGITUDE);
        var latitudiak = parseFloat(rekorridua[i].LATITUDE);
        koordenatuak.push({
        lat: latitudiak,
        lng: longitudiak
        });}
          
        var loturak = new google.maps.LatLngBounds();
        
        for (i = 0; i < rekorridua.length; i++) {
        loturak.extend( new google.maps.LatLng(rekorridua[i].LATITUDE, rekorridua[i].LONGITUDE) );
        }
          
        var markadoria = loturak.getCenter();
        
        var mapia3 = new google.maps.Map(document.getElementById("mapia3"), {
        center: markadoria,
        });
          
        var mota = 'satellite';
        mapia3.setMapTypeId(mota);
        mapia3.fitBounds(loturak);
        
        var ikonua = {
        path: "M -2,2 -2,-2 2,-2 2,2 z",
        fillColor: 'blue',
        fillOpacity: 0.8, 
        anchor: new google.maps.Point(0,0),
        strokeWeight: 1,
        strokeColor: 'white',
        scale: 1
        }
        
        for( i = 0; i < koordenatuak.length; i++ ) {
        var posiziñua = new google.maps.LatLng(koordenatuak[i]);
        marñadoria = new google.maps.Marker({
        position: posiziñua,
        map: mapia3,
        icon: ikonua,
        title: koordenatuak[i][0]
        });};
          
        var lerruak = new google.maps.Polyline({
        path: koordenatuak,
        geodesic: true,
        strokeColor: 'blue',
        strokeOpacity: 1.0,
        strokeWeight: 2
        });
        
        lerruak.setMap(mapia3);
        }



        if (document.getElementById('mapia2')){
          var rekorridua = [
             {"LATITUDE":"43.033773","LONGITUDE":"-2.411234"},
             {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}, 
             {"LATITUDE":"43.034280","LONGITUDE":"-2.410830"},
             {"LATITUDE":"43.034050","LONGITUDE":"-2.410049"},
             {"LATITUDE":"43.035379","LONGITUDE":"-2.408254"},
             {"LATITUDE":"43.036831","LONGITUDE":"-2.406370"},
             {"LATITUDE":"43.036934","LONGITUDE":"-2.405454"},
             {"LATITUDE":"43.036617","LONGITUDE":"-2.402597"},
             {"LATITUDE":"43.035933","LONGITUDE":"-2.402176"},
             {"LATITUDE":"43.035529","LONGITUDE":"-2.402214"},
             {"LATITUDE":"43.035351","LONGITUDE":"-2.402410"},
             {"LATITUDE":"43.034698","LONGITUDE":"-2.402588"},
             {"LATITUDE":"43.032940","LONGITUDE":"-2.402263"},
             {"LATITUDE":"43.032973","LONGITUDE":"-2.401905"}
            ];
           
          var koordenatuak = [];
            
          for (i = 0; i < rekorridua.length; i++) {
          var longitudiak = parseFloat(rekorridua[i].LONGITUDE);
          var latitudiak = parseFloat(rekorridua[i].LATITUDE);
          koordenatuak.push({
          lat: latitudiak,
          lng: longitudiak
          });}
            
          var loturak = new google.maps.LatLngBounds();
          
          for (i = 0; i < rekorridua.length; i++) {
          loturak.extend( new google.maps.LatLng(rekorridua[i].LATITUDE, rekorridua[i].LONGITUDE) );
          }
            
          var markadoria = loturak.getCenter();
          
          var mapia2 = new google.maps.Map(document.getElementById("mapia2"), {
          center: markadoria,
          });
            
          var mota = 'satellite';
          mapia2.setMapTypeId(mota);
          mapia2.fitBounds(loturak);
          
          var ikonua = {
          path: "M -2,2 -2,-2 2,-2 2,2 z",
          fillColor: 'red',
          fillOpacity: 0.8, 
          anchor: new google.maps.Point(0,0),
          strokeWeight: 1,
          strokeColor: 'white',
          scale: 1
          }
          
          for( i = 0; i < koordenatuak.length; i++ ) {
          var posiziñua = new google.maps.LatLng(koordenatuak[i]);
          marñadoria = new google.maps.Marker({
          position: posiziñua,
          map: mapia2,
          icon: ikonua,
          title: koordenatuak[i][0]
          });};
            
          var lerruak = new google.maps.Polyline({
          path: koordenatuak,
          geodesic: true,
          strokeColor: 'red',
          strokeOpacity: 1.0,
          strokeWeight: 2
          });
          
          lerruak.setMap(mapia2);
          }



          if (document.getElementById('mapia4')){
            var rekorridua = [
              {"LATITUDE":"43.033773","LONGITUDE":"-2.411234"},
              {"LATITUDE":"43.033801","LONGITUDE":"-2.411282"}, 
              {"LATITUDE":"43.033457","LONGITUDE":"-2.411948"},
              {"LATITUDE":"43.033602","LONGITUDE":"-2.412079"},
              {"LATITUDE":"43.033691","LONGITUDE":"-2.412336"},
              {"LATITUDE":"43.034336","LONGITUDE":"-2.412489"},
              {"LATITUDE":"43.034730","LONGITUDE":"-2.412647"},
              {"LATITUDE":"43.035587","LONGITUDE":"-2.412301"},
              {"LATITUDE":"43.036291","LONGITUDE":"-2.411700"},
              {"LATITUDE":"43.036783","LONGITUDE":"-2.411432"},
              {"LATITUDE":"43.037408","LONGITUDE":"-2.411335"},
              {"LATITUDE":"43.038055","LONGITUDE":"-2.411051"},
              {"LATITUDE":"43.039023","LONGITUDE":"-2.410378"},
              {"LATITUDE":"43.040256","LONGITUDE":"-2.410281"},
              {"LATITUDE":"43.041075","LONGITUDE":"-2.410084"},
              {"LATITUDE":"43.041070","LONGITUDE":"-2.410085"},
              {"LATITUDE":"43.041512","LONGITUDE":"-2.410547"},
              {"LATITUDE":"43.042338","LONGITUDE":"-2.411542"},
              {"LATITUDE":"43.043373","LONGITUDE":"-2.411694"},
              {"LATITUDE":"43.044600","LONGITUDE":"-2.411476"},
              {"LATITUDE":"43.045502","LONGITUDE":"-2.410941"},
              {"LATITUDE":"43.045608","LONGITUDE":"-2.410324"},
              {"LATITUDE":"43.045790","LONGITUDE":"-2.410107"},
              {"LATITUDE":"43.046061","LONGITUDE":"-2.410086"},
              {"LATITUDE":"43.046694","LONGITUDE":"-2.410502"}, 
              {"LATITUDE":"43.046908","LONGITUDE":"-2.410357"},
              {"LATITUDE":"43.046994","LONGITUDE":"-2.410081"},
              {"LATITUDE":"43.048891","LONGITUDE":"-2.410416"},
              {"LATITUDE":"43.049420","LONGITUDE":"-2.409785"},
              {"LATITUDE":"43.049514","LONGITUDE":"-2.408492"},
              {"LATITUDE":"43.050267","LONGITUDE":"-2.407993"},
              {"LATITUDE":"43.052197","LONGITUDE":"-2.407762"},
              {"LATITUDE":"43.052910","LONGITUDE":"-2.406771"},
              {"LATITUDE":"43.053843","LONGITUDE":"-2.406320"},
              {"LATITUDE":"43.054129","LONGITUDE":"-2.405049"},
              {"LATITUDE":"43.054627","LONGITUDE":"-2.404518"},
              {"LATITUDE":"43.055730","LONGITUDE":"-2.402733"},
              {"LATITUDE":"43.056332","LONGITUDE":"-2.402540"},
              {"LATITUDE":"43.056593","LONGITUDE":"-2.402132"},
              {"LATITUDE":"43.056667","LONGITUDE":"-2.401169"},
              {"LATITUDE":"43.056855","LONGITUDE":"-2.400877"},
              {"LATITUDE":"43.057561","LONGITUDE":"-2.400662"},
              {"LATITUDE":"43.057900","LONGITUDE":"-2.400726"},
              {"LATITUDE":"43.058691","LONGITUDE":"-2.400038"},
              {"LATITUDE":"43.059167","LONGITUDE":"-2.398796"},
              {"LATITUDE":"43.059953","LONGITUDE":"-2.398938"},
              {"LATITUDE":"43.061341","LONGITUDE":"-2.398832"},
              {"LATITUDE":"43.061975","LONGITUDE":"-2.398023"},
              {"LATITUDE":"43.062882","LONGITUDE":"-2.398063"},
              {"LATITUDE":"43.063105","LONGITUDE":"-2.397679"},
              {"LATITUDE":"43.063520","LONGITUDE":"-2.397397"},
              {"LATITUDE":"43.063810","LONGITUDE":"-2.396292"},
              {"LATITUDE":"43.064022","LONGITUDE":"-2.396203"},
              {"LATITUDE":"43.064185","LONGITUDE":"-2.395345"},
              {"LATITUDE":"43.064483","LONGITUDE":"-2.394205"},
              {"LATITUDE":"43.064238","LONGITUDE":"-2.392698"},
              {"LATITUDE":"43.064324","LONGITUDE":"-2.392631"},
              {"LATITUDE":"43.064434","LONGITUDE":"-2.392717"},
              {"LATITUDE":"43.065776","LONGITUDE":"-2.392814"},
              {"LATITUDE":"43.065955","LONGITUDE":"-2.392185"},
              {"LATITUDE":"43.066105","LONGITUDE":"-2.390081"},
              {"LATITUDE":"43.066342","LONGITUDE":"-2.389738"},
              {"LATITUDE":"43.066485","LONGITUDE":"-2.389424"},
              {"LATITUDE":"43.067207","LONGITUDE":"-2.389058"},
              {"LATITUDE":"43.067387","LONGITUDE":"-2.388744"},
              {"LATITUDE":"43.066695","LONGITUDE":"-2.384712"},
              {"LATITUDE":"43.066604","LONGITUDE":"-2.384295"},
              {"LATITUDE":"43.066580","LONGITUDE":"-2.382959"},
              {"LATITUDE":"43.066435","LONGITUDE":"-2.382296"},
              {"LATITUDE":"43.066298","LONGITUDE":"-2.380971"},
              {"LATITUDE":"43.064989","LONGITUDE":"-2.378349"}
              ];
             
            var koordenatuak = [];
              
            for (i = 0; i < rekorridua.length; i++) {
            var longitudiak = parseFloat(rekorridua[i].LONGITUDE);
            var latitudiak = parseFloat(rekorridua[i].LATITUDE);
            koordenatuak.push({
            lat: latitudiak,
            lng: longitudiak
            });}
              
            var loturak = new google.maps.LatLngBounds();
            
            for (i = 0; i < rekorridua.length; i++) {
            loturak.extend( new google.maps.LatLng(rekorridua[i].LATITUDE, rekorridua[i].LONGITUDE) );
            }
              
            var markadoria = loturak.getCenter();
            
            var mapia4 = new google.maps.Map(document.getElementById("mapia4"), {
            center: markadoria,
            });
              
            var mota = 'satellite';
            mapia4.setMapTypeId(mota);
            mapia4.fitBounds(loturak);
            
            var ikonua = {
            path: "M -2,2 -2,-2 2,-2 2,2 z",
            anchor: new google.maps.Point(0,0),
            scale: 0
            }
            
            for( i = 0; i < koordenatuak.length; i++ ) {
            var posiziñua = new google.maps.LatLng(koordenatuak[i]);
            marñadoria = new google.maps.Marker({
            position: posiziñua,
            map: mapia4,
            icon: ikonua,
            title: koordenatuak[i][0]
            });};
              
            var lerruak = new google.maps.Polyline({
            path: koordenatuak,
            geodesic: true,
            strokeColor: 'yellow',
            strokeOpacity: 1.0,
            strokeWeight: 2
            });
            
            lerruak.setMap(mapia4);
            }
