
function introduce_func(){
  var introducelink = document.getElementsByClassName("introducelink"),
      introducecontent = document.getElementById("introducecontent");

  for (var i=0; i<introducelink.length; i++) {
    introducelink[i].onclick = function(e){
      var index = 0;
      for (var i=0; i<introducelink.length; i++) {
        introducelink[i].className = "introducelink";
        if (this === introducelink[i]) {
          index = i;
        }
      }
      this.className = "introducelink introduceselect"
      introducecontent.className = "focus" + ( index + 1 );
    };
  }
};