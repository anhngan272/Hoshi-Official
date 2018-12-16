
//For customer login
			
function checkLogin()
	{
		myFrmObj=document.login;
		if(myFrmObj.customerEmail.value=="")
		{
			window.alert("Oops! You didn't type in your email");
			myFrmObj.customerEmail.focus();
			return false;
		}
		else if (myFrmObj.customerPassword.value=="")
		{
			window.alert("Your password cannot be blank");
			myFrmObj.customerPassword.focus();
			return false;
		}
		var usernameLogin = document.getElementById('username').value;
		var passwordLogin = document.getElementById('password').value;
		var accounts = JSON.parse(localStorage.getItem('accounts'));
		
		if(localStorage.getItem('accounts')===null){
			var accounts = [];
			localStorage.setItem('accounts',JSON.stringify(accounts));
		}
		var checkAcc = 0;
		if(usernameLogin =='admin1' && passwordLogin == '123456'){		
			checkAcc = 2;
			var admin_name = "admin_1";
			localStorage.setItem('admin',admin_name);
		}
		
		if(usernameLogin =='admin2' && passwordLogin == '123456'){		
			checkAcc = 2;
			var admin_name = "admin_2";
			localStorage.setItem('admin',admin_name);
		}
		if(usernameLogin =='admin3' && passwordLogin == '123456'){		
			checkAcc = 2;
			var admin_name = "admin_3";
			localStorage.setItem('admin',admin_name);
		}
		for(var i=0;i < accounts.length;i++)
		{
			if(usernameLogin ==accounts[i].usernameCustomer && passwordLogin == accounts[i].passwordCustomer)
			{	
				checkAcc = 1;
				var userInfo = {
					checkLogin: true,
					username:accounts[i].firstnameCustomer,
					user: accounts[i].usernameCustomer
				};
			}
		}
			if(checkAcc == 2){
				
				window.alert('You have successfully logged in Admin zone!!');
				window.location='admin/admin.html';
			}
			if(checkAcc == 1){
				localStorage.setItem('userInfo', JSON.stringify(userInfo));
				alert("Login successfully !");
				window.location='Hoshi.html';
			}
			if(checkAcc == 0){
				alert("Something wrong with your Email or Password, please try again !");
				myFrmObj.customerEmail.focus();
			}	
	}
	