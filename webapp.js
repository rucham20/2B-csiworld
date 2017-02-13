// JavaScript Document

//"Next" button
function next(x) {
	switch (x) {
	case 1:
		var name = prompt("What do you want your main character's name to be");
		document.getElementById("title").innerHTML= "The Night At Central Park";
		document.getElementById("stories").innerHTML= "You are walking back from your dectective office to your apartment. You hear a scream coming from Central Park. After that, follows a sound of a gunshot. You go toward the road and finds a body covered with blood and see a shadow running in the disstance with a shiny black gun, a model rare to find.";
		document.getElementById("remind").innerHTML = "Do you want to walk toward the body or call your dectective colleagues?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(2)' value='Walk towards the body'><input type='button'  onClick='next(2)' value='Call your colleagues'>";
		document.getElementById("image").setAttribute("src", "images/shadow1.jpg");
		break;
		
	case 2:
		document.getElementById("title").innerHTML= "The Gun Finding";
		document.getElementById("stories").innerHTML= "You walk towards the body and find that the dead victim is none other than Hayley Smith, a famous actress. As you look around, you find a gun next to the body.";
		document.getElementById("remind").innerHTML = "Do you want to keep the gun for evidence or go to the dectective office to search for files?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(3)' value='Keep the gun'><input type='button'  onClick='next(4)' value='Go to the office'>";
		document.getElementById("image").setAttribute("src", "images/gun.gif");
		break;
	case 3: 
		document.getElementById("title").innerHTML= "Going Home";	
		document.getElementById("stories").innerHTML= "You put the shiny gun in your purse and suddenly fell very tired.";
		document.getElementById("remind").innerHTML = "Let's get some rest and go to the detective office tomorrow.";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(5)' value='Go to detective office to search for files and more evidence'>";
		document.getElementById("image").setAttribute("src", "images/purse.jpg");
		break;
	case 5: 
	document.getElementById("title").innerHTML = "The Finding of the Fingerprints";
	document.getElementById("stories").innerHTML= "You go back to your apartment and immediately fall asleep. The next day, you wake up and go to your office to tell your colleagues and boss, Dectective Patty, what you saw last night. You then remember the gun you had kept in your purse and give it to the boss. You hand the gun over, asking her to dust for fingerprints of the shooter. She is delighted to know that you have the most valuable evidenc in your possession. She explains that the fingerprint will lead right to the killer.";
		document.getElementById("remind").innerHTML = "Do you want to help Patty?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(6)' value='Yes!'> <input type='button' onClick='next(6)' value='No... You have other things to do.'>";
		document.getElementById("image").setAttribute("src", "images/fingerprint.jpg");
		break;
	case 6:
	document.getElementById("title").innerHTML = "Victory for All... Except for Regina";
	document.getElementById("stories").innerHTML = "As you search for the files, Patty rushes in exclaiming that she found the killer, thanks to you. She says that the killer is none other than Hayley Smith's celebrity enemy, Regina Wright!! Patty says that she sent the police to her location to put her behind bars right away.";
	document.getElementById("remind").innerHTML = "Let's celebrate!!!";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(7)' value='Dance alllll night'>";
	document.getElementById("image").setAttribute("src", "images/");
	break;
	
	case 7:
	document.getElementById("title").innerHTML = "The End";
	document.getElementById("stories").innerHTML = "That night, you, Patty and the rest of the detectives from your team go to a restaurant to celebrate your success. While you are eating, you look at the TV and find Regina's picture all over the screen. Next to that you find your picture with a title of 'Our Famous Dectective!' Right then Patty gets everyone's attention and announces that you are promoted to head dectective! You are thrilled by this news. Many successful years later, you become a world famous dectective and live to your dreams.";
	document.getElementById("remind").innerHTML = "Do you want to restart the game and get a different ending?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(1)' value='Restart the story'>";
	document.getElementById("image").setAttribute("src", "images/trophy.png");
	break;
	
		}
	}



