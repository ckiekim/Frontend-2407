// 구구단
for (let i = 2; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
        console.log(`${i} x ${k} = ${i*k}`);
    }
    console.log();
}

// 다이아몬드 그리기
let N = 4;      // 가운데 두꺼운 별이 9개
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}