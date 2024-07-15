/*
 * 상수(Constant)와 변수(Variable)
 */

// 상수
const PI = 3.14159;
let radius = 10;
console.log(`반지름이 ${radius}인 원의 둘레는 ${2 * PI * radius}, 면적은 ${PI * radius ** 2}입니다.`);

// PI = 3.1415926535;       // 상수에 값을 할당하면 에러 발생

// 변수 - 전역변수(var), 로컬변수(let)
radius = 5;         // 변수는 프로그램 내에서 얼마든지 값이 변경될 수 있다.

function area() {
    let radius = 5;
    return PI * radius ** 2;
}

// 복합 대입 연산자
let a = 0, str = '';
a += 1; a += 2; a += 3;         // a <- a + 1;
console.log(a);
str += 'A quick brown fox ';    // str <- str + 'A quick brown fox '
str += 'jumps over the lazy dog.';
console.log(str);

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);      // post-increment(조회후 1증가), pre-increment(조회전 1증가)
console.log(x, y);
console.log(x--, --y);      // post-decrement, pre-decrement
console.log(x, y);

// 4. undefined 자료형
let c;
console.log(typeof(abc), typeof(c));    // 선언하지 않은 변수, 값을 초기화하지 않은 변수

// 자료형 변환
console.log(Number('123'), parseInt('123'), typeof Number('123'));
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined));     // false, 이 경우를 제외하곤 모두 true

// 자동 자료 변환
console.log("ABC" + 100 + true);    // 표현범위가 작은 것이 큰 것으로 자동 변환됨
console.log(100 + true);
console.log(typeof !!x);

// 인치를 센치로 변환
let inch = '32';
console.log(2.54 * Number(inch));