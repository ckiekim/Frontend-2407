// 백준도장 - 2884 문제

const alarmHour = 0, alarmMin = 40;
let newHour = 0, newMin = 0;

if (alarmMin >= 45) {
    newHour = alarmHour;
    newMin = alarmMin - 45;
} else {
    // if (alarmHour == 0) {
    //     newHour = 24 + alarmHour - 1;
    //     newMin = 60 + alarmMin - 45;
    // } else {
    //     newHour = alarmHour - 1;
    //     newMin = 60 + alarmMin - 45;
    // }
    newHour = (24 + alarmHour -1) % 24;
    newMin = 60 + alarmMin - 45;
}

console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분입니다.`);