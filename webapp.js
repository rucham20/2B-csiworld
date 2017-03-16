// JavaScript Document
var name = "";
//"Next" button
function next(x) {
	switch (x) {
	case 0:
		document.getElementById("title").innerHTML= "Welcome to CSI World";
		document.getElementById("storyline").innerHTML= "Do you want to continue?";
		document.getElementById("remind").innerHTML = "Remember, every choice affects your fate!";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(1)' value='Click here to Start!'>";
		document.getElementById("image").innerHTML="<img src='images/dectective.png' alt='test' width='455'>";
		break;
	
	case 1:
		name = prompt("What do you want your main character's name to be?");
		document.getElementById("title").innerHTML= "The Night At Central Park";
		document.getElementById("storyline").innerHTML= "You taking a relaxing walk back from your dectective office to your apartment. You turn as you hear a ear-splitting scream coming from Central Park. After that, follows a sound of a gunshot. Sprinting towards the road, you find yourself before a body covered with blood. Out of the corner of your eye, a shadow runs in the distance. You follow the shadow you sighted, whoever was there is now gone.";
		document.getElementById("remind").innerHTML = "Do you want to walk toward the body or call your dectective colleagues?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(2)' value='Walk towards the body'> <input type='button'  onClick='next(4)' value='Call your colleagues'>";
		document.getElementById("image").innerHTML="<img src='images/shadow1.jpg' alt='test' width='455'>";
		break;
		
	case 2:
		document.getElementById("title").innerHTML= "The Mysterious Object";
		document.getElementById("storyline").innerHTML= "You walk back towards the body and realize that the dead victim is none other than Hayley Smith, a famous actress. As you look around the park, you see the glint of silver at the bottom of the shallow pond in the park.";
		document.getElementById("remind").innerHTML = "Do you want to fish out the silver object or go directly to the dectective office to report to crime?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(2.1)' value='Keep the gun'><input type='button'  onClick='next(4)' value='Go to the office'>";
		break;
	case 2.1:
		document.getElementById("title").innerHTML= "Retreiving";
		document.getElementById("storyline").innerHTML= "Rolling up your sleeves, you carefully reach into the murky water to pull the object out of the pond. From your previous years of study, you see that the object is a gun in a model rare to find.";
		document.getElementById("remind").innerHTML = "Do you want to keep the gun or call the office to report to crime?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(3)' value='Keep the gun'><input type='button'  onClick='next(4)' value='Go to the office'>";
		document.getElementById("image").innerHTML= "<img src='images/gun.gif' alt= 'test' width= '455'>";
		break;

	case 3: 
		document.getElementById("title").innerHTML= "Going Home";	
		document.getElementById("storyline").innerHTML= "You wipe the gun with your jacket and put it in your purse and suddenly fell very tired.";
		document.getElementById("remind").innerHTML = "Let's get some rest and go to the dectective office tomorrow.";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(5)' value='Go to detective office to search for files and more evidence'>";
		document.getElementById("image").innerHTML= "<img src='images/purse.jpg' alt= 'test' width= '455'>";
		break;
	case 4:
		document.getElementById("title").innerHTML= "The Phone Call";	

		document.getElementById("storyline").innerHTML= "You call your colleagues to confirm what you're seeing. Dectective Joe, your colleague, picks up the phone and you describe what you saw and your location. There is a long pause, then he tells you to come to the office for further investigation.";
		document.getElementById("remind").innerHTML = "Do you want to go to the office or get some rest?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(8)' value='Go to the office'> <input type='button' onClick='next(14)' value= 'Get some rest and go tomorrow'>";
		document.getElementById("image").innerHTML="<img src='images/joe.png' alt='test' width='455'>";
		break;
	case 5: 
	document.getElementById("title").innerHTML = "The Finding of the Fingerprints";

	document.getElementById("storyline").innerHTML= "You head back to your apartment and fall asleep as soon as your head hit the pillow. The next day, you wake up and go to your office to tell your colleagues and boss, Dectective Patty, what you saw last night. You then remember the gun you had kept in your purse and give it to the boss. You hand the gun over, asking her to dust for fingerprints of the shooter. She is delighted to know that you have the most valuable evidence in your possession. She explains that the fingerprint will lead right to the killer.";
	document.getElementById("storyline").innerHTML= "You go back to your apartment and immediately fall asleep. The next day, you wake up and go to your office to tell your colleagues and boss, Detective Patty, what you saw last night. You then remember the gun you had kept in your purse and give it to the boss. You hand the gun over, asking her to dust it for fingerprints of the shooter. She is delighted to know that you have the most valuable evidence in your possession. She explains that the fingerprint will lead right to the killer.";

		document.getElementById("remind").innerHTML = "Do you want to help Patty?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(6)' value='Yes!'> <input type='button' onClick='next(6)' value='No... You have other things to do.'>";
		document.getElementById("image").innerHTML="<img src='images/fingerprint2.jpg' alt='test' width='455'>";
		break;
	case 6:
	document.getElementById("title").innerHTML = "Victory for All... Except for Regina";
	document.getElementById("storyline").innerHTML = "As you search for the files, Patty rushes in exclaiming that she found the killer, thanks to you. She says that the killer is none other than Hayley Smith's celebrity enemy, Regina Wright!! Patty says that she sent the police to her location to put her behind bars right away.";
	document.getElementById("remind").innerHTML = "Let's celebrate!!!";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(7)' value='Dance alllll night'>";
	document.getElementById("image").innerHTML="<img src='images/jail.jpg' alt='test' width='455'>";
	break;
//good ending
	case 7:
	document.getElementById("title").innerHTML = "The End";
	document.getElementById("storyline").innerHTML = "That night, you, Patty and the rest of the detectives from your team go to a restaurant to celebrate your success. While you are eating, you look at the TV and find Regina's picture all over the screen. Next to that you find your picture with a title of 'Our Famous Detective'! Right then Patty gets everyone's attention and announces that you are promoted to head detective! You are thrilled by this news. Many successful years later, you become a world famous detective and live to your dreams.";
	document.getElementById("remind").innerHTML = "Congratulations, Dectective " + name + "! You lived a successful life.";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(0)' value='Restart the story'>";
	document.getElementById("image").innerHTML="<img src='images/trophy.png' alt='test' width='455'>";
	break;
	
	case 8:
	document.getElementById("title").innerHTML= "The Truth";	
	document.getElementById("storyline").innerHTML= "You go to your office and meet one of your colleagues, Detective Joe. You tell him what you had seen. You also mention Hayley Smith's dead body (the one you saw on the road). He asks you if you have any evidence, but you remember that you left the gun behind. He says that it might be hard to solve the case since there is no evidence, but he says that there may be some footage on the security cameras. He also says to tell your boss, Detective Patty, as soon as you find the killer. You tell him the location and find the footage. You saw a streak of red hair from the black figure that is holding a gun and running away.";
		document.getElementById("remind").innerHTML = "Do you want to investigate further with the footage, or search for other evidence?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(9)' value='Investigate'> <input type='button' onClick='next(9)' value='Search for evidence'>";
		document.getElementById("image").innerHTML="<img src='images/shadow.jpg' alt='test' width='455'>";
		break;
	case 9:
	document.getElementById("title").innerHTML= "Suspects Found";	
	document.getElementById("storyline").innerHTML= "You suggest that the shooter would be Hayley Smith's enemies or competition. Joe agrees and pulls out files and searches the internet for Hayley's enemies with red hair. He finds a list of people that match the description. There are three matches:";
		document.getElementById("remind").innerHTML = "Who do you want to investigate?";
		document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(10)' value='Susan Johnson'> <input type='button' onClick='next(11)' value='Katie Rose'> <input type='button' onClick= 'next(12)' value='Regina Wright'>";
		document.getElementById("image").innerHTML="<img src='images/susanJohnson.jpg' alt='test' width='300'><img src='images/katieRose.jpg' alt='test' width='300'><img src='images/reginaWright.jpg' alt='test' width='300'>"; 
		break;
	//suspects
	case 10:
	document.getElementById("title").innerHTML = "Susan";
	document.getElementById("storyline").innerHTML = "You decide to look at the files for Susan Johnson. Dectective Joe tells you that he found out that she was injured and was in the hospital the same time as the shooting. You know that Susan can't be the murderer.";
	document.getElementById("remind").innerHTML = "Who do you want to investigate next?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(11)' value='Katie Rose'><input type='button' onClick='next(12)' value='Regina Wright'>";
	document.getElementById("image").innerHTML="<img src='images/hospital.jpg' alt='test' width='455'>";
	break;
case 11:
	document.getElementById("title").innerHTML = "Katie";
	document.getElementById("storyline").innerHTML = "You look at files on Katie Rose. After searching, you find that she had a concert the same date and time the shooting had occured. Now you know what Katie Rose isn't the murderer.";
	document.getElementById("remind").innerHTML = "Who do you want to investigate next?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(10)' value='Susan Johnson'><input type='button' onClick='next(12)' value='Regina Wright'>";
	document.getElementById("image").innerHTML="<img src='images/concert.jpg' alt='test' width='455'>";
	break;
case 12:
	document.getElementById("title").innerHTML = "Regina";
	document.getElementById("storyline").innerHTML = "As you search for Regina Wright's files, you find that she was in town near Central Park the day of the shooting. You look at the items she recently purchased and find the same gun model that you had seen at the crime scene. All evidence points to Regina Wright being the murderer.";
	document.getElementById("remind").innerHTML = "What do you do next?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(13)' value='Tell Dectective Patty of your finding.'>";
	document.getElementById("image").innerHTML="<img src='images/reginaWright.jpg' alt='test' width='455'>";
	break;
case 13:
	document.getElementById("title").innerHTML = "Arrest";
	document.getElementById("storyline").innerHTML = "When you tell Patty, she has doubts of your findings. She then does further research herself. The next day, she comes to you and says that you were right. She informs you that she sent the police to Regina's location to put her behind bars right away!";
	document.getElementById("remind").innerHTML = "It is time to celebrate";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(7)' value='Dance allllll night'>";
	document.getElementById("image").innerHTML="<img src='images/jail.jpg' alt='test' width='455'>";
	break;
case 14:
	document.getElementById("title").innerHTML = "The Shooting";
	document.getElementById("storyline").innerHTML = "You go back to your apartment and immediately fall asleep. The next day, you wake up and go to your office to tell your colleagues of what you saw last night. Your boss, Detective Patty, rushes into the room and says that she has discovered another shooting near Central Park, the same location where Hayley Smith, the body you had seen, was killed. You look at the footage and find a gun exactly like the one you had seen the other night. You wonder if the two shooters are the same.";
	document.getElementById("remind").innerHTML = "Which case do you want to investigate next?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(15)' value='Stick to the previous case'><input type='button' onClick='next(18)' value='Go to the new case, thinking that there is a connection between the shooters'>";
	document.getElementById("image").innerHTML="<img src='images/park.jpg' alt='test' width='455'>";
	break;
case 15:
	document.getElementById("title").innerHTML = "Consequence";
	document.getElementById("storyline").innerHTML = "You decide to stay with your previous case, thinking there is no connection between the shooters. You go to Detective Joe to ask him for any evidence he has. He gets upset since you didn't get any evidence before from the crime scene or asked for help right away. He says that he doesn't want to help you on this case, and that he has many other cases to work on.";
	document.getElementById("remind").innerHTML = "What do you do next?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(17)' value='Apologize for your lack of evidence'><input type='button' onClick='next(16)' value='Argue back to defend yourself'>";
	document.getElementById("image").innerHTML="<img src='images/anger.jpg' alt='anger' width='455'>";
	break;
//Bad endings
case 16:
	document.getElementById("title").innerHTML = "The End";
	document.getElementById("storyline").innerHTML = "You get angry with Detective Joe and say that you were very tired, and could have made more mistakes since you had no idea what to do. You also say that this is your first big case, so he has no right to judge you. Detective Joe gets annoyed and starts yelling at you. Even worse, he goes to Detective Patty's office and reports how slow your progress is. She comes to see you and you try to defend yourself. However, Patty agrees with Joe and says that you don't have the potential to be a good detective, and that your first priority should be your job. She also explains that you shouldn't have yelled at your colleagues, so she fires you.";
	document.getElementById("remind").innerHTML = "Sorry, " + name + " ending isn't the best.... Try again?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(0)' value='Restart the Story'> ";
	document.getElementById("image").innerHTML="<img src='images/fired.jpg' alt='fired' width='455'>";
	break;
case 17:
	document.getElementById("title").innerHTML = "The End";
	document.getElementById("storyline").innerHTML = "You apologize to Joe, asking him if he could still help you despite your carelessness. He forgives you. Patty then comes in and asks how much progress you made on the case. You sigh and tell her your situation. She get upset and says that you don't have the potential to work on such an important case. She lowers your position to detective in training.";
	document.getElementById("remind").innerHTML = name + " didn't have a successful career... Let's do it again!";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(0)' value='Restart the Story'>";
	document.getElementById("image").innerHTML="<img src='images/sad.jpg' alt='happy' width='455'>";
	break;
case 18:
	document.getElementById("title").innerHTML = "Final Connection";
	document.getElementById("storyline").innerHTML = "You think there is a connection between the shooters, so you decide to take on the new case. You tell Detective Patty about what you had seen last night, telling her that there could be a connection between the shootings. She agrees and is happy that you told her right away. She wants you to investigate the footage and check for files.";
	document.getElementById("remind").innerHTML = "Let's start investigating!";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(19)' value='Look at the footage'>";
	document.getElementById("image").innerHTML="<img src='images/happy.jpg' alt='sad' width='455'> ";
	break;
case 19:
	document.getElementById("title").innerHTML = "Footage Revealed";
	document.getElementById("storyline").innerHTML = "You find the footage. You see a streak of red hair from the black figure that is holding a gun and running away. You tell Detective Patty that the shooter could only be one of Hayley Smith's enemies, and she agrees.";
	document.getElementById("remind").innerHTML = "Do you want to investigate further with the footage, or search for other evidence?";
	document.getElementById("buttons").innerHTML = "<input type='button' onClick='next(9)' value='Investigate'> <input type='button' onClick='next(9)' value='Search for evidence'>";
	document.getElementById("image").innerHTML="<img src='images/shadow.jpg' alt='test' width='455'>";
	break;
		}
	//loading cookies
	save_cookies(x);
	}
	
window.onload=load_cookies;

function save_cookies(caseStr) {
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	
	// Store your cookies like so:
	document.cookie = "case=" + caseStr + "; " + expires;
	//document.cookie = "name=" + n + "; " + expires;
	//alert(document.cookie);
}

// "case=1;sdlfkjasdlfkj=asdflkjsdf;asdf=asdf;"
// ["case=1", "sdlfkjasdlfkj=asdflkjsdf", "asdf=asdf"]
	// ["case", "1"]
	// var key = "case";
	// var value = "1";
	// changeDisplay(value);



function load_cookies() {
	var str = document.cookie;
	// -> "case=1;sdlfkjasdlfkj=asdflkjsdf;asdf=asdf;"
	// split() it into an array:
	var cookieArray = str.split("; ");
	// -> ["case=1", "sdlfkjasdlfkj=asdflkjsdf", "asdf=asdf"]
	// Loop through each item in the array:
	for( var i = 0; i < cookieArray.length; i++ ) {
		// split each item into a temporary array:
		var pairArray = cookieArray[i].split("=");
		// -> ["case", "1"]
		
		// Extract the key-value pair
		var key = pairArray[0];
		// -> "case"
		var value = Number(pairArray[1]);
		// -> "1"
		// Check which key you have using an if
		if(key === "case") {
			// Pass that value to changeDisplay():
			next(value);
		}
		/*if (key === "name") {
			name= value;
		}*/
	}	
}