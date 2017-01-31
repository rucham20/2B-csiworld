// JavaScript Document

//"Next" button
function next(choice) {
	var name = prompt("What do you want your main character's name to be")
	document.getElementById("title").innerHTML= "Hello there! I am " + name;
	document.getElementById("stories").innerHTML = "Welcome to CSI world";
	document.getElementById("remind").innerHTML = "Do you want to continue?"; 
	document.getElementById("image").setAttribute("src", "images/dectective.png")
	}
