// function sayHello(){
//     console.log("Hello")
// }

// sayHello()


// function greet(name){
//     console.log(`Привет $ {name}`)
// }

// greet("Alex")
// greet("John")
// greet("Edward")


// function sum(a,b){
//     return a+b
// }
// let numbers1=sum (1,1)
// console.log(sum(4,5))
// console.log(sum (1,2))
// console.log(sum(3,53))

// console.log(numbers1)

// function multiplay (a,b){
//     return a*b
// }

// confirm.log(multiplay (4,5))
// confirm.log(multiplay (7,8))

// function checAge(age){
//     if (age <= 18){
//         console.log("Доступ разрешен")
//     }
//     else{
//         console.log("Доступ запрещен")
//     }
// }
// checAge(20)
// checAge(15)

// function shout(word){
//     console.log(word.toUpperCase())
// }
// shout("hello")
// shout("javascript")

// function getDiscount(price){
//     return price *0.9
// }
// let newPrice=getDiscoun(1000)
// console.log("Цена со скидкой")





// function getDouble(num){
//     return num*2
// }
// console.log(getDouble(5))


// function setDouble(num){
//     return num*num
// }
// console.log(setDouble(10))


// function sum(a,b){
//     return a+b
// }
// console.log(sum(5,3))

// function subDouble(num){
//     return a-b
// }
// console.log(sum(10,4))

// function square(num){
//     return num*num
// }
// const square2=(num)=>{
//     return num*num
// }
// const square3=(num)=> num*num

// const add=(a,b)=>{
//     return a+b 
// }

// const add2 =(a,b)=> a+b
// const isEven =num => num%2 === 0
// const isAdult= age=> age <=18

// const getLenght=text=>text.leght
// console.log (getLengh ("Javascript"))

// const getDiscount= price => price *0.7

// console.log(getDiscount(5000))
// console.log(isAdult(19))
// console.log(isAdult(16))
// console.log(isEven(6))
// console.log(isEven(9))
// console.log(add(1,2))
// console.log(add2(2,2))


// const toUpper=(text)=> text.toUpperCase()
// console.log(toUpper("hello"))

// const applyDiscount = (price) => price * 0.9
// console.log(applyDiscount(100))

// const getMax = (a, b) => (a > b ? a : b)
// console.log(getMax(10,5))
// console.log(getMax(3,8))

// const sum = (a, b) => a + b
// const isEven = (num) => num % 2 === 0
// console.log(sum(3, 4))
// console.log(isEven(6))
// console.log(isEven(5))

// Массивы

// let numbers=[10,20,30,40,50,60]

// numbers.push(70)
// numbers.pop()
// numbers.unshift(0)
// numbers.shift()

// console.log(numbers.includes(100))
// console.log(numbers.indexOf(60))

// for(let i =0; i <numbers.length;i++){
//     console.log(i,numbers[i])
// }

// -----------ДОМАШНЯЯ ЗАДАНИЯ-------------

// let N= Number(prompt("Введите число N"))
// let summa =0
// let i=1

// while (i<=N){
//     summa +=i
//     i++
// }

// console.log("Сумма", summa)

// let n=Number (prompt("Введите число"))
// let reversed=0

// while (n>0){
//     let digit=n %10
//     reversed=reversed*10+digit
//     n=Math.floor(n/10)
// }console.log("Обратное число",reversed)

// let secretNumber = Math.floor(Math.random() * 10) + 1
// let guess

// do {
//     guess = Number(prompt("Угадай число от 1 до 10:"))
    
//     if (guess !== secretNumber) {
//         alert("Неправильно, попробуй ещё!")
//     }

// } while (guess !== secretNumber)

// alert("Поздравляю! Ты угадал число")

// const password = "12345"
// let attempt = 0
// let input

// do {
//     input = prompt("Введите пароль:")
//     attempt++

//     if (input === password) {
//         alert("Доступ разрешён")
//         break
//     } else {
//         alert("Неверный пароль")
//     }

// } while (attempt < 3)

// if (input !== password) {
//     alert("Вы заблокированы")
// }

// let N = Number(prompt("Введите число N:"))

// for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// let factorial =1
// for (let i=1; i<=5; i++){
//     factorial *=i

// }

// console.log(factorial)