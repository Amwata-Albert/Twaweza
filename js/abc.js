//registration check

function register(){

	let username=document.getElementById("user_name").value;
	let password1=document.getElementById("password").value;
	let password2=document.getElementById("repeat_password").value;
	
	

	if (username.length<=5) {
		var disp1="Not Registered, username must be long than 5 characters";
		alert(disp1);
		window.location="register.html";
		alert(disp1);
		
	}
	else if (password1!=password2) {
		alert("entered passwords do not match. Please repeat the passwords");
			window.location="register.html";	
			alert("entered passwords do not match. Please repeat the passwords");
				
		}
	else if(password1.length<=8){
		alert("enter a strong password more than 8 characters to continie sign-up");
		window.location="register.html";
		alert("enter a strong password more than 8 characters to continie sign-up");
	}
	

	else{
		alert("Account succesfully created, you can now login");
		window.location="login.html";
		alert("Account succesfully created, you can now login");
	}


	
}
	
	//usser login  validation

function login1(){
	let password=document.getElementById("password").value;
	let l_username=document.getElementById("l_username").value;	
	if (password.length<=7) {
		alert("enter a valid password more than 8 characters");
		window.location.href="login.html";
		//alert("enter a valid password more than 8 characters");

		

	}
	else if (l_username.length<=5) {
		alert("enter a valid password more than 5 characters");
		window.location.href="login.html";
		alert("enter a valid password more than 5 characters");
		
	}
	//else if noerr logg in
	else{
		
		window.location("index.html");
		//alert("logged in succesfully, Welcome");
	}
}

