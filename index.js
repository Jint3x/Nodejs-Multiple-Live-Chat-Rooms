const express = require("express");
const path = require("path")
const app = express();
const http = require("http")
const port = 3000;
const WebSocket = require('ws');


//const wss1 = new WebSocket.Server({ noServer: true });
const server = http.createServer();


let sockets = []

// Create a webhook when someone accesses it by using a wildcard id and making a websocket based on it, then pushing it to an arr "sockets"
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




app.listen(port, () => console.log("Server online"))


// Whenever someone goes to a websocket ruote, check their url against an arr with all available websockets,
// when if it can be found connect them to that socket
server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = request.url.replace("/", "");
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



