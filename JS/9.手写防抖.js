//手写防抖

//防抖函数的应用场景：
● 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次 
● 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤lodash.debounce 

function debounce(fn,delay){
  let timer = null;
  const _debounce = function(...args){
    if(timer) clearTimeout(timer);
    tiemr = setTimeout(()=>{
      fn.apply(this,...args);
    },delay)
  }
  return _debounce;
}

function debounce(fn, delay) {
  let timer = null;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay);
  };
  return _debounce;
}
