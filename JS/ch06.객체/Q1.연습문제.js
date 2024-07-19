// 디지털 시계에서 하루에 3이 표시되는 시간은 총 몇초인가?

let sum = 0;
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        let timeStr = hour + ':' + minute;
        // if (timeStr.indexOf('3') >= 0)
        if (timeStr.includes('3'))
            sum += 60;
    }
}
console.log(sum);

// 어떤 문자열이 회문(palindrome)인가?
// 문자열 뒤집기
let a = 'Javascript';
console.log(a.split('').reverse().join(''));

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));
