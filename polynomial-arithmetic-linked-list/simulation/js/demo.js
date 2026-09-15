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

    results = [ [5,2], [7,1], [11,0]]
    var counter = 0;
    

    var observations = [ "Added x^2 coefficients of P(x) and Q(x)", "Added x^1 coefficients of P(x) and Q(x)", "Added x^0 coefficients of P(x) and Q(x)"] 
    
    var sol = document.getElementById("solution");
    while (sol.firstChild) {
       // sol.removeChild(sol.firstChild); 
    }

    function makeCards(pair) {
        //sol.createCard(pair[0]), createCard(pair[1])
        sol.appendChild(createCard(pair[0]));
        sol.appendChild(createCard(pair[1]));
        sol.appendChild(createArrow());
       // console.log('timer')
       // counter++
        console.log('timer')
    }
 
    function writeObservations (obs)
    {
        document.getElementById("ins").innerHTML = obs;
    }
    //setInterval (makeCards (), 3000) ;
    function drawList(rem, obs){
        if (rem.length > 0) {
            makeCards(rem[0]);
            rem.shift();
            writeObservations (obs[0]);
            obs.shift();
            setTimeout(drawList, 3000, rem, obs);
            
        }
    }
    drawList(results, observations);
    //results.forEach(e => makeCards(e));
};
var setEquations = function() {
	document.getElementById("expr1").innerHTML = "2x^2 + 3x + 5";
	document.getElementById("expr2").innerHTML = "3x^2 + 4x + 6";
};
var reset = function() {
	 location.reload(); 
};
var handlers = function() {
	document.getElementById("start").addEventListener("click", function() {
  console.log('here')
	    createList();
            
	});

	document.getElementById("reset").addEventListener("click", function() {
		reset();
	});
};

setEquations();
handlers();
timer();
