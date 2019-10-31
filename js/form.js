function init() {
    var button = document.getElementById('button');
    
	var email = document.getElementById("email");
	
	if(email == null) {
		alert("Please enter an email to sign up!");
		return false;
	} else {
		alert("Thanks for signing up!");
		return true;
	}
}
// window.addEventListener('load', init);
