//
let fs = require('fs');

// 写入文件
fs.writeFile('./002fs.js', 'nihao', function (error) {
    error && console.log(error) || console.log('ok');
})

// 删除文件
fs.unlink('./002fs.js', function (error, data) {
    error && console.log(error) || console.log('ok');

})
// 读取文件
fs.readFile('./001.js', function (error, data) {
    // console.log(data.toString()); 
})