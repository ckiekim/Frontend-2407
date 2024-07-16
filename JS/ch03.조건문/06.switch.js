// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random() * 50) + 50;     // 51 ~ 100 사이의 정수
let grade = '';

switch(parseInt(score / 10)) {      // score 값은 5, 6, 7, 8, 9, 10으로 변환됨
    case 10:
    case 9:
        grade = 'A'; 
        break;                      // switch 문을 벗어나게 해줌
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);

// +, 0, - 성적 시스템
let sign = '';
if (score % 10 >= 7)
    sign = '+';
else if (score % 10 >= 3)
    sign = '0';
else
    sign = '-';

switch(parseInt(score / 10)) { 
    case 10:
        grade = 'A+'; break;
    case 9:
        grade = 'A' + sign; break; 
    case 8:
        grade = 'B' + sign; break;
    case 7:
        grade = 'C' + sign; break;
    case 6:
        grade = 'D' + sign; break;
    default:
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);
