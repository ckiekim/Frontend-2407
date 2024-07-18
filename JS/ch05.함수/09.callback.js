// 콜백(callback) 함수
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++)
        callback();
}

const cb = function() {
    console.log('함수가 호출되었습니다.');
}

callThreeTimes(cb);

callThreeTimes(function() {
    console.log('익명함수가 호출되었습니다.');
});

callThreeTimes(() => {
    console.log('화살표 함수가 호출되었습니다.');
});
