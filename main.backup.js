let userHeight = document.getElementById("treeHeight");
let userCharacter = document.getElementById("treeCharacter");
let growButton = document.getElementById("growButton");
console.log('userHeight', userHeight);
console.log('userCharacter', userCharacter);
console.log('growButton', growButton);

let treeProperties = {
	height: 8,
	character: "&"
};

growButton.addEventListener("submit", function() {
	treeProperties.height = userHeight.value;
	treeProperties.character = userCharacter.value;
	buildTree();
})

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