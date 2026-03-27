// let colors = ["red","blue"]
// colors.push("green")

// console.log?(colors)


// let cart=["milk", "bread"]
// cart.push("eggs")
// cart.pop()
// cart.unshift("carrot")
// cart.shift()
// console.log(cart.indexOf("milk"))
// console.log(cart.includesf("milk"))
// console.log(cart)

// let word=["hello", world]
// console.log(words.join ("-"))

// let nums=[10,20,30,40,50,60]
// let part=nums.slice(1,4)
// console.log(part)
// console.log(nums)

// let fruits =["apple", "banana", "orange"]
// fruits.splice(1,0, "kiwi", "mango")

// console.log(fruits)

// let arr1=[1,2]
// let arr2=[3,4]
// let result =arr1.concat(arr1)
// console.log(result)

// let numbers =[1,2,3]
// numbers.reverse()
// console.log(numbers)

// let fruits =["banana", "apple", "orange"]
// fruits.sort()
// console.log(fruits)

// let nums =[100,1,9,21,34,3]
// nums.sort()
// console.log(nums)

// let nums =[100,1,9,21,34,3]
// nums.sort ((a+b)=> a-b)
// console.log(nums)

// МЕТОДЫ ПЕРЕБОРА МАССИВА

// let nums=[1,2,3]

// nums.forEach(num=>{
//     console.log(num)


// })

// MAP

// let nums =[1,2,3,4,5]
// let doubled=nums.map(num=>num*2)

// console.log(doubled)

// let word =["hello", "javascript","cat"]
// let leght=words.map(word => word.leght)

// console.log(lengths)

// let names =["ali", "aida", "nurlan"]
// let upperNames=names.map (name=> name.toUpperCase)

// console.log(upperNames)

// let students=[
//     {name:"Ali", age:17},
//     {name:"Aruzhan", age:18},
//     {name:"Maksat", age:16},
// ]

// let studentsNames=students.map(student=>student.name)
// console.log(studentsNames)

// let products= [
//     {tirle: "Phone", price: 350000},
//     {tirle: "Laptop", price: 550000},
//     {tirle: "Mouse", price: 20000},
// ]
// console.log(products)

// let cards =products.map(products=> {
//     return `$ {products.title}-$ {products.price} тг`
// })
// console.log(cards)

// FILTER

// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let evenNumbers=numbers.filter(num =>num %2 ===0)
// console.log(numbers)
// console.log(evenNumbers)

// let price=[500,1000.2000,3000,4000]
// let expensive=price.filter(price => price >2000)

// console.log(expensive)

// let students=[
//     {name: "Ali", score:83}
//     {name: "Aruzhan", score:92}
//     {name: "Maksat", score:67}
//     {name: "Erik", score:100}
//     {name: "Sanzhar", score:89}
// ]

// let excellentStudents=students.filter(student=>student.score>=90)

// console.log(excellentStudents)

// let students={
//      {name: "Ali", score:83}
//     {name: "Aruzhan", score:92}
//     {name: "Maksat", score:67}
//     {name: "Erik", score:100}
//     {name: "Sanzhar", score:89}

// }
// let activeStudents=students.filter(student=>student.isActive)
// console.log(activeStudents)

// let nums=[5,10,15,25,35]
// let found= nums.find(num=> num>10)

// console.log(found)

// SQL-> МАССИВ

// let users =[
//     {id:1, name :"ali"},
//     {id:2, name :"Dana"},
//     {id:3, name :"Aiym"},
// ]

// let user =users.find(u=> u.id===2)
// console.log(user)

// findIndex-возвращает индекс
// indexOf-возвращает индекс

// let nums [1,3,5,8]
// let hasEven=nums.some(num => num%2===0)

// console.log(hasEven)

// let prices=[2000,5000,800,10000]

// let cheapPrice=prices.some(price=> price<1000)

// console.log(cheapPrice)

// let numbers=[2,4,6,8,10]
// let allEven=numbers.every(num => num %2 ===0)
// console.log(allEven)

// let nums=[10,20,30,40]

// let sum=nums.reduce((acc,num))=> {
//     return acc+num
// },0

// console.log(sum)

// let cart=[

//     [title: "Phone", price: 350000],
//     [title: "Keybord", price: 450000],
//     [title: "Mouse", price: 150000],
// ]

// let total=cart.reduce((acc,item))=> {
//     return acc+item.price
// },0

// console.log(total)