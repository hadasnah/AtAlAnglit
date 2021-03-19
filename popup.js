document.getElementById("translateButton").addEventListener("click", switchE2H);

String.prototype.replaceAt = function (index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function switchE2H() {
	var inputText = document.getElementById("inputText").value;

	var test = {
		"q": "/", "w": "\"", "'": ",",
		"e": "ק", "r": "ר", "t": "א", "y": "ט", "u": "ו", "i": "ן", "o": "ם", "p": "פ", "[": "]", "]": "[",
		"a": "ש", "s": "ד", "d": "ג", "f": "כ", "g": "ע", "h": "י", "j": "ח", "k": "ל", "l": "ך", ";": "ף", "'": ",",
		"z": "ז", "x": "ס", "c": "ב", "v": "ה", "b": "נ", "n": "מ", "m": "צ", ",": "ת", ".": "ץ", "/": ".", "(": ")",
		")": "(", "`": ";"
	};

	var outputWord = "";
	for (var i = 0; i < inputText.length; i++) {
		var letter = inputText.charAt(i).toLowerCase();
		if (test.hasOwnProperty(letter)) {
			outputWord += test[letter];
		}
		else {
			outputWord += letter;
		}

	}

	document.getElementById("result").innerHTML = outputWord;

	document.addEventListener('copy', function (e) {
		e.clipboardData.setData('text/plain', outputWord);
		e.preventDefault();
	});

	document.execCommand('copy');

}