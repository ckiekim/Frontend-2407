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