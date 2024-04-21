/** 表单验证*/
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  if (name === "" || email === "") {
    alert("Name and email must be filled out");
    return false;
  }
}

/** 数据请求与处理*/
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));

/** 滚动加载*/
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.screenY >= document.body.offsetHeight) {
    // 触发加载更多数据的操作
  }
});

/** 模态框/弹出框*/
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
