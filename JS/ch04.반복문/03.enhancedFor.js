// Enhanced for 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];
// for (let i = 0; i < summerFruits.length; i++) {
//     console.log(i, summerFruits[i]);
// }

// for (let i in summerFruits) {
//     console.log(i, summerFruits[i]);
// }

// 배열의 모든 요소에 대해
for (let fruit of summerFruits) {
    console.log(fruit);
}

// 여름 과일들을 하나의 문자열로 만들기
let favoriteFruits = '';
for (let fruit of summerFruits)
    favoriteFruits += fruit + ' ';
console.log(favoriteFruits);

// 1에서 10까지 곱한 값(10 factorial)
let product = 1;
for (let i = 1; i <= 10; i++)
    product *= i;
console.log(product);

// 1에서 30까지 3의 배수의 배열 만들기 [3, 6, 9, ..., 30]
let multiple3 = [];
for (let i = 3; i <= 30; i += 3)
    multiple3.push(i);
console.log(multiple3);
