
let userHeight = document.getElementById("treeHeight");
let userCharacter = document.getElementById("treeCharacter");
let growButton = document.getElementById("growButton");
let treeProperties = {
	height: 0,
	character: ""
};

growButton.addEventListener("click", function() {
	treeProperties.height = userHeight.value;
	treeProperties.character = userCharacter.value;
	console.log('treeProperties', treeProperties.character, treeProperties.height);
	if (inputFieldCheck() && lopsidedCheck()) {
		buildTree();
	}
})

function inputFieldCheck() {
	if ((treeProperties.height === "null") || (treeProperties.height === "" )) {
		alert("Please enter a number for the tree height");
	} else if ((treeProperties.character == "null") || (treeProperties.character == "" )) {
			alert("Please enter a character for your tree");
		} else return true;
}

function lopsidedCheck() {
	if (treeProperties.character.length === 1) {
		console.log('lop true');
		return true;
	} else if (treeProperties.character.length > 1) {
		 if (confirm("Use only one character, or you will have a lopsided tree! Are you sure that's what you want?")) {
		 	return true;
		 	} else { 
		 		userCharacter.value = null;
		 		return false;
				}}
}

function numCharactersPerLine(i) {
	let numCharacters = (1 + (2 * i));
	return numCharacters;
}

function numSpacesPerLine(i) {
	let spacesEachSide = 
	(treeProperties.height - 1 - i);
	return spacesEachSide;
}

function buildSpaceString(j) {
	let spaceString = "";
	for (var i = 0; i < numSpacesPerLine(j); i++) {
		spaceString += " ";
	}
	return spaceString;
}

function buildCharacterString(j) {
	let characterString = "";
	for (var i = 0; i < numCharactersPerLine(j); i++) {
		characterString += treeProperties.character;
	}
	return characterString;
}

function buildTree() {
	for (var i = 0; i < treeProperties.height; i++) {
		console.log(buildSpaceString(i), buildCharacterString(i));
	}
}