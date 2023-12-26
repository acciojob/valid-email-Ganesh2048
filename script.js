var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
function validEmail(str) {
  //your JS code here.
	return str.match(pattern);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
