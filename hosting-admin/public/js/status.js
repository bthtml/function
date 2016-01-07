function person(){
var personname=document.getElementById("personname").value;
var personfile=document.getElementById("personfile").value;
if(personname=="")
{
document.getElementById("info_hint_1").innerHTML="请输入真实姓名";return false;
}
if(personfile==""){document.getElementById("file_info").innerHTML="请选择上传的图片"; return false;}
else 
{
    if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(personfile)) 
    {document.getElementById("file_info").innerHTML="图片类型必须是.gif,jpeg,jpg,png中的一种";personfile=""; return false;}
	else{
		var maxsize = 2 * 1024 * 1024;
		var size=document.getElementById("personfile").files[0].size;
		 if (size > parseInt(maxsize)) {
             document.getElementById("file_info").innerHTML="图片不大于2M"; return false;
        }
	
		}
}
document.getElementById("personform").submit();
}
function setImageBill(obj,imgid,pre)
{
var docObj=document.getElementById(obj);
var localImagId = document.getElementById(imgid)
var imgObjPreview=document.getElementById(pre);
if(docObj.files &&docObj.files[0])
{
//火狐下，直接设img属性
imgObjPreview.style.display = "block";
imgObjPreview.style.width = "300px";
imgObjPreview.style.height = "180px"; 
//imgObjPreview.src = docObj.files[0].getAsDataURL();
 
//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
}
else
{
//IE下，使用滤镜
docObj.select();
var imgSrc = document.selection.createRange().text;
//必须设置初始大小
localImagId.style.width = "300px";
localImagId.style.height = "180px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
try{
localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
}
catch(e)
{
alert("您上传的图片格式不正确，请重新选择!");
return false;
}
imgObjPreview.style.display = "none";
document.selection.empty();
}
return true;
}
function ClearInner(inner)
{
document.getElementById(inner).innerHTML="";
}

function cleartxt(id){document.getElementById("info_hint_"+id).innerHTML="";return false;}
function corporate(id){
var corporatename=document.getElementById("corporatename"+id).value;
var corporatefile=document.getElementById("corporatefile"+id).value;
if(corporatename==""){document.getElementById("info_hint_"+id+"-2").innerHTML="请输入真实姓名";return false;}
if(id==1){
var corporatepname=document.getElementById("corporatepname").value;
if(corporatepname==""){document.getElementById("info_hint_"+id+"-3").innerHTML="请输入单位企业名称";return false;}	
}
if(corporatefile==""){document.getElementById("file_info_file"+id).innerHTML="请选择上传的图片"; return false;}
else 
{
    if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(corporatefile)) 
    {document.getElementById("file_info_file"+id).innerHTML="图片类型必须是.gif,jpeg,jpg,png中的一种";corporatefile=""; return false;}
	else{
		var maxsize = 2 * 1024 * 1024;
		var size=document.getElementById("corporatefile"+id).files[0].size;
		 if (size > parseInt(maxsize)) {
             document.getElementById("file_info_file"+id).innerHTML="图片不大于2M"; return false;
        }
	
		}
}
document.getElementById("corporatestatus"+id).submit();
}

function PostAddressGO(){
	if
(document.getElementById("corporateaddress").value=="" && document.getElementById("corporatetel").value=="" && document.getElementById("corporatefax").value==""){alert("请填写内容！"); return false;}
document.getElementById("PostAddress").submit();
	}

function addlxr(){
var lxrname=document.getElementById("lxrname").value;
var lxremail=document.getElementById("lxremail").value;
var lxrtel=document.getElementById("lxrtel").value; 	
var obj = document.getElementById("lxrjob"); 
var index = obj.selectedIndex; 
var lxrjob = obj.options[index].value;
if(lxrname==''){document.getElementById("addlxrts").innerHTML="请输入联系人姓名";return false;}
if(lxremail==''){document.getElementById("addlxrts").innerHTML="请输入邮箱";return false;} 
if(lxrtel==''){document.getElementById("addlxrts").innerHTML="请输入电话";return false;} 
if(lxrjob=='请选择职位'){document.getElementById("addlxrts").innerHTML="请选择职位";return false;} 
var mailreg = /^\w+@\w+(\.\w+)+$/; 
if(!lxremail.match(mailreg)){ document.getElementById("addlxrts").innerHTML="邮箱格式不正确";return false;} 
var myreg = /^(((13[0-9]{1})|159|153)+\d{8})$/;
if(!myreg.test(lxrtel)){document.getElementById("addlxrts").innerHTML="请输入正确的手机号码";return false;} 
document.getElementById("postlxr").submit();}
function DeletedContacts(id)
{
var Contacts=document.getElementById("Deleted_"+id);
Contacts.parentNode.removeChild(Contacts); 
$.ajax({ 
url:"?action=DeletedActionContacts", 
type:"post",
data: eval({
id: id
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if (data.strValue == "1") {
	alert(data.strcontent);
}
else {
	alert(data.strcontent);
}}});
}

function alterpw(){
var oldpw=document.getElementById("oldpw").value;
var newpw=document.getElementById("newpw").value;
var newpwd=document.getElementById("newpwd").value;	
if(oldpw==''){document.getElementById("oldpwts").innerHTML="请输入旧密码";return false;}
if(newpw==''){document.getElementById("newpwts").innerHTML="请输入新密码";return false;}
if(newpwd==''){document.getElementById("newpwdts").innerHTML="请重复新密码";return false;}
if(newpwd!=newpw){document.getElementById("newpwdts").innerHTML="2次密码不一致";return false;}
if(newpwd.length<6||newpwd.length>20||newpw.length<6||newpw.length>20){document.getElementById("newpwdts").innerHTML="密码或重复密码长度应在6到20个字符之间！";return false;}
document.getElementById("PostPassword").submit();
}
function clpw(){document.getElementById("oldpwts").innerHTML='';document.getElementById("newpwts").innerHTML='';document.getElementById("newpwdts").innerHTML='';return true;}
function provingtel(){
var yztel=document.getElementById("yztel").value;
var yzm=document.getElementById("yzm").value;
if(yztel==''){document.getElementById("yztsxx").innerHTML="请输入手机号码!";return false;}
if(yzm==''){document.getElementById("yztsxx").innerHTML="请输入手机验证码";return false;}
var telreg = /^(((13[0-9]{1})|159|153)+\d{8})$/;
if(!telreg.test(yztel)){document.getElementById("yztsxx").innerHTML="请输入正确的手机号码";return false;} 
document.getElementById("FormBindPost").submit();
return true;
}
function pvtelcl(){document.getElementById("yztsxx").innerHTML='';return true;}

function BindEmaliInfo()
{
var emailinfo=1;
$.ajax({ 
url:"?act=SendMailCode", 
type:"post",
data: eval({
info:emailinfo
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if(data.strValue==0){
alert(data.strcontent);
}
else if(data.strValue==1){
alert(data.strcontent);
}
}});
time(0);
}
var wait=60;
function time(t) {
o=document.getElementById("bttelinfo");
if(t==1){
	var valname="免费获取验证码";
	o=document.getElementById("bttelinfo");
	}else{
	var valname="点击验证邮箱";
	o=document.getElementById("btemailinfo");
		}
		if (wait == 0) {
			o.removeAttribute("disabled");
			o.style.backgroundColor="#f60";
			o.style.cursor="pointer";
			o.value=valname;
			wait = 60;
		} else {
			o.setAttribute("disabled", true);
			o.style.backgroundColor="#ccc";
			o.style.cursor="";
			o.value="重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
				time(t)
			},
			1000)
		}
	}
function BindTelInfo()
{
var tel=document.getElementById("yztel").value;
if(tel==''){document.getElementById("yztsxx").innerHTML="请输入手机验证码";return false;}
var telreg = /^(((13[0-9]{1})|159|153)+\d{8})$/;
if(!telreg.test(tel)){document.getElementById("yztsxx").innerHTML="请输入正确的手机号码";return false;}
time(1);
$.ajax({ 
url:"bind.php?act=SendSMS", 
type:"post",
data: eval({
TelInfo:tel
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if(data.strValue===0){
alert(data.strcontent);
return false;
}
else if(data.strValue===1){
if(data.strcontent=="SUCCESS")
{
	document.getElementById("yztsxx").innerHTML="<font color='#090'>验证短信已发送，请留意手机短信</font>";return false;
}
}
}});

}

function Taddmoney(evt){
 var iKeyCode = window.event?evt.keyCode:evt.which; 
 if((iKeyCode>=48) && (iKeyCode<=57) || (iKeyCode>=96) && (iKeyCode<=105) || (iKeyCode>=37) && (iKeyCode<=40)||iKeyCode==8 ||iKeyCode==110|| iKeyCode==46){}  else { if (window.event) { event.returnValue = false;}else  {evt.preventDefault();}}
 var curVal=document.getElementById("addmoney").value;   
 var czvalpd=Number(curVal);
var elements = document.getElementsByTagName("input");

 //var elements=document.getElementsByClassName("money");
 for (var i=0; i < elements.length; i++) {
if (elements[i].type != "button" && elements[i].type != "submit" && elements[i].type != "reset") { 
elements[i].onfocus = function() {document.getElementById("cztsxx").innerHTML='';document.getElementById("addmoney").style.cssText='ime-mode:Disabled';return false;}; 
elements[i].onblur = function() {
if(czvalpd<=0){
document.getElementById("addmoney").value='';
document.getElementById("cztsxx").innerHTML='充值金额必须是大于0的整数或者两位以内的小数！';
return false;}else{
if(isNaN(curVal)){document.getElementById("addmoney").value='';
document.getElementById("cztsxx").innerHTML='充值金额必须是大于0的整数或者两位以内的小数！';
return false;
}else{document.getElementById("addmoney").value=czvalpd.toFixed(2);return false;}return false;
}}}}return true;}
function Show_Hidden(trid){
    if(trid.style.display=="block"){
        trid.style.display='none';
    }else{
        trid.style.display='block';
    }
}
  function tabChange(obj, id) {
            var arrayli = obj.parentNode.getElementsByTagName("li"); //获取li数组
            var arrayul = document.getElementById(id).getElementsByTagName("ul"); //获取ul数组
            for (i = 0; i < arrayul.length; i++) {
                if (obj == arrayli[i]) {
                    arrayli[i].className = "cli";
                    arrayul[i].className = "";
                }
                else {
                    arrayli[i].className = "";
                    arrayul[i].className = "hidden";
                }
            }
        }

function moneyhandle(){
if(document.getElementById("addmoney").value==''){
document.getElementById("cztsxx").innerHTML='请输入充值金额！'
}else{
var sexs=document.getElementsByName("payment");
    var check =false;
    for(var i =0;i<sexs.length;i++)
     {
		 check =check | sexs[i].checked;
		 
		 }
    if(!check)  
    {document.getElementById("paymentinfo").innerHTML='请选择支付方式'; return false;}
}
document.getElementById("PostPayFrom").submit();
}
function MoneyTelInfo(){
//var BankInfoVal=$('#BankSel option:selected').val();
BankInfoVal=document.getElementById("BankSel").value;
if(BankInfoVal=="0"){document.getElementById("TelInfoHint").innerHTML='请选择收款银行'; return false;}else{
var TelInfoVal=document.getElementById("TelInfo").value;
var TelVerify = /^(((13[0-9]{1})|159|153)+\d{8})$/;
if(TelInfoVal==''){document.getElementById("TelInfoHint").innerHTML='请输入您接收的手机号码'; return false;}
else if(!TelVerify.test(TelInfoVal)){document.getElementById("TelInfoHint").innerHTML="请输入正确的手机号码";return false;}
else{
	alert('稍后，请留意您的手机短信！');
	document.getElementById("TelInfo").value='';
	return false;}}return true;
}
function ClearHintInfo(){document.getElementById("TelInfoHint").innerHTML="";return false;}
function sel_div(t)
{
document.getElementById("TelInfoHint").innerHTML="";
/*var T_val=t.value;
 for(var i=1;i<t.length;i++)
 {


 }
*/
 if(t.value=="0")
 {
  document.getElementById("BankInfo").innerHTML='';
  document.getElementById("BankInfo").className='';
 }else{
Kid=Number(t.value);	
$.ajax({ 
url:"?action=GetBankInfo", 
type:"post",
data: eval({
bkid: Kid
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if (data.strValue == "1") {
  document.getElementById("BankInfo").innerHTML=data.strcontent;
  document.getElementById("BankInfo").className="bg-primary member-payment-pay-b";
}
else {
	alert("操作错误，请重试");
}}}); 
	 
	 }
}
function verifycoupon(){
	var couponcode=document.getElementById("couponcode").value;
	var verifycode=document.getElementById("verifycode").value;
	if(couponcode==''){document.getElementById("info_hint_4").innerHTML='请输入优惠编号！';return false;}
	if(verifycode==''){document.getElementById("info_hint_5").innerHTML='请输入验证码！';return false;}
	document.getElementById("PostFormCoupon").submit();
	}
function addrhadle(){
	var addrname=document.getElementById("addrname").value;
	var corporateaddress=document.getElementById("corporateaddress").value;
	var addrzip=document.getElementById("addrzip").value;
	var addrtel=document.getElementById("addrtel").value;
	var ZipVerify= /^[1-9][0-9]{5}$/
	var TelVerify = /^(((13[0-9]{1})|159|153)+\d{8})$/;
	if(addrname==''){document.getElementById("info_hint_6").innerHTML='请填写联系姓名！';return false;}
	if(corporateaddress==''){document.getElementById("info_hint_7").innerHTML='请填写联系地址！';return false;}
	if(addrzip==''){document.getElementById("info_hint_8").innerHTML='请填写所在邮编！';return false;}
	if(!ZipVerify.test(addrzip)){document.getElementById("info_hint_8").innerHTML='请填写正确的邮编！';return false;}
	if(addrtel==''){document.getElementById("info_hint_9").innerHTML='请填写手机号码！';return false;}
	if(!TelVerify.test(addrtel)){document.getElementById("info_hint_9").innerHTML='请填写正确的手机号码！';return false;}
	document.getElementById("PostAddr").submit();
	}
function DeleteAddres(id)
{
	var Contacts=document.getElementById("DeAd_"+id);
Contacts.parentNode.removeChild(Contacts); 
$.ajax({ 
url:"?action=DeleteAddres", 
type:"post",
data: eval({
id: id
}),
contentType: "application/x-www-form-urlencoded; charset=utf-8", 
dataType: "json",  
success: function (data) { 
if (data.strValue == "1") {
	alert(data.strcontent);
}
else {
	alert(data.strcontent);
}}});
}
function pactinfohandle(){
var paname=document.getElementById("paname").value;
var corporateaddress=document.getElementById("corporateaddress").value;
var linkname=document.getElementById("linkname").value;
var linktel=document.getElementById("linktel").value;
if(paname==''){document.getElementById("info_hint_10").innerHTML='请填写甲方名称！';return false;}
if(corporateaddress==''){document.getElementById("info_hint_11").innerHTML='请填写甲方地址！';return false;}
if(linkname==''){document.getElementById("info_hint_12").innerHTML='请填写联系姓名！';return false;}
if(linktel==''){document.getElementById("info_hint_13").innerHTML='请填写联系电话！';return false;}
document.getElementById("FormPostpan").submit();
document.getElementById("y-ackpact-0").className="y-unit y-complete";
document.getElementById("y-ackpact-1").className="y-arrow  y-complete-complete";
document.getElementById("y-ackpact-01").className="y-unit y-complete";
document.getElementById("y-ackpact-2").className="y-unit  y-current";
return false;
	}
function offlinehandle(){
var J_bank=document.getElementById("J_bank").value;
var J_userName=document.getElementById("J_userName").value;
var J_money=document.getElementById("J_money").value;
var J_time=document.getElementById("J_time").value;
var J_phone=document.getElementById("J_phone").value;
var BankInfoVal=document.getElementById("BankSel").value;
var TelVerify = /^(((13[0-9]{1})|159|153)+\d{8})$/;
if(BankInfoVal=='0'){document.getElementById("info_hint_19").innerHTML='请填写汇款银行号码！';return false;}
if(J_time==''){document.getElementById("info_hint_17").innerHTML='请填写汇款时间！';return false;}
if(J_bank==''){document.getElementById("info_hint_14").innerHTML='请填写汇款银行号码！';return false;}
if(J_userName==''){document.getElementById("info_hint_15").innerHTML='请填写汇款人姓名！';return false;}
if(J_money==''){document.getElementById("info_hint_16").innerHTML='请填写汇款金额！';return false;}
if(J_phone==''){document.getElementById("info_hint_18").innerHTML='请填写手机号码！';return false;}
if(!TelVerify.test(J_phone)){document.getElementById("info_hint_18").innerHTML='请填写正确的手机号码！';return false;}
document.getElementById("J_apply_form").submit();
	}
function setImageSubmit(obj,imgid,pre)
{
document.getElementById("Filebus_info").innerHTML="";
var docObj=document.getElementById(obj);
var localImagId = document.getElementById(imgid)
var imgObjPreview=document.getElementById(pre);
if(docObj.files &&docObj.files[0])
{
//火狐下，直接设img属性
imgObjPreview.style.display = "block";
imgObjPreview.style.width = "300px";
imgObjPreview.style.height = "180px"; 
//imgObjPreview.src = docObj.files[0].getAsDataURL();
 
//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
}
else
{
//IE下，使用滤镜
docObj.select();
var imgSrc = document.selection.createRange().text;
//必须设置初始大小
localImagId.style.width = "300px";
localImagId.style.height = "180px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
try{
localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
}
catch(e)
{
alert("您上传的图片格式不正确，请重新选择!");
return false;
}
imgObjPreview.style.display = "none";
document.selection.empty();
}
return true;
}
function rechargepw(){
var password=document.getElementById("password").value;
var pwt=document.getElementById("pwt").value;
if(password==''){document.getElementById("info_hint_20").innerHTML='请填写密码！';return false;}
if(pwt==''){document.getElementById("info_hint_21").innerHTML='请填写确认密码！';return false;}
if(password.length<6||password.length>20||pwt.length<6||pwt.length>20){document.getElementById("info_hint_21").innerHTML="密码或重复密码长度应在6到20个字符之间！";return false;}
}
function verifyhostname(){
	var hostnameval=document.getElementById("hostnameval").value;
	if(hostnameval==''){document.getElementById("info_hint_22").innerHTML='请填写主机名！';return false;}
	}
function activeCoupon(){
	
	}
$("[id=activeCoupon]").on('click',function(){
var oCouponNumber=document.getElementById("CouponNumber").value;
var oCouponCode=document.getElementById("CouponCode").value;
if(oCouponNumber==""){
	document.getElementById("info_hint_6").innerHTML='请输入激活码！';
	return false;
	}
if(oCouponCode==""){
	document.getElementById("info_hint_7").innerHTML='请输入验证码！';
	return false;
	}
document.getElementById("PostCoupon").submit();
});
$("[id=chengcode]").on('click',function(){
document.getElementById("codeimg").src='/data/code.php?tm='+Math.random();
});
