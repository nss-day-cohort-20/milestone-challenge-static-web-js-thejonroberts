console.log('hello');

// var heightInput = 4;
// var charInput = "8";
// var placeholder = " ";

let treeProperties = {
	height: 8,
	character: "&"
};

// console.log('treeProperties', treeProperties);
function numCharacters(i) {
	let characterPerLine = (1 + i);
	return characterPerLine
}

function numSpaces(i) {
	let spacesEachSide = (treeProperties.height - 1 - i);
	return spacesEachSide;
}

function buildSpaceString(j) {
	let spaceString = "";
	for (var i = 0; i < numSpaces(j); i++) {
		spaceString += " ";
		return spaceString;
	}
}

function buildCharacterString(j) {
	let characterString = "";
	for (var i = 0; i < numCharacters(j); i++) {
		characterString += treeProperties.character;
		return characterString;
	}
}

let sideDisplay = buildSpaceString(8);
let middleDisplay = buildCharacterString(8);

function displayLineOfTree() {
	console.log(sideDisplay, middleDisplay, sideDisplay);
}

displayLineOfTree();

// for (var i = 0; i < treeProperties.height; i++) {



	// console.log(spaces, characters, spaces);