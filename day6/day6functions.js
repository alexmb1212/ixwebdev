function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum/numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade < 70) {
        return 'D';
    }
    else if(grade < 80) {
        return 'C';
    }
    else if(grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num === 1) {
        return num + " " + noun;
    } 
    else{
        return num + " " + noun + "s";
    }
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord=" ";
    var currLongestLength=0;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    for(var i=0; i<word.length; i++){
        if(word[i]!==word[word.length-(i+1)]){
            return "no";
    }
}
        return "yes";

}

function letterCounter(phrase, letter) {
    var currCount = 0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
}

function longestPalindrome(sentence) {
    // if (longest word in sentence is a palindrome) {
    //     return longest + " is a palindrome";
    // }
    // else {
    //     return longest + " is not a palindrome";
    // }
    
    var word = longestWord(sentence);
    if (palindrome(word)==="yes"){
        return word + " is a palindrome";
    }
    else{
        return word + " is not a palindrome";
    }
}

    
    

    

function areAnagrams (sentence1, sentence2) {
    // if (sentence1 and sentence2 are anagrams)
    //     return 'yes'
    // else
    //     return 'no'
sentence1 = sentence1.split("").sort().join(" ").trim();
sentence2 = sentence2.split("").sort().join(" ").trim();

if (sentence1===sentence2){
    return "yes";
}else{
    return "no";
}
}