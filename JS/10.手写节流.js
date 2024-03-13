//节流
节流函数的适⽤场景： 
● 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动 
● 缩放场景：监控浏览器resize 
● 动画场景：避免短时间内多次触发动画引起性能问题

function throttle(fn, delay) {
  let last = 0;
  const _throttle = function (...args) {
    const now = new Date().getTime();
    if (now - last >= delay) {
      fn.call(this, ...args);
      last = now;
    }
  };
  return _throttle;
}
