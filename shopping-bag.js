// JavaScript Document

//load_cartArr();
function cart_items(id,name, price,img)
{
	this.id=id;
	this.name=name;
	this.price=price;
	this.img=img;
}
var arr = new Array ();

function load_cartArr(){
	var cart = JSON.parse(localStorage.getItem('cartArr'));
	var s="";
	var total=0;
	var user = document.getElementById('user-zone');
	var check=JSON.parse(localStorage.getItem('userInfo'));
	var accounts = JSON.parse(localStorage.getItem('accounts'));
	
	if(check.checkLogin === false)
		{
			document.getElementById("items").innerHTML='You must log in to do this!';
		}
		//for(var i=0; i<cartArr.length;i++){
		//arr[i]=new cart_items(cartArr[i].id,cartArr[i].name,cartArr[i].price);
	//}
		//alert('ok');
	else if(cart===null || cart.length==0){
		document.getElementById("items").innerHTML='nothing here';
		document.getElementById("total").innerHTML='$00.00';
	//alert('ok');
	}
	else{
		//alert('ok');
		//alert(cart[0].name);
		var check=JSON.parse(localStorage.getItem('userInfo'));
		
		for(var i=0; i < cart.length; i++){
			if(check.user == cart[i].user){
		document.getElementById("items").innerHTML+='<div class="cartitem">\
                          <img src="'+ cart[i].img + '" height="100" width="110">\
                 <div style="padding-left:10px">\
                    Name : <span style="text-shadow: none; font-size: 30px;">' + cart[i].name + '</span> <br>\
                    Price : <span style="color: #EC6873; text-shadow: none; font-size: 20px;">' + '$'+cart[i].price + '</span><br>\
                    Id : <span style="text-shadow: none;">' + cart[i].id + '</span> <br>\
                 </div>\
                 <div class="nut" style="width: 60px;float: right;margin-top:10px;">\
                    <input class="btn" type="button" value="Delete" onclick="delete_item('+i+')" style="margin-bottom:5px">\
                </div>\
                    </div>';
					total = total+ parseFloat(cart[i].price);
		}
		}
			document.getElementById("total").innerHTML='$'+total;		
	}	
}
function delete_item(n){
	//alert('ok');
	if (confirm('Are you sure you want to delete this item?')) {
            	document.getElementsByClassName('cartitem')[n].style.display = 'none'; }
	var delitem = JSON.parse(localStorage.getItem('cartArr'));
	delitem.splice(n,1);
	localStorage.setItem('cartArr',JSON.stringify(delitem));
	alert('Item Deleted');					
}
/*function delete_user(n) {
        if (confirm('Are you sure you want to delete this user?')) {
            document.getElementsByClassName('cartitem')[n].style.display = 'none'; 
    }
}*/	


	function purchaseClicked() {
       checkLogin();
        if(checkLogin == 0)
        {
                alert('Please sign in before proceeding to check out!');
                window.location='login.html';
            }
            else{
                if(confirm('Proceed to check out?')){
                    alert('Thank you for your purchase!');
                    localStorage.removeItem('cartArr');
                    window.location.reload();
            }
        }
	}

window.addEventListener('load', function() {
    var url = window.location.href;
	if (url.indexOf('shopping-bag') != -1){
		load_cartArr();
		//load_item();
    }
   
})
