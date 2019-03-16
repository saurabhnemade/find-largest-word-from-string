var input = [
    "Hello alex",
    "Get&! this"
];


String.prototype.replaceAll = function (pattern, replacement) {
    return this.split(pattern).join("");
}

const dropAllInvalidChars = (inputString) => {
    let invalidCharacheters = [",",":",";","/","\\","[","]", "&", "!"]; //or maybe I should check with ascii?? Good enough to throught through
    let refinedString = inputString;
    invalidCharacheters.forEach((invalidChar) => {
        refinedString = refinedString.replaceAll(invalidChar,"");
    });

    return refinedString;
}

const findLargestFirstWord = (str) => {
    var inputArray = dropAllInvalidChars(str).split(" ");
    let largestWord = "";
    inputArray.forEach((word) => {
        if (largestWord.length < word.length) {
            largestWord = word;
        }
    });

    return largestWord;
};


//test
input.forEach((inputStr) => {
    console.log(findLargestFirstWord(inputStr));
});
