
let userHeight = document.getElementById("treeHeight");
let userCharacter = document.getElementById("treeCharacter");
let growButton = document.getElementById("growButton");
let treeProperties = {
	height: 0,
	character: ""
};
//values grabbed from DOM and tree function called on click/submit
growButton.addEventListener("click", function() {
	treeProperties.height = userHeight.value;
	treeProperties.character = userCharacter.value;
	if (inputFieldCheck() && lopsidedCheck()) {
		tree(treeProperties);
	}
})
//check that the user has entered values in both fields
function inputFieldCheck() {
	if ((treeProperties.height === "null") || (treeProperties.height === "" )) {
		alert("Please enter a number for the tree height");
	} else if (treeProperties.height < 1){
			alert("Please enter a positive integer (1, 2, 3, ...).  Our trees can only grow up.");
			userCharacter.value = null;
		} else if((treeProperties.character == "null") || (treeProperties.character == "" )) {
				alert("Please enter a character for your tree");
			} else return true;
}
//check if user has entered more than one character, confirm they want to do that, or cancel and reset char field.
function lopsidedCheck() {
	if (treeProperties.character.length === 1) {
		return true;
	} else if (treeProperties.character.length > 1) {
		 if (confirm("Use only one character, or you will have a lopsided tree! Are you sure that's what you want?")) {
		 	return true;
		 	} else { 
		 		userCharacter.value = null;
		 		return false;
				}}
}

//determine how many of each character type should appear on each line.
function numCharactersPerLine(i) {
	let numCharacters = (1 + (2 * i));
	return numCharacters;
}
function numSpacesPerLine(i) {
	let spacesEachSide = 
	(treeProperties.height - 1 - i);
	return spacesEachSide;
}
//concatenate that number of chars/spaces to build line section
function buildSpaceString(j) {
	let spaceString = "";
	for (var i = 0; i < numSpacesPerLine(j); i++) {
		spaceString += " ";
	}
	return spaceString;
}
function buildCharacterString(j, char) {
	let characterString = "";
	for (var i = 0; i < numCharactersPerLine(j); i++) {
		characterString += char;
	}
	return characterString;
}
//output each line to console until height reached.
function tree(treeObject) {
	for (var i = 0; i < treeObject.height; i++) {
		console.log(buildSpaceString(i), buildCharacterString(i, treeObject.character));
	}
}