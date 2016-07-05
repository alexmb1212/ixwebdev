// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
  	var new_sentence = sentence.split(" ").sort().join("").trim();
  	for (var i=0; i<new_sentence.length; i++){
  		for(var j=i+1;j<new_sentence.length; j++) {
  			if (new_sentence[i] === new_sentence[j]) {
  			return "no";
  		}
  	}
  }
  return "yes";
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var list = [1,2,3,4,5,6,7,8,9,10];
	var sorted_numbers = numbers.sort(function(a, b){return a - b});
	for (var i =0; i<numbers.length;i++){
		if (numbers[i]!==list[i]){
			return i+1;
		}
	}

}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var arraya = array1.sort(function(a, b){return a - b});
	var arrayb = array2.sort(function(a, b){return a - b});
		if(arraya.length===arrayb.length){
			return "yes"
		}else{
			return "no"
		}
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function PrimeNums(n){
    for (var i = 2; i < n; i++) {
        if(n%i==0){
            return false;
    	}
	}
	return n > 1;
}

function nPrimeNums(n){
	var counter=0;
	var answer="";
	var i=1;
	while(counter<n)
	{
		if(PrimeNums(i))
		{
			counter++;

			if(answer.length===0)
				answer+=i
			else 
				answer+=","+i;
		}
		i++
	}

	return answer;
}


// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	return (f()+f());
}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
	this.first_name=first;
	this.last_name=last;
	this.age=age;
	this.email=email;
	this.fav_color=color;
    var person = {
    	first_name,
    	last_name,
    	age,
    	email,
    	fav_color,


    };
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length;

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	var name=first+" "+last;
	return greet(name);

}