(()=>{"use strict";var e=document.querySelectorAll(".card"),n=document.getElementById("backBtn"),t=document.getElementById("nextBtn"),c=0;function l(n){e.forEach((function(e,t){e.style.display=t===n?"block":"none"}))}t.addEventListener("click",(function(){++c>=e.length&&(c=0),l(c)})),n.addEventListener("click",(function(){--c<0&&(c=e.length-1),l(c)})),l(c)})();