// JavaScript Document

//"Next" button
function next() {
		var x = getElementById ("input").value;
	switch (x) {
		case 1: 
			var name = prompt("What do you want your main character's name to be")
			document.getElementById("title").innerHTML= "Hello there! I am " + name;
			document.getElementById("stories").innerHTML = "Welcome to CSI world";
			document.getElementById("remind").innerHTML = "Do you want to continue?"                                          ; 
			document.getElementById("image").setAttribute("src", "images/dectective.png");
			break;
	case 2:
		document.getElementById("title").innerHTML= "The Night At Central Park";
		document.getElementById("stories").innerHTML= "You are walking back from your dectective office to your apartment. You hear a scream coming from Central Park. After that, follows a sound of a gunshot. You go toward the road and finds a body covered with blood and see a shadow running in the disstance with a shiny black gun, a model rare to find";
		document.getElementById("remind").innerHTML = "Enter 3 to walk towards the body, and enter 4 to call your dectective colleagues."
		document.getElementById("image").setAttribute("src", "images/shadow.jpg");
		
		}
	}




innerHTML = "<input type='button' value='this is abutton' onclick=''>" 