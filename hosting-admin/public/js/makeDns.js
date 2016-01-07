
//添加子元素 p->input\a
function addInput(){
	    var Dnsinput = document.getElementById("Dnsinput");
	     //检测input是否超过12个
		 var sum =Dnsinput.getElementsByTagName("input").length;
		if(sum<13){
		//添加input
		var p= document.createElement("p");
		var str='<input type="text" class="form-control" placeholder="如：dns1.3098.com" onFocus="borderhand(this)"><a href="javascript:void(0)" onClick="deleteP(this)">删除</a>';
		p.innerHTML=str;
		Dnsinput.appendChild(p);}
	}
//删除当前所在上层元素
function deleteP(obj){ 
  obj.parentNode.parentNode.removeChild(obj.parentNode);
}

//清除border状态
function borderhand(obj){
	obj.style.border='';
	}
//提交dns
function submitInput(){
	    //获取value
	    var Dnsinput = document.getElementById("Dnsinput");
		var List=Dnsinput.getElementsByTagName("input");
		var data={};
		for(i=0;y=List.length,i<y;i++){
			data[i]=List[i].value;
			if(List[i].value==''){
				List[i].style.border='1px #d43f3a solid';
				return false;
				}
			}
		
		//ajax递交数据
		$.ajax({ 
			url:"/data/data.php?action=getOrderInfo", 
			type:"post",
			data: eval({data:data}),
			contentType: "application/x-www-form-urlencoded; charset=utf-8", 
			dataType: "json",  
			success: function (data) { 
				//返回strValue 0为错误
				if(data.strValue == 0){
					alert(data.strcontent);
					}
				//返回 strValue 1为正确
				if(data.strValue == 1){
					window.location.href=window.location.href;
					}
			}
		});
	}

//是否修改dns
function submitShow(id){
		var submitS=document.getElementById("submit-01");
		var submitH=document.getElementById("submit-02");
		if(id==01){
			submitS.removeAttribute("style");
			submitH.style.display="none";
			}
		if(id==02){
			submitH.removeAttribute("style");
			submitS.style.display="none";
			}
	}