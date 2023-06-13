'use strict'

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, passwd } = await UserStorage.getUserInfo(client.id); // await -> 데이터를 다 읽어올때까지 기다려라. 프로미스를 반환하는 애한테만 할수있음
        
        if (id) {
            if (id === client.id && passwd === client.passwd) {
                return { success : true };
            }
            return { success : false, msg: "비밀번호가 틀렸습니다." }
        }
        return { success : false, msg: "존재하지 않는 아이디입니다." }
    }

    async register() {
        const client = this.body; 
        try {
            const response = await UserStorage.save(client); 
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}



module.exports = User; 