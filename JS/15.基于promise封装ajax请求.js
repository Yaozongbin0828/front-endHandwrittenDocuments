function ajax(method,url,data){
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url,data);
    xhr.onreadystatechange = () =>{
      if(xhr.readyState !== 4)return;
      if(xhr.state == 200){
        resolve(xhr.responseText);
      }else{
        reject(xhr.statusText);
      }
    };
    xhr.send(data);
  })
}

// promise封装实现:
function getData(url){
  let promise = new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,ture);
    xhr.onreadystatechange = function(){
      if(this.readyState !== 4)return
      if(this.status == 200){
        resolve(this.response);
      }else{
        reject(new Error(this.statusText));
      }
    };
    xhr.onerror = function(){
      reject(new Error(this.statusText));
    }
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept","application/json");
    xhr.send(null);
  })
  return promise;
}
