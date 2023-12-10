// ===== Package ======
const express = require("express")

// ===== Init ======
const app = express()
const port = 8000

// ===== Apis ====== 

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`) // __dirname 현재 경로
})

// app.get("/loginPage", (req, res) => {
    
// })

app.get("/account", (req, res) => {
    const { idx } = req.body

    const result = { //프론트에 반환할 데이터를 미리 만들어 놓음
        "success" : false,
        "message" : "",
        "data" : null 
    }

    //DB 통신

    //DB 통신 결과 처리
    result.success = true
    result.data={}

    //값 반환
    res.send(result)
})

app.post("/account", (req, res) => {
    const { id, pw, name } = req.body
})

app.put("/account", (req, res) => {
    
})

app.delete("/account", (req, res) => {
    
})


// ===== Web Server ======
app.listen(port, () => {
    console.log(`${port}번에서 HTTP 웹서버 실행됨`)
})