// alert("Hello")
// console.log("Hello from console")


// let a =5
// const b = false
// let c = 6
// console.log(a, b)
// console.log(a + c)
// console.log(a - c)
// console.log(a * c)
// console.log(a / c)
// console.log(a % c)
// console.log(a ** c)

// a=Number(promt("Сколько тебе лет?"))
// console.log(a)
// confirm("Ты уверен?")

// let x =10
// x ="строка"

// console.log(x)


// console.log("Как тебя зовут?")
// console.log("сколько тебе лет?")
// console.log("Введите ваше имя")

// let num1=Number(prompt("Введите первое число: "));
// let num2=Number(prompt("Введите второе число: "));
// let sum =num1+num2

// alert("Сумма чисел:" +sum);

// let number=10;
// console.log(number);

// number=25;
// console.log(number);

// let day -Number(prompt("Введите день недели: "))

// if (day == 1){
//     console.log("пн")
// }
// else if (day == 2){
//     console.log("вт")
// }
// else if (day == 3){
//     console.log("ср")
// }
// else if (day ==4){
//     console.log("чт")
// }
// else if (day == 5){
//     console.log("пт")
// }
// else if (day == 6){
//     console.log("")
// }

// let day -Number(prompt("Введите день недели: (1-7)"))

// switch(day){
//     case 1:
//         console.log("пн")
//         break

//  case 2:
//     console.log("вт")
//     break

//  case 3:
//     console.log("ср")
//     break

//  case 4:
//     console.log("чт")
//     break

//  case 5:
//     console.log("пт")
//     break

//  case 6:
//     console.log("сб")
//     break

//  case 7:
//     console.log("вс")
//     break

// default:
//     console.log("Ошибка")

// }

// let num=Number(prompt("введите число:"))

// if (num>0){
//     console.log("Положительное")
// }else if (num<0){
//     console.log("Отрицательное")
// }else if (num===0){
//     console.log("Ноль")
// }
// else{
//     console.log("Это не число")
// }
    
// let num=Number(prompt("Введите число:"))

// if (isNaN(num)){
//     console.log("Это не число")
// } else if (num%2===0 && num % 4 ===0){
//     console.log("Четное и делится на 4")
// }else if (num%2===0){
//     console.log("Четное")
// }else{
//     console.log("Нечетное")
// }


// let num1=Number(prompt("Введите первое число:"))
// let num2=Number(prompt("Введите второе число:"))
// let op= prompt("Введите оператор(+,-,*,/):")

// if (op === "+"){
//     alert("Результат:" + (num1+num2))
// } else if (op ==="-"){
//     alert("Результат:" +(num1-num2))
// } else if (op ==="*"){
//     alert("Резульат:" + (num1*num2))
// }else if (op === "/"){
//     if (num2 !==0){
//         alert("Резульат:" + (num1/num2))
//     } else {
//         alert ("Ошибка: деление на ноль!")
//     }
// } else{
//     alert("Ошибка: неверный оператор")
// }

// let num1 =Number (prompt("Введите первое число:"))
// let num2 =Number(prompt("Введите второе число:"))

// alert("Большее число:" + (num1>num2? num1:num2))

// let num1= Number(prompt ("Введите первое число"))
// let num2=Number(prompt("Введите второе число:"))
// let num3=Number(prompt("Введите третье число:"))

// let max =num1
// if (num2>max){
//     max=num2
// }
// if (num3>max){
//     max=num3
// }

// // alert("Самое большое число:"+max)

// let login = prompt("Введите логин:")
// let password= prompt("Введите пароль:")

// if(login ==="admin" && password==="1234"){
//     alert("Добро пожаловать")
// }else{
//     alert("Ошибка")
// }


const N= Number(prompt("Введите число N:"))

for (let i =1; i <=N; i++){
    if (i %2===0){
    console.log(i)    
    }

    }

