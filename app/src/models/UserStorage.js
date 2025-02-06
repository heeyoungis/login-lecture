"use strict";

class UserStorage {
    static #users = {
        id: ['hee','young','nyam'],
        pasword: ['123','1234','123344'],
        names: ['히영','영이','냠이'],
    };

// 은닉화된 privat 변수(#users)를 외부에서 접근할 수 있게 하는 Public 메서드
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;