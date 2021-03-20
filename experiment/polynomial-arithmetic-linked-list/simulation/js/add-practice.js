var createCard = function(result) {
    var temp = document.createElement("div");
    temp.classList.add("card");
    temp.innerHTML = result;
    temp.border = "1px solid black";
    temp.style.fontStyle = "normal";
    temp.style.color = "black";
    return temp;
};
var createArrow = function() {
  var arrowDiv = document.createElement("div");
  arrowDiv.className = "icon";
  var arrow = document.createElement("div")
  arrow.className = "arrow";
  arrowDiv.appendChild(arrow);
  return arrowDiv;
};
var createList = function() {
  var result1 = [7, 5];
  var result2 = [3, 3];
  var result3 = [3, 2];
  var result4 = [4, 1];
  var result5 = [9, 0];
var sol = document.getElementById("solution");
    while (sol.firstChild) {
    sol.removeChild(sol.firstChild);
}

  for(var i = 0; i < result1.length; i++) {
    sol.appendChild(createCard(result1[i]));
  }
  
  sol.appendChild(createArrow());

  for(var j = 0; j < result2.length; j++) {
    sol.appendChild(createCard(result2[j]));
  }

  sol.appendChild(createArrow());

  for(var k = 0; k < result3.length; k++) {
    sol.appendChild(createCard(result3[k]));
  }

  sol.appendChild(createArrow());

  for(var l = 0; l<result4.length; l++){
    sol.appendChild(createCard(result4[l]));
  }

  sol.appendChild(createArrow());

  for(var m = 0; m<result5.length; m++){
    sol.appendChild(createCard(result5[m]));
  }
};
function checkAnswer(){
  var text1; 
    try{
      text1 = document.getElementById("value1").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var texta;
    try{
      texta = document.getElementById("valuea").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }

  var text2; 
    try{
      text2 = document.getElementById("value2").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var textb;
    try{
      textb = document.getElementById("valueb").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }

  var text3; 
    try{
      text3 = document.getElementById("value3").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var textc;
    try{
      textc = document.getElementById("valuec").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }

  var text4; 
    try{
      text4 = document.getElementById("value4").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var textd;
    try{
      textd = document.getElementById("valued").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }

  var text5; 
    try{
      text5 = document.getElementById("value5").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var texte;
    try{
      texte = document.getElementById("valuee").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }

  if(text1 == "" || texta == ""){
    document.getElementById("ins").innerHTML = "Enter 1st element values correctly";
  }

  else if (text2 == "" || textb == ""){
    document.getElementById("ins").innerHTML = "Enter 2nd element values correctly";
  }

  else if (text3 == "" || textc == "") {
    document.getElementById("ins").innerHTML = "Enter 3rd element values correctly";
  }

  else if (text4 == "" || textd == "") {
    document.getElementById("ins").innerHTML = "Enter 4th element values correctly";
  }

  else if (text5 == "" || texte == "") {
    document.getElementById("ins").innerHTML = "Enter 5th element values correctly";
  }

// modify answer for unordered

//

  else if(text1 == 7 && texta == 5 && text2 == 3 && textb == 3 && text3 == 3 && textc == 2 && text4 == 4 && textd == 1 && text5 == 9 && texte == 0)
  {
      document.getElementById("ins").innerHTML = "Correct Answer";
      document.getElementById("solution").visibility = "visible";
      document.getElementById("card").visibility = "visible";
      document.getElementById("start").disabled = true;
      document.getElementById("start").style.backgroundColor = "grey";
      createList();
    }

 else{
      document.getElementById("ins").innerHTML = "Incorrect";
    }
};
function reload(){
  location.reload(true);
};
var setEquations = function() {
  document.getElementById("expr1").innerHTML = "<b> P(x) </b> = 7x^5 + 3x^3 + 3";
  document.getElementById("expr2").innerHTML = "<b> Q(x) </b> = 3x^2 + 4x + 6";
  document.getElementById("expr2").style.padding = "0px 24px 0px 0px"; 
};
var handlers = function() {
  document.getElementById("start").addEventListener("click", function() {
  });

  document.getElementById("start").onclick = function() 
    { 
      checkAnswer(); 
    };

  document.getElementById("reset").onclick = function() 
    { 
      reload(); 
    };
};
setEquations();
handlers();
