var number1 = 9;
var number2 = 6;
var sum = number1+number2;
console.log("the sum is: " + sum);

var favColours = ["Blue", "Green", "Black", "Grey"];
var i;
var text = "<ul>";
for (i = 0; i < favColours.length; i++){
	text += "<li>" + favColours[i] + "</li>";
}
console.log(text);
text += "</ul>";

function cube(number){
	return number * number * number;
}
var cubbed = cube(number1);
console.log(cubbed);

var cat1 = {
	name: "Tom",
	tagNo: 320260,
	sayHello : function(){
		return "Meow";
	}
}
console.log(cat1.name + " says " + cat1.sayHello());

