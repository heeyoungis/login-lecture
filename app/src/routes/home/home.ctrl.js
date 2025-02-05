"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req,res)=>{
        res.render("home/login");
    },
};

const users = {
    id: ['hee','young','nyam'],
    pasword: ['123','1234','123344'],
}

const process = {
    login: (req, res) => {
        console.log("로그인 요청 들어옴");
        const id = req.body.id,
            pasword = req.body.pasword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pasword[idx] === pasword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패",
        });
    },
};


module.exports = {
    output: output, 
    process: process,
}