document.getElementById("myButton").addEventListener("click", switchH2E);

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
function switchH2E() {
	var inputText = document.getElementById("inputText").value;
	var test = {
		"q": "/",
		"w": "\"",
		"e": "ק",
		"r": "ר",
		"t": "א",
		"y": "ט",
		"u": "ו",
		"i": "ן",
		"o": "ם",
		"p": "פ",
		"a": "ש",
		"s": "ד",
		"d": "ג",
		"f": "כ",
		"g": "ע",
		"h": "י",
		"j": "ח",
		"k": "ל",
		"l": "ך",
		"z": "ז",
		"x": "ס",
		"c": "ב",
		"v": "ה",
		"b": "נ",
		"n": "מ",
		"m": "צ",
		",": "ת",
	};
	var outputWord="";
	for (var i = 0; i < inputText.length; i++){
		var letter = inputText.charAt(i);
		if (test.hasOwnProperty(letter)){
			outputWord += test[letter];
		}
		else{
			outputWord += letter;
		}
		
	}
	
	document.getElementById("demo").innerHTML = outputWord;
	
	document.addEventListener('copy', function(e) {
	  e.clipboardData.setData('text/plain', outputWord);
	  e.preventDefault();
	});
	
	document.execCommand('copy');
	
}