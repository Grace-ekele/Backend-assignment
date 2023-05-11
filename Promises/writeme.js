const fs = require('fs').promises

// fs.writeFile('example.txt', 'This is a text file created with promise','utf8')
// .then(()=>{
//     console.log('succesful')
// })
// .catch((err)=>{
//     console.log(err)
// })


fs.unlink('./example.txt')
.then(()=>{
    console.log(`example.text has been deleted succesfuly`)
})

.catch((err)=>{
    console.log(err)
})