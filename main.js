console.log('hello');

let treeProperties = {
	height: 8,
	character: "&"
};

// console.log('treeProperties', treeProperties);
function numCharactersPerLine(i) {
	let characterPerLine = (1 + i);
	return characterPerLine
}

function buildCharacterString(j) {
	let characterString = "";
	for (var i = 0; i < numCharactersPerLine(j); i++) {
		characterString += treeProperties.character;
	}
	return characterString;
}

// let middleDisplay = buildCharacterString(i);
// console.log(middleDisplay);

function buildTree() {
	for (var i = 0; i < treeProperties.height; i++) {
		console.log(buildCharacterString(i));
	}
}
buildTree();

// function displayLineOfTree() {
// 	console.log(middleDisplay);
// }

// displayLineOfTree();