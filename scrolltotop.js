window.onscroll = function() {
	scroll();	
}

function scroll() {
	if (document.body.scrollTop>10 || document.documentElement.scrollTop>10)
		document.getElementById("totop").style.display = "block";
	else
		document.getElementById("totop").style.display = "none";
}

function Backtotop() {
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}