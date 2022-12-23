var up=1;

function ifZeroThenFalse(){
  for(k=1; k<=16; k++){
    if(document.getElementById(k).textContent==0){
      document.getElementById(k).value="false";
    }
    else{
      document.getElementById(k).value="true";
    }
  }
}



function crazyUp(i){
  if(document.getElementById(i-4).textContent==0 || document.getElementById(i-4).textContent=="0"){
    document.getElementById(i-4).textContent=parseInt(document.getElementById(i).textContent)+parseInt(document.getElementById(i-4).textContent);
    document.getElementById(i).textContent=0;
  }
}
for(k=1; k<=16; k++)
  {
    if(document.getElementById(k).textContent=="0"){
  document.getElementById(k).style.textShadow="0px 9px 1px red";
    }
    else{
      document.getElementById(k).style.textShadow="0px 9px 1px white";
    }
  }
function moveUpIfEmpty(i){
  if(document.getElementById(i).value=="true" && document.getElementById(i-4).value=="false"){
    document.getElementById(i-4).textContent=document.getElementById(i).textContent;
    document.getElementById(i).textContent=0;
     document.getElementById(i-4).value="true";
     document.getElementById(i).value="false";
    if(i>8){
      moveUpIfEmpty(i-4);
    }
    
  }
  
}
function moveDownIfEmpty(i){
  
  if(document.getElementById(i).value=="true" && document.getElementById(i+4).value=="false"){
    document.getElementById(i+4).textContent=document.getElementById(i).textContent;
    document.getElementById(i).textContent=0;
     document.getElementById(i+4).value="true";
     document.getElementById(i).value="false";
    if(i<9){
      moveDownIfEmpty(i+4);
    }
  }
}
function moveLeftIfEmpty(i){
  if(i!=5 && i!=9 && i!=13 && document.getElementById(i).value=="true" && document.getElementById(i-1).value=="false"){
    document.getElementById(i-1).textContent=document.getElementById(i).textContent;
    document.getElementById(i).textContent=0;
     document.getElementById(i-1).value="true";
     document.getElementById(i).value="false";
     
    if(i>2 && i!=6 && i!=10 && i!=14){
      moveLeftIfEmpty(i-1);
    }
  }
}
function moveRightIfEmpty(i){
  if(i!=4 && i!=8 && i!=12 && document.getElementById(i).value=="true" && document.getElementById(i+1).value=="false"){
    document.getElementById(i+1).textContent=document.getElementById(i).textContent;
    document.getElementById(i).textContent=0;
     document.getElementById(i+1).value="true";
     document.getElementById(i).value="false";
     
    if(i<15 && i!=3 && i!=7 && i!=11){
      moveRightIfEmpty(i+1);
    }
  }
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * 15)+ 1;
}

function twoInRandomEmptyBox(k){
    if(document.getElementById(k).value=="false"){
      document.getElementById(k).textContent="2";
      document.getElementById(k).value="true";
    }
  else if(k!=16){
    twoInRandomEmptyBox(k+1);
  }
  }
function vanishZero(){
  for(k=1; k<=16; k++)
  {
    if(document.getElementById(k).textContent=="0" || document.getElementById(k).textContent==0){
  document.getElementById(k).style.textShadow="0px 9px 1px red";
    }
    else{
      document.getElementById(k).style.textShadow="0px 9px 1px white";
    }
  }
}


function addUp() {
    
   for(i=5; i<=16; i++){
    moveUpIfEmpty(i);
  }
  for(i=5; i<=16; i++){
   if(document.getElementById(i).textContent==document.getElementById(i-4).textContent && document.getElementById(i).textContent!=0){
     document.getElementById(i).textContent=0;
     document.getElementById(i-4).value="true";
     document.getElementById(i).value="false";  
     document.getElementById(i-4).textContent=2*parseInt(document.getElementById(i-4).textContent);
     
   }
 }
  for(i=5; i<=16; i++){
    moveUpIfEmpty(i);
  }
  twoInRandomEmptyBox(randomIntFromInterval());
  vanishZero();
  document.getElementById("up").style.animation="clickAnim 0.2s linear 0s 1";
  ifZeroThenFalse();
}
function addDown() {
 for(i=12; i>=1; i--){
    moveDownIfEmpty(i);
  }
  for(i=12; i>=1; i--){
   if(document.getElementById(i).textContent==document.getElementById(i+4).textContent && document.getElementById(i).textContent!=0){
     document.getElementById(i).textContent=0;
     document.getElementById(i+4).value="true";
     document.getElementById(i).value="false";   document.getElementById(i+4).textContent=2*parseInt(document.getElementById(i+4).textContent);
     
   }
 }
  for(i=12; i>=1; i--){
    moveDownIfEmpty(i);
  }
  twoInRandomEmptyBox(randomIntFromInterval());
  vanishZero();
  document.getElementById("down").style.animation="clickAnim 0.2s linear 0s 1";
  ifZeroThenFalse();
}
function addLeft() {
  for(i=2; i<=16; i++){
    moveLeftIfEmpty(i);
  }
  for(i=2; i<=16; i++){
   if(i!=5 && i!=9 && i!=13 && document.getElementById(i).textContent==document.getElementById(i-1).textContent && document.getElementById(i).textContent!=0){
     document.getElementById(i).textContent=0;
     document.getElementById(i-1).value="true";
     document.getElementById(i).value="false";
     document.getElementById(i-1).textContent=2*parseInt(document.getElementById(i-1).textContent);
     
   }
 }
  for(i=2; i<=16; i++){
    moveLeftIfEmpty(i);
  }
  
  twoInRandomEmptyBox(randomIntFromInterval());
  vanishZero();
  document.getElementById("left").style.animation="clickAnim 0.2s linear 0s 1";
  ifZeroThenFalse();
}
function addRight() {
  for(i=15; i>=1; i--){
    moveRightIfEmpty(i);
  }
  for(i=15; i>=1; i--){
   if(i!=4 && i!=8 && i!=12 && document.getElementById(i).textContent==document.getElementById(i+1).textContent && document.getElementById(i).textContent!=0){
     document.getElementById(i).textContent=0;
     document.getElementById(i+1).value="true";
     document.getElementById(i).value="false";   document.getElementById(i+1).textContent=2*parseInt(document.getElementById(i+1).textContent);
     
   }
 }
  for(i=15; i>=1; i--){
    moveRightIfEmpty(i);
  }
  twoInRandomEmptyBox(randomIntFromInterval());
  vanishZero();
  document.getElementById("right").style.animation="clickAnim 0.2s linear 0s 1";
  ifZeroThenFalse();
}