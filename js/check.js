// 데이터 생성
var dataFile = [
    { "name": "권지민", "phone": "010-2260-0952", "pass": 1 },
    { "name": "홍민우", "phone": "010-8947-0574", "pass": 1 },
    { "name": "박주희", "phone": "010-2371-0240", "pass": 1 },
    { "name": "김소영", "phone": "010-9150-5193", "pass": 1 },
    { "name": "이세민", "phone": "010-3666-9401", "pass": 1 },
    { "name": "김서진", "phone": "010-8406-8995", "pass": 1 },
    { "name": "오승연", "phone": "010-5824-9132", "pass": 1 },
    { "name": "박소정", "phone": "010-5616-7839", "pass": 1 },
    { "name": "김솜솜", "phone": "010-1111-2222", "pass": 0 }
];

// 값 가져오기
let elBtn = document.getElementById("btn");

function checkPass() {
    let elName = document.getElementById("name").value;
    let elTel = document.getElementById("tel").value;

    for (let i = 0; i < dataFile.length; i++) {
        if (elName == dataFile[i].name && elTel == dataFile[i].phone && dataFile[i].pass == 1) {
            console.log(elName, elTel, i)
            window.location.href = "/pages/pass.html"
            break;
        }
        else if (
            elName == dataFile[i].name &&
            elTel == dataFile[i].phone &&
            dataFile[i].pass == 0
        ) {
            window.location.href = "/pages/fail.html"
            break;
        }
        else if (i == dataFile.length - 1) {
            alert("등록되지 않은 성함과 전화번호 입니다. \n성함과 번호를 다시 한 번 확인해주세요! 🦁");
            break;
        }

    }

}

elBtn.addEventListener("click", checkPass);
