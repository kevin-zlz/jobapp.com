function ajax(){
//    第一步：创建XMLHttpRequest对象
    var myAjax=null;
    if(window.XMLHttpRequest){
        myAjax=new XMLHttpRequest();
    }else{
        myAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }

    myAjax.open('GET',url,true);
    myAjax.send(null);
    myAjax.onreadystatechange=function () {
        if(myAjax.readyState==4){
            if(myAjax.status>=200 && myAjax.status<300 || myAjax.status==304){
                alert(myAjax.responseText)
            }
        }
    }
}