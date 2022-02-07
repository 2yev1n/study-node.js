const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 8000;

let rooms = ['room1', 'room2'];
let a = 0;

app.get('/', (req, res) => {
    console.log("유저가 접속했니다.");
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    socket.on('request_message', (msg) => {
        // response_message로 접속중인 모든 사용자에게 msg 를 담은 정보를 방출한다.
        io.emit('response_message', msg);
    });

    socket.on("joinRoom", async (num, msg) => {
        socket.join(rooms[num], () => {
            console.log("유저 방에 입장");
            io.to(roomName).emit('joinRoom', num, name);
        });
    });

    socket.on("chat message", async(num, name, msg) => {
        a = num;
        io.to(rooms[a]).emit('chat message', name, msg);
    });

    socket.on('disconnect', async () => {
        console.log('유저 연결 끊김');
    });
});

http.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기 중");
});
