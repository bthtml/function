// JavaScript Document
function AddPage()
{
  document.getElementById('AddPage').style.display = '';
  document.form1.PageName.focus();
  return false;
}
//�ַ�������
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
    alert("����������\n\n �������ļ�����")
	document.form1.PageName.focus();
	return false;
  }
  //�ж�������ǲ��ǷǷ��ַ�
  ii=0;
  bString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._";
  while (ii<PageName.length){
          if (bString.indexOf(PageName.substring(ii,ii+1))==-1)
		  {
                          alert("����������\n\n �ļ������зǷ��ַ���");
						  document.form1.PageName.select();
                          document.form1.PageName.focus();
                          return false;
          }
   ii++;
   }
   //�ж��Ƿ����
  for(i=0;i<Page.length;i++)
  {
      if(Page.options[i].value==PageName)
	   { 
	     alert("����������\n\n ������Ĵ��ĵ��Դ��ڣ�");
		 document.form1.PageName.focus();
		 return false;
	   }  
  }
  //���
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
   //�жϵ�ǰ�Ƿ��ǵ�һλ
   if( document.form1.Page.value=="")
   {
    alert("����������\n\n ��ѡ����Ҫ�ƶ����ĵ���");
    return false;
    }       
	if(index<=0)
	{
    alert("����������\n\n ���ĵ����ڵ�һλ��");
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
	alert("����������\n\n ��ѡ����Ҫ�ƶ����ĵ���");
    return false;
	}
	//�жϵ�ǰ�Ƿ��ǵ�һλ
   if( index >= Page.length-1)
   {
    alert("����������\n\n ���ĵ��������һλ�ˣ�");
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
    alert("����������\n\n ��ѡ����Ҫɾ�����ĵ���");
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