function checkForm()
{
	myFrmObj=document.createAccount
	var checkBox= document.getElementById("checkbox");
	if(myFrmObj.customerFirst_name.value=="")
	{
		window.alert("Please input your first name");
		myFrmObj.customerFirst_name.focus();
		return false;
	}
	if(myFrmObj.customerLast_name.value=="")
	{
		window.alert("Please input your last name");
		myFrmObj.customerLast_name.focus();
		return false;
	}
	if(myFrmObj.customerEmail.value=="")
	{
		window.alert("Oops! You didn't type in your email");
		myFrmObj.customerEmail.focus();
		return false;
	}
	if (myFrmObj.customerPassword.value=="")
	{
		window.alert("As great as it's sound, your password can't be blank");
		myFrmObj.customerPassword.focus();
		return false;
	}
	if(myFrmObj.customerPassword.value.indexOf(" ") > -1){
        alert("Password cannot contain space!!");
		myFrmObj.customerPassword.focus();
        return false;
    }
	if(myFrmObj.customerEmail.value.indexOf(" ") > -1){
        alert("Username cannot contain space!!");
		myFrmObj.customerEmail.focus();
        return false;
    }
	if(myFrmObj.customerPassword.value.length<5)
	{	
		window.alert("Password has at least 5 characters");
		myFrmObj.customerPassword.focus();
		return false;
	}
	if(myFrmObj.RecustomerPassword.value !=myFrmObj.customerPassword.value)
	{	
		window.alert("Your Password doesn't match!!");
		myFrmObj.RecustomerPassword.focus();
		return false;
	}
	if(myFrmObj.customerEmail.value.indexOf("@gmail.com") < 0){
        alert("Please enter valid email address!!!");
		myFrmObj.customerEmail.focus();
        return false;
    }
	if(checkBox.checked == false)
	{
		alert("Can't be a follower if you don't follow the rule. Please check out our Terms and Services");
		myFrmObj.check.focus();
		return false;
	}
	
	// Save account
	var account = {
		usernameCustomer:document.getElementById('email').value,
		passwordCustomer:document.getElementById('password').value,
		firstnameCustomer:document.getElementById('firstname').value,
		lastnameCustomer:document.getElementById('lastname').value
	};
	if(localStorage.getItem('accounts') === null)
	{
		var accounts = [];
		accounts.push(account);
		localStorage.setItem('accounts',JSON.stringify(accounts));
		alert("Congratulation! You now can consider yourself our official follower, feel free to enjoy our website !");
		window.location='login.html';
	} else
	{
		var accounts = JSON.parse(localStorage.getItem('accounts'));
		var checkExistAcc = true ;
		for(var i =0; i < accounts.length; i++)
		{	if(accounts[i].usernameCustomer == account.usernameCustomer)
			{
				checkExistAcc = false;
			}
		}
		if(checkExistAcc == false) {
			alert("This email has been used !");
			myFrmObj.customerEmail.focus();
		}
		
		else{	
			accounts.push(account);
			localStorage.setItem('accounts',JSON.stringify(accounts));
			alert("Congratulation! You now can consider yourself our official follower, feel free to enjoy our website !");
			window.location='login.html';
			}
	}	
}