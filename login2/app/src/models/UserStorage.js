// MVC 모델 중 M
'use strict'

//users테이블에 접근해서 데이터를 읽어올수 있어야 하니까 fs(파일시스템)을 불러옴
const fs = require("fs").promises;

class UserStorage {
    // 클래스 안에 변수를 선언할 때는 const가 필요없다
    // static #users = { // #을 앞에 붙히는 것은 public에서 private로 바꿔주는것 -> 은닉화
    //     id: ["qwe", "asd", "zxc"],
    //     passwd: ["123", "456", "789"],
    //     name: ["가나다", "라마바", "사아자"],
    // };

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, passwd, name]
        const userInfo =  usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data); // 버퍼 데이터를 파싱해주기
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) { // ...arg 이렇게 하면 파라미터로 넘긴 변수들이 배열 형태로 들어오게 됨
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })  
        .catch((err) => console.error);
    } 

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json") // 프로미스를 반환하면 then이라는 메소드에 접근가능, 오류처리는 catch
        .then((data) => { // 성공했을때    pending은 데이터를 다 읽어오지 못했다는 뜻
            return this.#getUserInfo(data, id);
        })  
        .catch((err) => console.error); // 실패했을때
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.passwd.push(userInfo.passwd);
        users.name.push(userInfo.name);
        // 데이터 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}
 
module.exports = UserStorage;
