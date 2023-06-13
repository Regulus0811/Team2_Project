'use strict'

const id = document.querySelector('#id');
const passwd = document.querySelector('#passwd');
const loginBtn = document.querySelector('#button');

loginBtn.addEventListener(
    'click',
    () => {
        const req = {
            id: id.value,
            passwd: passwd.value,
        };
         
        // 서버랑 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지를 정해줘야함
        // 프론트가 해당 경로를 요청하기 전에 API라는게 이미 만들어져 있어야 함
        // 일단 /login이라는 경로가 이미 있다고 가정하고 함
        // 두번째 파라미터로 전달할 데이터를 오브젝트의 형태로 보내야 함
        // json 이라는 데이터 타입을 이용해서 데이터를 전달할거니까 req를 json 형태로 감싸주어야 함
        // stringify() 단순히 오브젝트를 문자형으로 바꿔주는 메서드
        // body를 통해서 데이터를 전달할 때는, http메서드 중에서 POST메서드로 데이터를 전달해주어야 함
        // 또한 header를 통해 내가 전달하는 데이터가 JSON 데이터라고 알려주어야 함(오브젝트로 전달)
        // 이러한 데이터를 서버에서 받을려면,  login이라는 경로와, POST라는 메서드로 데이터를 받을수있는
        // API가 마련되어있어야함
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        // then을 한번하면 promise타입이나오고, 여기서 then을 한번더 찍음
        // promise 타입은 then이라는 method로 접근을 할수있다.
        // .then((res) => console.log(res));
        // 위에 줄을 밑에 줄처럼 써도 됨
        // -> 파라미터의 값이 함수 안의 값과 같을 때는 생략할 수 있다.
        // .then(console.log);
        .then((res) => {
            if (res.success) {
                location.href = "/"
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러발생");
        });
    }   
);
 

