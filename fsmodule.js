const fs = require('fs');

//readfile( using callback function)

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })

//readFileSync
// const a = fs.readFileSync('file.txt') 
// console.log(a.toString())

//writeFile( using callback function)
// fs.writeFile('file2.txt',"This is the data.", ()=>{
//     console.log("My name is Doremon")
// })

b = fs.writeFileSync('file2.txt', "This is data for Doremon.")
console.log(b)
console.log("Namaste India!")