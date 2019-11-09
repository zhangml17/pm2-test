const http = require('http')

const server = http.createServer((req, res)=>{
    // 自定义日志
    console.log('cur time --->', Date.now())
    // 错误日志
    console.error('something error --->', Date.now())

    // 模拟错误
    if(req.url === '/err') {
        throw new Error('/err 出错了 ...')
    }

    res.setHeader('Content-type', 'application/json')
    res.end(
        JSON.stringify({
            errno:0,
            msg:'pm2 is working ...'
        })
    )
})

server.listen(8000, ()=>{
    console.log('server is listening at port 8000')
})