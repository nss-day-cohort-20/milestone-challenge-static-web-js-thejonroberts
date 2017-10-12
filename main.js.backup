
let userHeight = document.getElementById("treeHeight");
let userCharacter = document.getElementById("treeCharacter");
let growButton = document.getElementById("growButton");

//values grabbed from DOM and tree function called on click/submit
growButton.addEventListener("click", function() {
	let treeProperties = {
		height   : 0,
		character: ""
	};
	treeProperties.height = userHeight.value;
	treeProperties.character = userCharacter.value;
	tree(treeProperties);
	})
//check that the user has entered values in both fields
function inputFieldCheck(tree) {
	if ((tree.height === "null") || (tree.height === "" )) {
		alert("Both fields must have a value!");
	} else if (tree.height < 1){
			alert("Please enter a positive integer (1, 2, 3, ...).  Our trees can only grow up.");
			userHeight.value = null;
		} else if((tree.character === "null") || (tree.character === "" )) {
				alert("Both fields must have a value");
			} else return true;
}
//check if user has entered more than one character, confirm they want to do that, or cancel and reset char field.
function lopsidedCheck(tree) {
	if (tree.character.length === 1) {
		return true;
	} else if (tree.character.length > 1) {
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
function numSpacesPerLine(i, tree) {
	let spacesEachSide = 
	(tree.height - 1 - i);
	return spacesEachSide;
}
//concatenate that number of chars/spaces to build line section
function buildSpaceString(j, tree) {
	let spaceString = "";
	for (var i = 0; i < numSpacesPerLine(j, tree); i++) {
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
function tree(tree) {
	if (inputFieldCheck(tree) && lopsidedCheck(tree))  {
	for (var i = 0; i < tree.height; i++) {
		console.log(buildSpaceString(i, tree), buildCharacterString(i, tree.character));
	}}
}
