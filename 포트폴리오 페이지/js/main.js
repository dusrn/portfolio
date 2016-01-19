"use strict"

window.onload = function(){
  event_prevent();
  page_focus_event();
  demo_func(); // demo.js
  nav_func(); // nav.js
  introduce_func(); // introduce.js
  resume_func(); // resume.js
}

function page_focus_event(){
  var mainwrap = document.getElementById("mainwrap"),
  introducewrap = document.getElementById("introducewrap"),
  intro_link = document.getElementsByClassName("intro_link"),
  demo_link = document.getElementsByClassName("demo_link"),
  resumewrap = document.getElementById("resumewrap"),
  nav = document.getElementsByTagName("nav"),
  event_time = new Date(),
  touch_start_y = 0,
  touch_start_x = 0,
  move_dx = 0,
  move_dy = 0;

  document.addEventListener("touchstart", function(e){
    if (e.type === "touchstart" && e.touches.length === 1) {
      touch_start_x = e.touches[0].pageX;
      touch_start_y = e.touches[0].pageY;
    }
  }, false);

  document.addEventListener("touchmove", function(e){
    var drag_dist = 0,
        scroll_dist = 0;
    if (e.type === "touchmove" && e.touches.length === 1) {
      drag_dist = e.touches[0].pageX - touch_start_x;
      scroll_dist = e.touches[0].pageY - touch_start_y;
      move_dx = ( drag_dist / screen.availWidth ) * 100;
      move_dy = ( scroll_dist / screen.availHeight ) * 100;
    }
    e.preventDefault();
  }, false);

  document.addEventListener("touchend", function(e){
    if (e.type === "touchend" && e.touches.length === 0) {
      if (Math.abs(move_dy) > Math.abs(move_dx)) {
        if (Math.abs(move_dy) > 15) {
          if (move_dy > 0) {
            prev_or_next(false);
          } else {
            prev_or_next(true);
          }
        }
      } else {
        if (Math.abs(move_dx) > 15) {
          if (resumewrap.className == "wrap_focus") {
            if (move_dx < 0) {
              resumewrap.className = "wrap_focus focus_item2"
            }
          } else if (resumewrap.className == "wrap_focus focus_item2") {
            if (move_dx > 0) {
              resumewrap.className = "wrap_focus";
            }
          }
        }
      }
    }
    move_dy = 0;
    move_dx = 0;
  }, false);

  document.onmousewheel = function(e){
    var current_time = new Date();
    if ((current_time - event_time) < 1000) {
      return;
    } else {
      event_time = current_time;
      if (e.wheelDelta == 120) {
        prev_or_next(false);
      } else {
        prev_or_next(true);
      }
    }
  };

  document.onkeydown = function(e){
    var current_time = new Date();
    if ((current_time - event_time) < 1000) {
      return;
    } else {
      event_time = current_time;
      if (e.keyCode == 38 || e.keyCode == 37) {
        prev_or_next(false);
      } else if (e.keyCode == 40 || e.keyCode == 39) {
        prev_or_next(true);
      } else {
        return;
      }
    }
  };

  for (var i=0; i<intro_link.length; i++) {
    intro_link[i].onclick = function(e){
      prev_or_next_main(false);
    };

    demo_link[i].onclick = function(e){
      prev_or_next_main(true);
    };
  }

  function prev_or_next(next, only, check1){
    if (mainwrap.className == "wrap_focus" || mainwrap.className == "wrap_focus focus2") {
      prev_or_next_main(next);
    } else if (introducewrap.className == "wrap_focus") {
      prev_or_next_introduce(next);
    }
  };

  function prev_or_next_main(down){
    if (down){
      mainwrap.className = "wrap_focus focus2";
      nav[0].className = "nav_mode1 opacity0";
    } else {
      mainwrap.className = "wrap_focus";
      nav[0].className = "nav_mode1";
    }
  };

  function prev_or_next_introduce(next){
    var introducelink = document.getElementsByClassName("introducelink"),
        introducecontent = document.getElementById("introducecontent"),
        current = 0;
    for (var i=0; i<introducelink.length; i++) {
      if (introducelink[i].className == "introducelink introduceselect") {
        current = i;
      }
      introducelink[i].className = "introducelink";
    }
    if (next) {
      if (current != ( introducelink.length - 1 ) ) {
        introducelink[current+1].className = "introducelink introduceselect";
        introducecontent.className = "focus" + ( current + 2 );
      } else {
        introducelink[current].className = "introducelink introduceselect";
        return;
      }
    } else {
      if (current != 0) {
        introducelink[current-1].className = "introducelink introduceselect";
        introducecontent.className = "focus" + current;
      } else {
        introducelink[current].className = "introducelink introduceselect";
        return;
      }
    }
  };
};

function event_prevent(){
  var a_tag = document.getElementsByTagName("a");
  a_tag.onclick = function(e){
    e.preventDefault();
  };

  document.ondragstart = function(e){
    return false;
  };
/*
  document.oncontextmenu = function(e){
    return false;
  };
*/
  document.onselectstart = function(e){
    return false;
  };

  document.ondbclick = function(e){
    return false;
  };
};

