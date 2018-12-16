var mang=["1","2","3","4"];
	
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
sp[0]=new products("Bsc01","ζNaos (Puppis)","10.50","Blue","./product pages/Naos.html","https://upload.wikimedia.org/wikipedia/commons/f/f6/Zeta_Puppis.png","Basic");
sp[1]=new products("Bsc02","ρTureis (Puppis)","18.50","Yellow White","./product pages/Tureis.html","https://vignette.wikia.nocookie.net/elite-dangerous/images/8/85/Yellow-White_Supergiant_Star.png","Basic");
sp[2]=new products("Bsc03","ξAzmidi (Puppis Aa)","12.99","Orange","./product pages/Azmidi.html","http://en.es-static.us/upl/2013/03/Sun-NASAs-Solar-Dynamics-Observatory-2010aug19.jpg","Basic");
sp[3]=new products("Cons01","Ursa Minor","45.00","Green","./product pages/Ursa Minor.html","https://i.imgur.com/QMkc7pY.png","Cons");
sp[4]=new products("Sp01","Orion","54.00","Red","./product pages/Orion.html","https://i.imgur.com/HAmM3XN.png","Special");
sp[5]=new products("Cons02","Corona Australis","36.00","Brown","./product pages/Corona Australis.html","https://i.imgur.com/uEa40mU.png","Cons");
sp[6]=new products("Bsc04","αBetelgeuse (Orion)","11.59","Red","./product pages/Betelgeuse.html","https://i.imgur.com/oBwXKkW.png","Basic");
sp[7]=new products("Cons03","Libra","40.00","Blue","./product pages/Libra.html","https://i.imgur.com/sFS8kEe.png","Cons");
sp[8]=new products("Cons04","Cancer","30.00","Green","./product pages/Cancer.html","https://i.imgur.com/omRDuOo.png","Cons");
sp[9]=new products("Sp02","Hydra","150.00","Red","./product pages/Hydra.html","https://i.imgur.com/L6eoZzl.png","Special");
sp[10]=new products("Sp03","Puppis","160.00","Red","./product pages/Puppis.html","https://i.imgur.com/BTgEQzH.png","Special");
sp[11]=new products("Sp04","Taurus","78.00","Blue","./product pages/Taurus.html","https://i.imgur.com/OYyUhw0.png","Special");
sp[12]=new products("Bsc05","βRigel (Orion)","17.50","Blue","./product pages/Rigel.html","https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg?fit=678%2C381","Basic");
sp[13]=new products("Sp05","Pisces","78.00","Green","./product pages/Pisces.html","https://i.imgur.com/hj4GYIw.png","Special");
sp[14]=new products("Bsc06","γBellatrix (Orion)","16.49","Blue","./product pages/Bellatrix.html","https://osr.org/wp-content/uploads/2017/02/bellatrix-star.jpg","Basic");
sp[15]=new products("Bsc07","δMintaka (Orion)","15.59","Blue","./product pages/Mintaka.html","https://i.imgur.com/qYeMzyL.jpg","Basic");
sp[16]=new products("Bsc08","εAlnilam (Orion)","16.99","Blue","./product pages/Alnilam.html","https://i.imgur.com/rURQHio.jpg","Basic");
sp[17]=new products("Bsc09","ζAlnitak (Orion)","15.79","Blue","./product pages/Alnitak.html","https://i.imgur.com/QaZpFg4.jpg","Basic");
sp[18]=new products("Sp06","Hercules","54.00","Red","./product pages/Hercules.html","https://i.imgur.com/3WHzTnT.png","Special")
sp[19]=new products("Sp07","Sagittarius","54.00","Brown","./product pages/Sagittarius.html","https://i.imgur.com/tOOF897.png","Special")
sp[20]=new products("Sp08","Perseus","90.00","Brown","./product pages/Perseus.html","https://i.imgur.com/qcaBqOx.png","Special")
sp[21]=new products("Sp09","Carina","110.00","Green","./product pages/Carina.html","https://i.imgur.com/3eOnw6H.png","Special")
sp[22]=new products("Cons05","Lynx","25.00","Green","./product pages/Lynx.html","https://i.imgur.com/kjFoSnF.png","Cons");
sp[23]=new products("Cons06","Monoceros","30.00","Green","./product pages/Monoceros.html","https://i.imgur.com/xB79hmP.png","Cons");
sp[24]=new products("Cons07","Columba","40.00","Green","./product pages/Columba.html","https://i.imgur.com/4Lf75hX.png","Cons");
sp[25]=new products("Cons08","Corona Borealis","27.00","Green","./product pages/Corona Borealis.html","https://i.imgur.com/WYWSP93.png","Cons");

function createMenu()
{
	var s="";
	var vitri=0;
	for(i=0;i<tl.length;i++)
	{
		var a='<a href="product.html?'+tl[i].idType+'&'+vitri+'"><div>';
		s=s+a+tl[i].typeName+'</div></a>';
	}
	//alert(s);
	document.getElementById("menu").innerHTML=s;
}
var tem=new Array();
function layurl()
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
				//var tem=new Array()
				
				for(i=0;i<sp.length;i++)
				{
					if(sp[i].starType.indexOf(chuoicon[0])!=-1)
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
					s=s+'<a href="product.html?'+ tem[i].idType +'"><div align="center" style="line-height:30px;float:left; width: 278px; height: 385px; margin: 10px; background: url(https://i.imgur.com/qenQ54S.png); background-repeat: no-repeat; background-position: center;">'+'<a href="'+tem[i].location+'"><img src="'+tem[i].img +'" width="250px" height="250px" style="margin-top: 15px; margin-bottom: 15px; margin-left: 10px; margin-right: 10px;" />'+ tem[i].name +'<br/>'+'$'+tem[i].price+ '<br/></a><button class="btn" onclick="addtocart('+'tem['+i+'].id'+')">Add to bag</button></div></a>';
					soluongsp++;
					
					if(soluongsp==6)
						break;
				}
				var sotrang=Math.ceil(tem.length/6);
				
				for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*6;
									lienket=lienket+'<a href="product.html?'+ chuoicon[0]+'&'+vitri+'">'+i+'</a>';
							}
							var lienket2='<div class="pagination"> '+lienket+'</div>';
							document.getElementById("sotrang").innerHTML=lienket2;
							document.getElementById("noidungcontent").innerHTML=s;
			}


			
window.onload = function(){
	createMenu();
	layurl();

};

var temp = [];
function addtocart(id){
	//alert('ok');
	var check=JSON.parse(localStorage.getItem('userInfo'));
	for(var i=0;i<sp.length;i++){
		if(sp[i].id==id ){
			var incart={
				img: sp[i].img,
				name: sp[i].name,
				price:sp[i].price,
				id: sp[i].id,
				user:check.user
			};	
		}
	}
	//alert(incart.id);
	var check=JSON.parse(localStorage.getItem('userInfo'));
	if(check.checkLogin == false){
		alert('You must log in to do this!');
		return false;
	}
	 if(localStorage.getItem('cartArr') === null){
		var cartArr = new Array;
		cartArr.push(incart);
		localStorage.setItem('cartArr',JSON.stringify(cartArr));
		alert('Added to bag!');
	}
	else{
		var cartArr = JSON.parse(localStorage.getItem('cartArr'));
		var checkCart=false;
		for(var i=0;i<cartArr.length;i++){
			if(id == cartArr[i].id){
			checkCart=true;
			}
		}
		if(checkCart == true){
			alert('This item already in your shopping bag!');
		}
		else {
			cartArr.push(incart);
			localStorage.setItem('cartArr',JSON.stringify(cartArr));
			alert('Added to bag!');
		}
	}	
}

function searchurl(){
				var page=0;
				var searchValue=document.getElementById('searchValue').value;
				var url = 'product.html?search='+searchValue+'&'+page;
				window.location.href=url;			
			}
			
function loadSearch(){
				var url = window.location.href;
				var params= url.split('=');
				
				var par = params[1].split('&');
				//alert(par[1]);
				var page=par[1];
				
				var s="";
				var lienket="";
				var soluongsp=0;
				
				var dem=0;
				var tem2=new Array()
				
				for(i=0;i<sp.length;i++)
				{
					if(sp[i].name.toUpperCase().indexOf(par[0].toUpperCase()) != -1 )
					{
						tem2[dem]=new products(sp[i].id,sp[i].name,sp[i].price,sp[i].color,sp[i].location,sp[i].img,sp[i].idType);
						dem++;
						
					}
				}
				console.log("Temp value:");
				console.log(tem2);
				for(i=page;i<tem2.length;i++)
				{
					console.log(i);
					console.log(tem2[i]);
					s=s+'<a href="product.html?'+ tem2[i].idType +'"><div align="center" style="line-height:30px;float:left; width: 278px; height: 385px; margin: 10px; background: url(https://i.imgur.com/qenQ54S.png); background-repeat: no-repeat; background-position: center;">'+'<a href="'+tem2[i].location+'"><img src="'+tem2[i].img +'" width="250px" height="250px" style="margin-top: 15px; margin-bottom: 15px; margin-left: 10px; margin-right: 10px;" />'+ tem2[i].name +'<br/>'+tem2[i].price+ '<br/></a><button class="btn" onclick="addtocart('+'tem['+i+'].id'+')">Add to bag</button></div></a>';
					soluongsp++;
					if(soluongsp==6)
						break;
				}
				var sotrang=Math.ceil(tem2.length/6);
				
				for(i=1;i<=sotrang;i++)
							{
									page=(i-1)*6;
									lienket=lienket+'<a href="product.html?search='+par[0]+'&'+page+'">'+i+'</a>';
							}
							var lienket2='<div class="pagination"> '+lienket+'</div>';
							document.getElementById("sotrang").innerHTML=lienket2;
							document.getElementById("noidungcontent").innerHTML=s;
				
			}
			
function searchPrice(){
	var price1=document.getElementById('price1').value;
	var price2=document.getElementById('price2').value;
	var p1= parseFloat(price1);
	var p2= parseFloat(price2);
	//alert(price1);
	if(price1=="" || price2=="" || p1 > p2){
		alert('Please enter again!!');
		document.getElementById('price1').focus();
	}
	
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
					if(sp[i].starType.indexOf(chuoicon[0])!=-1 && (parseFloat(sp[i].price)>=p1 && parseFloat(sp[i].price)<=p2))
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
					s=s+'<a href="product.html?'+ tem[i].idType +'"><div align="center" style="line-height:30px;float:left; width: 278px; height: 385px; margin: 10px; background: url(https://i.imgur.com/qenQ54S.png); background-repeat: no-repeat; background-position: center;">'+'<a href="'+tem[i].location+'"><img src="'+tem[i].img +'" width="250px" height="250px" style="margin-top: 15px; margin-bottom: 15px; margin-left: 10px; margin-right: 10px;" />'+ tem[i].name +'<br/>'+'$'+tem[i].price+ '<br/></a><button class="btn" onclick="addtocart('+'tem['+i+'].id'+')">Add to bag</button></div></a>';
					soluongsp++;
					
					if(soluongsp==6)
						break;
				}
				var sotrang=Math.ceil(tem.length/6);
				
				for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*6;
									lienket=lienket+'<a href="product.html?'+ chuoicon[0]+'&'+vitri+'">'+i+'</a>';
							}
							var lienket2='<div class="pagination"> '+lienket+'</div>';
							document.getElementById("sotrang").innerHTML=lienket2;
							document.getElementById("noidungcontent").innerHTML=s;
							alert('ok');
	
}
function loadPrice(){
	searchPrice();
	
}
window.addEventListener('load', function() {
    var url = window.location.href;
	if (url.indexOf('product.html?search') != -1) {
		loadSearch();
    }
});