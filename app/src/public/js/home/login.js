"use strict";

const id = document.querySelector("#id");
const pasword = document.querySelector("#pasword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);
// 로그인버튼이 눌리면 -> 클릭 발생 -> 로그인 되어야 함

function login() {
    const req = {
        id: id.value,
        pasword: pasword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    });
}
