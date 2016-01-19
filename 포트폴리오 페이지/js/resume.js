
function  resume_func(){
  var resumewrap = document.getElementById("resumewrap"),
      download = document.getElementById("resumedownload"),
      button = document.getElementsByClassName("resume_next_prev_button");

  for (var i=0; i<button.length; i++) {
    button[i].onclick = function(e){
      if (resumewrap.className == "wrap_focus") {
        resumewrap.className = "wrap_focus focus_item2"
      } else {
        resumewrap.className = "wrap_focus";
      }
    };
  }

  download.onclick = function(e){
    if (resumewrap.className == "wrap_focus") {
      window.open("./resume/resume.hwp", "_blank");
    } else {
      return;
    }
  };
};