
//添加解析html
document.getElementById("addDNS").onclick=function(){
	document.getElementById("doaminTable").removeAttribute("style");
	document.getElementById("DoaminHTML").style.display="block";
	}	

//显示输入提示
function domaininfo(id){
	var showTab=document.getElementsByClassName("showTab");
	for(i=0;y=showTab.length,i<y;i++){
		if(i==id){
			document.getElementById("showTab-"+id).style.display="block";
			}
		else{
		document.getElementById("showTab-"+i).style.display="none";
		}
		}
	}
function domainSubmit(){
		//获取记录类型
		var sel=document.getElementById("doaminSelectVal");
		var doaminSelectVal=sel.options[sel.selectedIndex].value;
		//获取级别
		var dMXVal;
		if(doaminSelectVal=='MX'){
			var dMX=document.getElementById("dMX");
			var clas=dMX.options[dMX.selectedIndex].value;
			}
		//获取主机记录
		var doaminwww=document.getElementById("doaminwww").value;
		//获取解析线路
		var selL=document.getElementById("doaminLine");
		var doaminLine=selL.options[selL.selectedIndex].value;
		//获取记录值
		var ip=document.getElementById("ip").value;
		//获取TTL
		var sleTime=document.getElementById("time");
		var time=sleTime.options[sleTime.selectedIndex].value;
		//判断input是否为空
		if( ip=="" ){
			return false
			}
		//ajax递交数据
		$.ajax({ 
			url:'/member.php/Domain/Mydns/add',
			type:"post",
			data: eval({doaminSelectVal: doaminSelectVal,doaminwww:doaminwww,doaminLine:doaminLine,ip:ip,time:time,clas:clas}),
			contentType: "application/x-www-form-urlencoded; charset=utf-8", 
			dataType: "json",  
			success: function (data) { 
				//返回strValue 0为错误
				if(data.strValue == 0){
					alert(data.strcontent);
					}
				//返回 strValue 1为正确
				if(data.strValue == 1){
					//输出html；
					location.reload(true);
					}
			}
		});
		
	}
//domainEnd 取消解析
function domainEnd(){
	document.getElementById("DoaminHTML").style.display="none";
	document.getElementById("doaminTable").style.display="none";
	}


$('.del').click(function(){
	var id=$(this).siblings('.cid').val();

	if(confirm('确定删除，是否继续')){
		$.ajax({ 
			url:url+'/del', 
			type:"post",
			data: eval({id: id}),
			contentType: "application/x-www-form-urlencoded; charset=utf-8", 
			dataType: "json",  
			success: function (data) {
				if(data){
					//输出html；
					 location.reload();
					}
			}
		});
	}
})

//不同记录类型 显示不同内容
document.getElementById("doaminSelectVal").onchange=function(){
	//获取记录类型
	var sel=document.getElementById("doaminSelectVal");
	var doaminSelectVal=sel.options[sel.selectedIndex].value;
	var domainMx=document.getElementById("domainMx");
	var selL=document.getElementById("doaminLine");
	if(doaminSelectVal=='MX'){
		domainMx.innerHTML='<select id="dMX">        <option value="1">1</option>        <option value="2">2</option>        <option value="3">3</option>        <option value="4">4</option>        <option value="5">5</option>        <option value="6">6</option>        <option value="7">7</option>        <option value="8">8</option>        <option value="9">9</option>        <option value="10">10</option>    </select>';
		domainMx.setAttribute("onMouseMove","domaininfo(5)");
		}else{
			domainMx.innerHTML='--';
			domainMx.removeAttribute("onMouseMove");
			}
	if( doaminSelectVal=='REDIRECT_URL' || doaminSelectVal=='FORWARD_URL' ){
			selL.setAttribute("disabled","disabled");
		}else{
			selL.removeAttribute("disabled");
			}
}


//修改域名解析
function alterdomin(id){
	    var id=String(id);
		var olist=document.getElementById('DoaminList'+id);
		var List=olist.getElementsByTagName('td');
		var domainList={};
		for(i=0;y=List.length,i<y;i++){
			domainList[i]=List[i].innerHTML;
			}
		var selhtml=List[2].innerHTML;
		var selL=document.getElementById("doaminLine");
		var doaminLine=selL.parentNode.getElementsByTagName('option');
		var lineVal={};
		var lineHtml={};
		var str='';
		var s='';
		for(t=0;m=doaminLine.length,t<m;t++){
			lineVal[t]=doaminLine[t].value;
			lineHtml[t]=doaminLine[t].innerHTML;
			if(selhtml==lineHtml[t]){
				s='selected';
				}else{
					s='';
					}
			str=str+'<option value="'+lineVal[t]+'" '+s+'>'+lineHtml[t]+'</option>';
			}
		
		List[2].innerHTML='<select id="line'+id+'">'+str+'</select>';
		List[3].innerHTML='<input value="'+List[3].innerHTML+'" id="ip'+id+'" type="text">';
		if(List[0].innerHTML=='MX'){
		List[4].innerHTML='<select id="dMX'+id+'">        <option value="1">1</option>        <option value="2">2</option>        <option value="3">3</option>        <option value="4">4</option>        <option value="5">5</option>        <option value="6">6</option>        <option value="7">7</option>        <option value="8">8</option>        <option value="9">9</option>        <option value="10">10</option>    </select>';
			}
		List[5].innerHTML='<select id="time'+id+'"><option selected="" value="600">10分钟</option><option value="1800">30分钟</option><option value="3600">1小时</option><option value="43200">12小时</option><option value="86400">24小时</option></select>';
		List[6].innerHTML='<select id="flag'+id+'"><option selected="" value="1">正常</option><option value="2">暂停解析</optin>';
		List[7].innerHTML='<a href="javascript:void(0);" class="btn btn-primary" onClick="alterSubmit(\''+id+'\')">保存</a><a href="javascript:void(0);"onClick="alterDomainEnd(\''+id+'\')" class="btn btn-primary" style="margin-left:10px;">取消</a>';
	}

//递交修改
function alterSubmit(id){
	
	//解析线路
	var line=document.getElementById("line"+id);
	var lineVal=line.options[line.selectedIndex].value;
	
	//记录值
	var tip=document.getElementById("ip"+id).value;
	
	//MX优先级
	if(document.getElementById("dMX"+id)!=undefined){
	var dMX=document.getElementById("dMX"+id);
	var dMXVal=dMX.options[dMX.selectedIndex].value;
	}
	
	//状态
	var Flag=document.getElementById("flag"+id);
	var flagVal=Flag.options[Flag.selectedIndex].value;

	//TTL
	var time=document.getElementById("time"+id);
	var timeVal=time.options[time.selectedIndex].value;
	
	
	//ajax递交数据
		$.ajax({ 
			url:url+"/edit", 
			type:"post",
			data: eval({"lineVal":lineVal,"ip":tip,"dMXVal":dMXVal,"time":timeVal,"id":id,"flag":flagVal}),
			contentType: "application/x-www-form-urlencoded; charset=utf-8", 
			dataType: "json",  
			success: function (data) { 
				//返回strValue 0为错误
				if(data.strValue == 0){
					alert(data.strcontent);
					}
				//返回 strValue 1为正确
				if(data.strValue == 1){
					location.reload();
					}
			}
		});
	}
function alterDomainEnd(id){
	window.location.href=window.location.href;
	}