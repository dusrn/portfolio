
function nav_func(){
  var nav_a = document.getElementsByClassName("nav_a"),
      nav = document.getElementsByTagName("nav")[0],
      nav_icon = document.getElementById("nav_icon"),
      menu = document.getElementById("menu"),
      mainwrap = document.getElementById("mainwrap"),
      introducewrap = document.getElementById("introducewrap"),
      introducecontent = document.getElementById("introducecontent"),
      introducelink = document.getElementsByClassName("introducelink"),
      resumewrap = document.getElementById("resumewrap");

  for (var i=0; i<nav_a.length; i++){
    nav_a[i].onclick = function(e){
      if (this == nav_a[0]) {
        mainwrap.className = "wrap_focus";
        introduceInit();
        resumewrap.className = "";
        nav_mode(1);
      } else if (this == nav_a[1]) {
        mainwrap.className = "";
        introducewrap.className = "wrap_focus";
        resumewrap.className = "";
        introducelink[0].className = "introducelink introduceselect";
        introducecontent.className = "focus1";
        nav_mode(2);
      } else {
        mainwrap.className = "";
        resumewrap.className = "wrap_focus";
        introduceInit();
        nav_mode(3);
      }
      navInit();
    };
  }

  function introduceInit() {
    introducewrap.className = "";
    introducelink[0].className = "introducelink";
    introducelink[1].className = "introducelink";
    introducelink[2].className = "introducelink";
    introducecontent.className = "";
  };

  function nav_mode(mode){
    nav.className = "nav_mode" + mode;
  };

  nav_icon.onclick = function(e){
    if (this.className == "open") {
      navInit();
    } else {
      this.className = "open";
      menu.className = "open";
    }
  };

  function navInit() {
    menu.className = "";
    nav_icon.className = "";
  };
};

