
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

let factorial =1
for (let i=1; i<=5; i++){
    factorial *=i

}

console.log(factorial)