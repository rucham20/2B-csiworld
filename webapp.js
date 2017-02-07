// JavaScript Document

//"Next" button
function next(x) {
	switch (x) {
		case 0: 
			var name = prompt("What do you want your main character's name to be")
			document.getElementById("title").innerHTML= "Hello there! I am " + name;
			document.getElementById("stories").innerHTML = "Welcome to CSI world";
			document.getElementById("remind").innerHTML = "Do you want to continue?"; 
			document.getElementById("image").setAttribute("src", "images/dectective.png");
			break;
	case 1:
		document.getElementById("title").innerHTML= "The Night At Central Park";
		document.getElementById("stories").innerHTML= "You are walking back from your dectective office to your apartment. You hear a scream coming from Central Park. After that, follows a sound of a gunshot. You go toward the road and finds a body covered with blood and see a shadow running in the disstance with a shiny black gun, a model rare to find";
		document.getElementById("remind").innerHTML = "Do you want to walk toward the body or call your dectective colleagues?";
		document.getElementById("choice1").innerHTML = "<input id= 'choice2'  type='button' onClick='next(2)' value='Walk towards the body'>";
		document.getElementById("choice2").innerHTML = "<input type='button' value='Call your colleagues' onclick='next(2)'>";
		document.getElementById("image").setAttribute("src", "images/shadow.jpg");
		break;
		
	case 2:
		document.getElementById("title").innerHTML= "The Gun Finding";
		document.getElementById("stories").innerHTML= "You put the shiny gun in your purse and suddenly fell very tired.";
		document.getElementById("remind").innerHTML = "Let's get some rest and go to the detective office tomorrow.";
		document.getElementById("choice1").innerHTML = "<input id= 'choice2'  type='button' onClick='next(1)' value=' '>";
		document.getElementById("choice2").innerHTML = " "; 
		document.getElementById("image").setAttribute("src", "images/shadow.jpg");
		break;
		
		}
	}



