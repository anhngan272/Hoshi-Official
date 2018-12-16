

  var mang=["1","2","3","4","5"];
	
	function starType(idType,typeName)
{
	this.idType=idType;
	this.typeName=typeName;
}
var tl= new Array();
tl[0]=new starType("Basic","Basic");
tl[1]=new starType("Cons","Constellation");
tl[2]=new starType("Special","Special");


function products(id,name, price, color, location, img, idType)
{
	this.id=id;
	this.name=name;
	this.price=price;
	this.color=color;
	this.location=location;
	this.img=img;
	this.starType=idType;
}
var sp = new Array();
sp[0]=new products("Bsc01","ζNaos (Puppis)","$10.50","Blue","./product pages/Naos.html","https://upload.wikimedia.org/wikipedia/commons/f/f6/Zeta_Puppis.png","Basic");
sp[1]=new products("Bsc02","ρTureis (Puppis)","$18.50","Yellow White","./product pages/Tureis.html","https://vignette.wikia.nocookie.net/elite-dangerous/images/8/85/Yellow-White_Supergiant_Star.png","Basic");
sp[2]=new products("Bsc3","ξAzmidi (Puppis Aa)","$12.99","Orange","./product pages/Azmidi.html","http://en.es-static.us/upl/2013/03/Sun-NASAs-Solar-Dynamics-Observatory-2010aug19.jpg","Basic");
sp[3]=new products("Cons01","Ursa Minor","$45.00","Green","./product pages/Ursa Minor.html","https://i.imgur.com/QMkc7pY.png","Cons");
sp[4]=new products("Sp01","Orion","$54.00","Red","./product pages/Orion.html","https://i.imgur.com/HAmM3XN.png","Special");
sp[5]=new products("Cons02","Corona Australis","$36.00","Brown",".product pages/Corona Australis.html","https://i.imgur.com/uEa40mU.png","Cons");
sp[6]=new products("Bsc04","αBetelgeuse (Orion)","$11.59","Red","./product pages/Betelgeuse.html","https://i.imgur.com/oBwXKkW.png","Basic");
sp[7]=new products("Cons03","Libra","$40.00","Blue","./product pages/Libra.html","https://i.imgur.com/sFS8kEe.png","Cons");
sp[8]=new products("Cons04","Cancer","$30.00","Green","./product pages/Cancer.html","https://i.imgur.com/omRDuOo.png","Cons");
sp[9]=new products("Sp02","Hydra","$150.00","Red","./product pages/Hydra.html","https://i.imgur.com/L6eoZzl.png","Special");
sp[10]=new products("Sp03","Puppis","$160.00","Red","./product pages/Puppis.html","https://i.imgur.com/BTgEQzH.png","Special");
sp[11]=new products("Sp04","Taurus","$78.00","Blue","./product pages/Taurus.html","https://i.imgur.com/OYyUhw0.png","Special");
sp[12]=new products("Bsc05","βRigel (Orion)","$17.50","Blue","./product pages/Rigel.html","https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg?fit=678%2C381","Basic");
sp[13]=new products("Sp05","Pisces","$78.00","Green","./product pages/Pisces.html","https://i.imgur.com/hj4GYIw.png","Special");
sp[14]=new products("Bsc06","γBellatrix (Orion)","$16.49","Blue","./product pages/Bellatrix.html","https://osr.org/wp-content/uploads/2017/02/bellatrix-star.jpg","Basic");
sp[15]=new products("Bsc07","δMintaka (Orion)","$15.59","Blue","./product pages/Mintaka.html","https://i.imgur.com/qYeMzyL.jpg","Basic");
sp[16]=new products("Bsc08","εAlnilam (Orion)","$16.99","Blue","./product pages/Alnilam.html","https://i.imgur.com/rURQHio.jpg","Basic");
sp[17]=new products("Bsc09","ζAlnitak (Orion)","$15.79","Blue","./product pages/Alnitak.html","https://i.imgur.com/QaZpFg4.jpg","Basic");
sp[18]=new products("Sp06","Hercules","$54.00","Red","./product pages/Hercules.html","https://i.imgur.com/3WHzTnT.png","Special")
sp[19]=new products("Sp07","Sagittarius","$54.00","Brown","./product pages/Sagittarius.html","https://i.imgur.com/tOOF897.png","Special")
sp[20]=new products("Sp08","Perseus","$90.00","Brown","./product pages/Perseus.html","https://i.imgur.com/qcaBqOx.png","Special")
sp[21]=new products("Sp09","Carina","$110.00","Green","./product pages/Carina.html","https://i.imgur.com/3eOnw6H.png","Special")
sp[22]=new products("Cons05","Lynx","$25.00","Green","./product pages/Lynx.html","https://i.imgur.com/kjFoSnF.png","Cons");
sp[23]=new products("Cons06","Monoceros","$30.00","Green","./product pages/Monoceros.html","https://i.imgur.com/xB79hmP.png","Cons");
sp[24]=new products("Cons07","Columba","$40.00","Green","./product pages/Columba.html","https://i.imgur.com/4Lf75hX.png","Cons");
sp[25]=new products("Cons08","Corona Borealis","$27.00","Green","./product pages/Corona Borealis","https://i.imgur.com/WYWSP93.png","Cons");

function Order(customer,date, total, status) {
    this.customer = customer;
    this.date = date;
    this.total = total;
    this.status = status;
}

var order = new Array();
order[0]=new Order(1+". Mr A","05/11/2018", "200", "Delivered");
order[1]=new Order(2+". Mr B","06/12/2018", "300", "Delivering");
order[2]=new Order(3+". Mr C","05/12/2018", "300", "Delivering");
order[3]=new Order(4+". Ms D","06/11/2018", "300", "Delivered");
order[4]=new Order(5+". Ms E","07/12/2018", "300", "Delivering");
order[5]=new Order(6+". Mr F","05/11/2018", "300", "Delivered");
order[6]=new Order(7+". Ms G","05/11/2018", "300", "Delivered");
order[7]=new Order(8+". Mr H","05/12/2018", "300", "Delivering");
order[8]=new Order(9+". Ms I","05/12/2018", "300", "Delivering");

function User(fname,lname, email){
	this.fname = fname;
	this.lname=lname;
    this.email = email;
}

var user=new Array();
user[0]=new User(1+'. user1','Ken','email@gmail.com');
user[1]=new User(2+'. user2','Kim','email@gmail.com');
user[2]=new User(3+'. user3','Lu','email@gmail.com');
user[3]=new User(4+'. user4','Robin','email@gmail.com');
user[4]=new User(5+'. user5','Doughlas','email@gmail.com');

function load_item()
			{
				
				var url = window.location.href;
				var params = url.split('?');
				var chuoicon=params[1];
				var s="";
				var dem=0, sotrang=1;
				var lienket="";
				chuoicon=chuoicon.split('&');
				var vitri=chuoicon[1];
				var sotrang;
				var dem=0;
				var tem=new Array()
				
				for(i=0;i<sp.length;i++)
				{
					if(sp[i].starType.indexOf('Basic')!=-1 || sp[i].starType.indexOf('Cons')!=-1 || sp[i].starType.indexOf('Special')!=-1)
					{
						tem[dem]=new products(sp[i].id,sp[i].name,sp[i].price,sp[i].color,sp[i].location,sp[i].img,sp[i].idType);
						dem++;
					}
				}
				console.log("Temp value:");
				console.log(tem);
				var soluongsp=0;
				for(i=vitri;i<tem.length;i++)
				{
					console.log(i);
					console.log(tem[i]);
					s=s+'<div class="item">\
                          <img src="'+ tem[i].img + '" height="100" width="110">\
                 <div style="padding-left:10px">\
                    Name : <span>' + tem[i].name + '</span> <br>\
                    Price : <span>' + tem[i].price + '</span><br>\
                    Id : <span>' + tem[i].id + '</span> <br>\
                 </div>\
                 <div class="nut" style="width: 60px;float: right;margin-top:10px;">\
                    <input type="button" class="del_item" value="Delete" onclick="delete_item('+i+')" style="margin-bottom:5px">\
                    <input type="reset" value="Edit" onClick="editIt('+i+')">\
                </div>\
                    </div>';
					soluongsp++;
					if(soluongsp==5)
						break;
				}
				var sotrang=Math.ceil(tem.length/5);
				
				for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*5;
									lienket=lienket+'<a href="item.html?'+ chuoicon[0]+'&'+vitri+'">'+i+'</a>';
							}
							var lienket2='<div class="pagination"> '+lienket+'</div>';
							document.getElementById("sotrang").innerHTML=lienket2;
							document.getElementById("noidungcontent").innerHTML=s;
			}
function addItem(){
	var new_item = document.getElementById('new_item').value;
	var new_price=document.getElementById('new_price').value;
	var new_itemId=document.getElementById('new_itemId').value;
	var new_type=document.getElementById('new_type').value;
	if(new_item==""){
		alert('This field cannot be blank!!');
		document.getElementById('new_item').focus();
		return false;
	}
	if(new_price==""){
		alert('This field cannot be blank!!');
		document.getElementById('new_price').focus();
		return false;
	}
	if(new_itemId==""){
		alert('This field cannot be blank!!');
		document.getElementById('new_itemId').focus();
		return false;
	}
	if(new_type=="null"){
		alert('This field cannot be blank!!');
		document.getElementById('new_type').focus();
		return false;
	}
	
	sp[sp.length]=new products(new_itemId,new_item, new_price,'null', 'null', '../Squiggle-isolated_360x.png', new_type);
		load_item();
		alert('Add item successfully!!');
}
function delete_item(n) {
        if (confirm('Are you sure you want to delete this item?')) {
			delete_one_item(n,sp);
    		load_item();
    }
}	
function delete_one_item(pos, arr){
	var arrLength = arr.length;
	for (var i=pos; i<arrLength; i++) {
    arr[i] = arr[i+1];
  }
  arr.pop();
}
function editIt(n){
	document.getElementById('right-content').style.display='block';
	var editI=document.getElementsByClassName('editI')[0];
	editI.addEventListener('click', 

						   function editItem(){
	
	
	var edit_name = document.getElementById('edit_name').value;
	var edit_price=document.getElementById('edit_price').value;
	var edit_itemId=document.getElementById('edit_itemId').value;
	var edit_type=document.getElementById('edit_type').value;
	if(edit_name==""){
		alert('This field cannot be blank!!');
		document.getElementById('edit_name').focus();
		return false;
	}
	if(edit_price==""){
		alert('This field cannot be blank!!');
		document.getElementById('edit_price').focus();
		return false;
	}
	if(edit_itemId==""){
		alert('This field cannot be blank!!');
		document.getElementById('edit_itemId').focus();
		return false;
	}
	if(edit_type=="null"){
		alert('This field cannot be blank!!');
		document.getElementById('edit_type').focus();
		return false;
	}
	for(var i=0;i<sp.length;i++){
		if(edit_itemId==sp[i].id){
			alert('This id already exist!');
			document.getElementById('edit_type').focus();
			return false;
		}
	}
	sp[n].id=edit_itemId;
	sp[n].name=edit_name;
	sp[n].price=edit_price;
	sp[n].starType=edit_type;
	//sp[n]=new products(edit_itemId,edit_name, edit_price,'null', 'null', '../Squiggle-isolated_360x.png', edit_type);
	
						  
	cancelEdit();   
	load_item();
	document.getElementById('edit_name').value="";
	document.getElementById('edit_price').value="";
	document.getElementById('edit_itemId').value="";
	document.getElementById('edit_type').value="null";
	alert('Edit item successfully!!');		
	this.removeEventListener('click',editItem);	
	});
	//alert('ok');
}

function cancelEdit()
{
	document.getElementById('right-content').style.display='none';
	
}

			
/*function delete_item() {
    var del = document.getElementsByClassName('del_item');
    for (var i = 0; i < del.length; i++) {
        delete_one_item(del[i], i);
    }
}

function delete_one_item(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Are you sure you want to delete this item?')) {
            document.getElementsByClassName('item')[i].style.display = 'none';
        }
    });
}*/
function load_order() {
    for (var i = 0; i < order.length; i++)
        {
            document.getElementsByClassName('table_order')[0].innerHTML += '\
                    <tr>\
                        <td>' + order[i].customer + '</td>\
                        <td>' + order[i].date + '</td>\
                        <td>' + order[i].total + '</td>\
                        <td>' + order[i].status + '</td>\
                    </tr>';
        }
}

function load_user() {
	var realuser = JSON.parse(localStorage.getItem('accounts'));
	if(realuser===null){}
	else{
		
	for (var i = 0; i < realuser.length; i++)
			{
				user[user.length]=new User((user.length+1)+'. '+realuser[i].firstnameCustomer ,realuser[i].lastnameCustomer,realuser[i].usernameCustomer);
				
			}
		}
	
    for (var i = 0; i < user.length; i++)
        {
            document.getElementsByClassName('table_user')[0].innerHTML += '\
                    <tr class="user">\
                        <td>' + user[i].fname + '</td>\
						<td>' + user[i].lname + '</td>\
						<td>' + user[i].email + '</td>\
						<td><input type="button" class="del_user" onclick="delete_user('+i+');delete_realuser('+i+')" value="&times"></td>\
                    </tr>';				
        }	
}
function delete_realuser(n){
	
	var realuser = JSON.parse(localStorage.getItem('accounts'));
	//alert(realuser.length);
	realuser.splice(n-5,1);
	localStorage.setItem('accounts',JSON.stringify(realuser));
	alert('User Deleted');
	
	
					
}
function delete_user(n) {
        if (confirm('Are you sure you want to delete this user?')) {
            document.getElementsByClassName('user')[n].style.display = 'none'; 
    }
}	
function addCate(){
	var new_cate = document.getElementById('new_cate').value;
	var new_id=document.getElementById('new_id').value;
	if(new_cate==""){
		alert('This field cannot be blank!!');
		document.getElementById('new_cate').focus();
		return false;
	}
	if(new_id==""){
		alert('This field cannot be blank!!');
		document.getElementById('new_id').focus();
		return false;
	}
	tl[tl.length]=new starType(new_id,new_cate);
	var i=tl.length-1;
		document.getElementsByClassName('table_cate')[0].innerHTML += '\
                    <tr class="cate">\
                        <td>' + (i+1) + '</td>\
						<td>' + tl[i].typeName + '</td>\
                        <td>' + '<input type="button" class="del_cate" onclick="delete_cate('+i+')" value="&times">' + '</td>\
                    </tr>';	
}

function load_cate() {
    for (var i = 0; i < tl.length; i++)
        {
            document.getElementsByClassName('table_cate')[0].innerHTML += '\
                    <tr class="cate">\
                        <td>' + (i+1) + '</td>\
						<td>' + tl[i].typeName + '</td>\
                        <td>' + '<input type="button" class="del_cate" onclick="delete_cate('+i+')" value="&times">' + '</td>\
                    </tr>';
        }
}

function delete_cate(n) {
        if (confirm('Are you sure you want to delete this category?')) {
            document.getElementsByClassName('cate')[n].style.display = 'none'; 
    }
}
window.addEventListener('load', function() {
    var url = window.location.href;
	if (url.indexOf('item.html?item') != -1){
		load_item();
    }
    if (url.indexOf('order.html') != -1) {
        load_order();
    }
    if (url.indexOf('user.html') != -1) {
        load_user();
    }
    if (url.indexOf('category.html') != -1) {
        load_cate();
    }
})

function checkAdmin(){
	var admin=localStorage.getItem('admin');
	document.getElementById('admin-name').innerHTML=admin;
}
window.onload=function(){
	checkAdmin();	
}
