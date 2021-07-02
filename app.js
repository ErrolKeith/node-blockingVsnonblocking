const fs = require('fs')
const dataBlocking = fs.readFileSync('./testData.txt', 'utf-8')//blocks any further execution until complete.

//log statements to show the order when blocking is used.
console.log(dataBlocking)
console.log("I am after the blocking file log statement.")

const dataNonBlocking = fs.readFile('./testDataNonBlocking.txt', 'utf-8', (err,data) => {
    if (err) throw err
    console.log(data)
})

//log statements to show the order when non-blocing is used.
console.log(dataNonBlocking)//this is non-blocking, and will execute when comlpleted.
console.log("I am after the non blocking file log statement.")