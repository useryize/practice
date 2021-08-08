const http = require('http');

const serve = http.createServer();
serve.on('request', (request, response) => {
    console.log('访问成功' + request.url);
    response.write('');
    response.end();
})


const hostname = '127.0.0.1';
const port = 8088;
serve.listen(port, () => {
    console.log(`服务启动成功可以通过${hostname}:${port}来访问`);

})