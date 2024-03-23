//手写Ajax
const xhr = new XMLHttpRequest();
xhr.open('GET',url,true) //开启异步监听
xhr.onreadystatechange = function(){
  if(this.readyState !== 4) return;
  if(this.state == 200){
    console.log(this.response);
  }else{
    throw new Error(xhr.statysText);
  }
}
xhr.send(); 

const SERVER_URL = "./server";
let xhr = new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onreadystatechange = function(){
  if(this.readyState !== 4)return;
  if(this.state === 200){
    handle(this.response);
  }else{
    console.error(this.staysText);
  }
};

//设置请求失败时的监听函数
xhr.onerror = function(){
  console.error(this.statysText);
}
// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept","application/json")
// 发送请求
xhr.send(null);



