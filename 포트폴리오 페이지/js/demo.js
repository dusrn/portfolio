
function demo_func(){
  var demotab_item = document.getElementsByClassName("demotab_item"),
      democontent = document.getElementsByClassName("democontent"),
      opendemo = document.getElementById("opendemo"),
      index = 0;

  for (var i=0; i<demotab_item.length; i++) {
    demotab_item[i].onclick = function(e) {
      for (var i=0; i<demotab_item.length; i++) {
        demotab_item[i].className = "demotab_item";
        democontent[i].className = "democontent";
        if (this === demotab_item[i]) {
          index = i;
        }
      }
      this.className = "demotab_item tab_select";
      democontent[index].className = "democontent content_select";
    };
  }

  opendemo.onclick = function(e){
    switch (index){
      case 0:
      window.open("./demo/pagycopy/pagycopy.html", "_blank");
      break;
      case 1:
      window.open("./demo/imageslider/imageslider.html", "_blank");
      break;
      case 2:
      window.open("./demo/modalgallery/modalgallery.html", "_blank");
      break;
      case 3:
      window.open("./demo/accordionmenu/accordionmenu.html", "_blank");
      break;
      case 4:
      window.open("./demo/scrollspy/scrollspy.html", "_blank");
      break;
      case 5:
      window.open("./demo/parallaxscroll/parallaxscroll.html", "_blank");
      break;
      default:
      break;
    }
  };
};