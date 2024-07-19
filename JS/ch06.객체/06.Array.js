// Array 객체

// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열 메소드
// concat()
let newFruits = fruits.concat('mango', 'orange');
console.log(newFruits, fruits);

// join() - 문자열로 연결
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);

// pop()* - 맨 뒤에 있는 요소를 끄집어 내고, 파괴적 메소드
console.log(cars.pop());
console.log(cars);

// push()* - 맨 뒤에 요소를 추가
cars.push('Volvo'); cars.push('Hyundai');
console.log(cars);

// reverse()* - 순서 뒤집기
cars.reverse();
console.log(cars);

// sort()* - 정렬
let numbers = [34, 25, 89, 7, 45, 55, 19];

// 오름차순(Ascending order)
// numbers.sort((a, b) => a - b);
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);