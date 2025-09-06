const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let rooms = {};

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", ({ roomId, playerName }) => {
        if (!rooms[roomId]) rooms[roomId] = { players: [], gameState: {} };
        rooms[roomId].players.push({ id: socket.id, name: playerName, position: [0,0,0,0] });
        socket.join(roomId);
        io.to(roomId).emit("roomUpdate", rooms[roomId]);
    });

    socket.on("rollDice", ({ roomId }) => {
        const dice = Math.floor(Math.random() * 6) + 1;
        io.to(roomId).emit("diceRolled", { playerId: socket.id, dice });
    });

    socket.on("moveToken", ({ roomId, tokenIndex, steps }) => {
        const room = rooms[roomId];
        if(!room) return;
        const player = room.players.find(p => p.id === socket.id);
        if(player) player.position[tokenIndex] += steps;
        io.to(roomId).emit("roomUpdate", room);
    });

    socket.on("disconnect", () => {
        for(let roomId in rooms){
            rooms[roomId].players = rooms[roomId].players.filter(p => p.id !== socket.id);
            io.to(roomId).emit("roomUpdate", rooms[roomId]);
        }
        console.log("User disconnected:", socket.id);
    });
});

server.listen(5000, () => console.log("Server running on port 5000"));
