class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

let index = 1;
let timeCount;
let message;
let timeID = setInterval(function () {
    // document.getElementById('time1').innerHTML = timeCount;
    timeCount--;
    countdown();
}, 1000);

let question1 = new Question("Câu hỏi 1:Hoàn thành câu tục ngữ sau:Không thầy đố mày..?", ["A. Làm được", "B. Làm nên", "C. Làm xong", "D. xong được"], "B. Làm nên", "200.000VNĐ");
let question2 = new Question("Câu hỏi 2:Thông tin nhanh nhất là ?", ["A. Internet", "B. Phụ nữ", "C. Báo đài", "D. Tivi"], "B. Phụ nữ", "500.000VNĐ");
let question3 = new Question("Câu hỏi 3:Đông vật hoạt động về đêm là ?", ["A. Kẻ trộm", "B. Ma", "C. Dân đổ phế liệu", "D. Chim cú"], "D. Chim cú", "1.000.000VNĐ");
let question4 = new Question("Câu hỏi 4:Đâu không phải là tên một bài hát do ca sĩ Trung Quân Idol thể hiện", ["A. Cầu mưa", "B. Gọi Mưa", "C. Dấu mưa", "D. Chiều nay không có mưa bay"], "A. Cầu mưa", "2.000.000VNĐ");
let question5 = new Question("Câu hỏi 5:Kinh thành trà kiệu thuộc tỉnh nào?", ["A. Quảng Ninh", "B. Hà Nam", "C. Huế", "D. Quảng Nam"], "D. Quảng Nam", "5.000.000VNĐ");
let question6 = new Question("Câu hỏi 6:Biển nào có nồng độ muối lớn nhất thế giới", ["A. Biển chết", "B. Biển đen", "C. Biển New Smyrna", "D. Biển Đông"], "A. Biển chết", "10.000.000VNĐ");
let question7 = new Question("Câu hỏi 7:Đất nước nào là quê hương của ông già tuyết", ["A. Mỹ", "B. Phần Lan", "C. Singapo", "D. NewZeland"], "B. Phần Lan", "50.000.000VNĐ");


let question = [question1, question2, question3, question4, question5, question6, question7];
let getQuestion = document.getElementById('question');
showQuestion(question1);



function next(index) {
    ++index;
    showQuestion(question[index]);
}

function showQuestion(question_1) {
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("idQuestion", question.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('asw' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
}

function chooseAnswer(id) {

    // a.innerHTML = soundCorect.getSound();
    let answer = document.getElementById(id).innerHTML;
    let getQestId1 = document.getElementById('question');
    console.log(getQestId1)
    let idQuestion = parseInt(getQestId1.getAttribute("idQuestion"));
    if (!confirm("Đây có phải là đáp án cuối cùng của bạn không")) {
        return;
    }
    if (question[idQuestion].checkAnswer(answer)) {
        alert('Câu trả lời của bạn là hoàn toàn chính xác');

        document.getElementById('result').innerHTML = "Tiền thưởng: " + (question[idQuestion].money);

        if (idQuestion === 6) {
            // a.innerHTML = win.getSound()
            alert("Chúc mừng bạn đã giành chiến thắng ");
            timeCount=1
            // window.reload();
        }
        next(idQuestion);
    }
    else {
        // a.innerHTML = soundWrong.getSound();
        alert('Rất tiếc câu trả lời của bạn là không chính xác chúc bạn may mắn lượt chơi sau ');
        timeCount=1;
        timeID
    }
}

function countdown() {
    if (timeCount < -1) {
        clearInterval(timeID);
        message = window.confirm('Bạn sẽ bắt đầu lại từ câu hỏi thứ nhất');
        reload()
    }
}

function reload() {
    location.replace("index.html");
}