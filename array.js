// JavaScript Document
//var mang=["1","2","3","4"];
	
	function starType(idType,typeName)
{
	this.idType=idType;
	this.typeName=typeName;
}
var tl= new Array([]);
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
var sp = new Array([]);
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
sp[18]=new products("Sp06","Hercules","$54.00","Red","./product pages/Hercules.html","https://i.imgur.com/3WHzTnT.png","Special");
sp[19]=new products("Sp07","Sagittarius","$54.00","Brown","./product pages/Sagittarius.html","https://i.imgur.com/tOOF897.png","Special");
sp[20]=new products("Sp08","Perseus","$90.00","Brown","./product pages/Perseus.html","https://i.imgur.com/qcaBqOx.png","Special");
sp[21]=new products("Sp09","Carina","$110.00","Green","./product pages/Carina.html","https://i.imgur.com/3eOnw6H.png","Special");
sp[22]=new products("Cons05","Lynx","$25.00","Green","./product pages/Lynx.html","https://i.imgur.com/kjFoSnF.png","Cons");
sp[23]=new products("Cons06","Monoceros","$30.00","Green","./product pages/Monoceros.html","https://i.imgur.com/xB79hmP.png","Cons");
sp[24]=new products("Cons07","Columba","$40.00","Green","./product pages/Columba.html","https://i.imgur.com/4Lf75hX.png","Cons");
sp[25]=new products("Cons08","Corona Borealis","$27.00","Green","./product pages/Corona Borealis","https://i.imgur.com/WYWSP93.png","Cons");
