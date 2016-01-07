// JavaScript Document
function AddPage()
{
  document.getElementById('AddPage').style.display = '';
  document.form1.PageName.focus();
  return false;
}
//字符串分析
String.prototype.Trim = function()
{
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
function AddPageName()
{
  Page=document.form1.Page;
  PageName=document.form1.PageName.value;
  PageName=PageName.Trim();
  if(PageName=="")
  {
    alert("【提醒您】\n\n 请输入文件名！")
	document.form1.PageName.focus();
	return false;
  }
  //判断输入的是不是非法字符
  ii=0;
  bString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._";
  while (ii<PageName.length){
          if (bString.indexOf(PageName.substring(ii,ii+1))==-1)
		  {
                          alert("【提醒您】\n\n 文件名含有非法字符！");
						  document.form1.PageName.select();
                          document.form1.PageName.focus();
                          return false;
          }
   ii++;
   }
   //判断是否存在
  for(i=0;i<Page.length;i++)
  {
      if(Page.options[i].value==PageName)
	   { 
	     alert("【提醒您】\n\n 您输入的此文档以存在！");
		 document.form1.PageName.focus();
		 return false;
	   }  
  }
  //添加
  Page.options[Page.options.length]   =   new   Option(PageName,PageName);  
  ChDftDoc();
}

function UpPageName()
{
   var index;
   var text;
    
   form=document.form1;   
   Page=form.Page;                   
   index = form.Page.selectedIndex;
   //判断当前是否是第一位
   if( document.form1.Page.value=="")
   {
    alert("【提醒您】\n\n 请选中需要移动的文档！");
    return false;
    }       
	if(index<=0)
	{
    alert("【提醒您】\n\n 此文档以在第一位了");
    return false;
    }       

   text = Page.options[index-1].text;
   Page.options[index-1].text=Page.options[index].text;
   Page.options[index].text=text;
   Page.selectedIndex = index-1;
    ChDftDoc();
}
function DownPageName()
{

   var index;
   var text;
    
   form=document.form1;   
   Page=form.Page;                   
   index = form.Page.selectedIndex;
   if( index < 0 )
   {
	alert("【提醒您】\n\n 请选中需要移动的文档！");
    return false;
	}
	//判断当前是否是第一位
   if( index >= Page.length-1)
   {
    alert("【提醒您】\n\n 此文档以在最后一位了！");
    return false;
    }                      
   text = Page.options[index+1].text;
   Page.options[index+1].text=Page.options[index].text;
   Page.options[index].text=text;
   Page.selectedIndex = index+1;
   ChDftDoc();


}
function DelPage()
{
  if(document.form1.Page.value=="")
  {
    alert("【提醒您】\n\n 请选择需要删除的文档！");
	 document.form1.Page.focus();
	 return false;
  }
  document.form1.Page.remove(document.form1.Page.selectedIndex)
  ChDftDoc();
  
}
function ChDftDoc(){
  var i;
  var len = document.form1.Page.length;
  document.form1.MyHomePage.value = "";
  for(i=0;i<len;i++)
  {
  document.form1.MyHomePage.value += document.form1.Page.options[i].text;
  if(i<len-1)
  document.form1.MyHomePage.value += ",";
  }
}