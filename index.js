const express = require("express");
const path = require("path")
const app = express();
const http = require("http")
const port = 3000;
const WebSocket = require('ws');
const server = http.createServer();
let sockets = []


const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();


nextApp.prepare()
.then(() => {


app.get("/chat/:id", (req, res) => {
  let id = req.params.id
  let newSocket = id = new WebSocket.Server({ noServer: true})

    sockets.push([newSocket, req.params.id])


    newSocket.on('connection', function connection(ws) {
        console.log(`connected to ${req.params.id} room`)
      
        // Broadcast the message
        ws.on('message', function incoming(data) {
          console.log(data)
            newSocket.clients.forEach(function each(client) {
              if (client.readyState === WebSocket.OPEN) {
                client.send(data);
              }
            });
          });

      });
  return handle(req, res)
})





app.get("*", (req, res) => {
  return handle(req, res)
})


app.listen(port, () => console.log("Server online"))

























// Create a webhook when someone accesses it by using a wildcard id and making a websocket based on it, then pushing it to an arr "sockets"



/* Creates sockets upon connecting 

app.get("/chat/:id", (req, res) => {
    let id = req.params.id
    let newSocket = id = new WebSocket.Server({ noServer: true})


    sockets.push([newSocket, req.params.id])


    newSocket.on('connection', function connection(ws) {
        console.log(`connected to ${req.params.id} room`)
      
        // Broadcast the message
        ws.on('message', function incoming(data) {
            console.log(data)   // ASD
            newSocket.clients.forEach(function each(client) {
              if (client.readyState === WebSocket.OPEN) {
                client.send(data);
              }
            });
          });

      });

    res.sendFile(path.join(__dirname + `/pages/${req.params.id}.html`))
})

*/














// Whenever someone goes to a websocket ruote, check their url against an arr with all available websockets,
// when if it can be found connect them to that socket
server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = request.url.replace("/", "");
    console.log(pathname)
    let socketPlace = sockets.findIndex(element => element[1] === pathname)
 
    if (socketPlace + 1) {
    sockets[socketPlace][0].handleUpgrade(request, socket, head, function done(ws) {
    sockets[socketPlace][0].emit('connection', ws, request);
      });
    }
     else {
      socket.destroy();
    }
  });

server.listen(8080);




})


