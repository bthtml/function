var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;
function mopen(id)
{	mcancelclosetime();
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';}
function mclose()
{if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';}
function mclosetime()
{closetimer = window.setTimeout(mclose, timeout);}
function mcancelclosetime()
{if(closetimer){window.clearTimeout(closetimer);closetimer = null;}
}
document.onclick = mclose; 
(function()
{
var Act="EACTACTION";
$.ajax({ 
url:"/data/data.php?action=getHtmlLoginAction", 
type:"post",
data: eval({
Act:Act
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if (data.strValue == "1") {
	document.getElementById("EmaiShowThis").innerHTML=data.strcontent;
	return false;
}
else {
	return false;
}}});
})();

