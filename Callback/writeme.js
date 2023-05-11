const fs = require('fs')
fs.writeFile('sample.txt', 'This is a text file','utf8',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
})
// fs.writeFile('mypdffile.pdf', 'Hi Grace-ekele,We are thrilled to announce the launch of our new Discord server! As a community-driven platform, conversation is at the heart of what we are, and we believe that Discord will provide a great opportunity for our members to connect, share their experiences, and support one another.Our Discord server is open to the whole Exercism community. It is the perfect place to meet like-minded individuals, get help and advice from experienced programmers, and make new friends. Here are just a few of the things you can expect from our Discord server A welcoming and inclusive \n where everyone is encouraged to participate and where we enforce our Code of Conduc','utf8',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })

// fs.unlink('./sample.pdf',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`sample.txt has been deleted successfuly `)
//     }

// })