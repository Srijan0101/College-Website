var divs = ["about", "director"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}



function ScrollDiv(){

  if(document.getElementById('notif-content').scrollTop<(document.getElementById('notif-content').scrollHeight-document.getElementById('notif-content').offsetHeight)){-1
        document.getElementById('notif-content').scrollTop=document.getElementById('notif-content').scrollTop+1
        }
  else {document.getElementById('notif-content').scrollTop=0;}
}

setInterval(ScrollDiv,40)




