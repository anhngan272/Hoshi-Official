// check user's login status

function checkLogin(){
			var user = document.getElementById('user-zone');
			var check=JSON.parse(localStorage.getItem('userInfo'));
			var accounts = JSON.parse(localStorage.getItem('accounts'));
				if(localStorage.getItem('userInfo')===null){
					var userInfo = {
					checkLogin: false,
						};
					localStorage.setItem('userInfo', JSON.stringify(userInfo));	
				}
				if(check.checkLogin === true)
					{
						user.innerHTML = "Hello "+ check.username+", ";
						user.innerHTML +=  '<input class="btn" type="button" onClick="logout()" value="Log out">';
						document.getElementById('loginbtn').style.display='none';
					}
					
		}
		function logout(){
			if(confirm('Are you sure you want to log out?') == true){
			var userInfo ={
				checkLogin : false
			};
			localStorage.setItem('userInfo', JSON.stringify(userInfo));
			window.location.reload();
			}
			else {
			var userInfo ={
				checkLogin : true
			};
			localStorage.setItem('userInfo', JSON.stringify(userInfo));
			}
		}
		window.onload=function(){
			checkLogin();
			createMenu();
			layurl();
		};