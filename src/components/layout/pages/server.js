const koa = require ('koa')
const http = require ('http')
const socket = require ('socket')

const app = new koa()
const server = http.createServer(app.callback())
const io = socket(server)

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`)
    console.log('[HTTP] Listen => press CRLT+C to stop it')
})

const SERVER_HOST = 'localhost'
const SERVER_PORT = '8080/pessoas'