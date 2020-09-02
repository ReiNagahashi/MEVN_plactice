const {greet,item} = require('./test');

// console.log(greet('Gaku'),item);

const fs = require('fs');

// Read files
    // fs.readFile('./docs/blog1.txt',(err,data) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(data);
    // });

// write files
// fs.writeFile('./docs/blog1.txt','Hellp world', () =>{
//     console.log('files are changed');
// });

// fs.writeFile('./docs/blog2.txt','Hello, again', () => {
//     console.log('Changed again ');
// })

// directories
    // if(!fs.existsSync('./assets')){
    //     fs.mkdir('./assets',(err) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log('foldr created');
    //     })
    // }else{
    //     fs.rmdir('./assets',(err) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log('firectory deleted successfully');
    //     })
    // }

const readStream = fs.createReadStream('./docs/blog3.txt',{ encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data',(chunk) => {
    console.log('----- New CHUNK -----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK \n');
    writeStream.write(chunk);
})
