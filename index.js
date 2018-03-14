const express = require('express')
const app = express()

app.use(express.static('www'))

app.get('/change', (req, res) => {
    console.log(req)
    const arr = [
        '111',
        '22',
        '333',
        '444'
    ]
    const data = []
    data.push(arr[parseInt(Math.random() * arr.length)])
    res.send({data})
})

// jsonp 的配置
app.get('/jsonp', (req, res) => {
    console.log(req.query)
    const arr = [
        '111',
        '22',
        '333',
        '444'
    ]
    const data = []
    data.push(arr[parseInt(Math.random() * arr.length)])
    res.send(req.query.callback + '('+ JSON.stringify(data) +')')
})


app.listen(2001)
console.log('server 已启动，localhost:2001')