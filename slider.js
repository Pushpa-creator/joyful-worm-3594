let left=1;
let right=5;
 let l=1;
 let r=5;
function show() {
 

  for (i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
    document.getElementById("d" + i).style.display = "inline-block";
  }

}
function moveleft() {

  if (left >= 2 && right >= 6) {
    document.getElementById("c" + right).style.display = "none";
    left--;
    right--;
    for (i = left; i <= right; i++) {
          document.getElementById("c" + i).style.display = "inline-block";
   
        }
    }
  else {
    return;
  }
}
function moveright() {
  if (left <= 3 && right <= 7) {
    document.getElementById("c" + left).style.display = "none";

    left+=1;
    right+=1;
    for (i= left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
  
    }
    
  }
  else {
    return;
  }
   console.log(left,right);
}

function Next() {
  console.log("2nd sldier",l,r);
   if(l<=3 && r<=7){
    document.getElementById("d" + l).style.display = "none";
    l+=1;
    r+=1;
    console.log("fter",l,r);
    for (k = l; k <= r; k++) {
      document.getElementById("d" + k).style.display = "inline-block";

    }
  
  
   }
   else {
    return;
  }
}

function prev() {
  if (l >= 2 && r >= 6) {
  document.getElementById("d" + r).style.display = "none";
    l--;
    r--;
    for (j = l; j<= r; j++) {
      document.getElementById("d" + j).style.display = "inline-block";
    }
  }
  else {
    return;
  }
 
}
