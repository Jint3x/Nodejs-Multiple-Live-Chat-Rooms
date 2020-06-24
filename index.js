const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const bodyParser = require('body-parser');
const port = 3000;
const WebSocket = require('ws');
const server = http.createServer();
let sockets = [];


const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();


nextApp.prepare()
.then(() => {
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Create a chat room once a request has been received from the client side and set event listeners
// for connections and messages
app.post("/chat_creation/create", (req, res) => {
  let newSocket = new WebSocket.Server({ noServer: true})
  let urlToRoom = req.body.name

  // If the requestest chat room path includes white spaces, remove them.
  if (urlToRoom.includes(" ")) {
    urlToRoom = urlToRoom.replace(/\s/, "")
  }

  sockets.push([newSocket, urlToRoom])

  newSocket.on('connection', function connection(ws) {

      // Update client pool on new connection
      newSocket.clients.forEach(function each(client) {     
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({connected: newSocket.clients.size}))
           }
        });
        
    
    // Update client pool on closing connection 
    ws.on("close", () => {
      newSocket.clients.forEach(function each(client) {     
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({connected: newSocket.clients.size}))
           }
        });
      })
        

    // Broadcast a message to all clients
    ws.on('message', function incoming(data) {
      let info = {
        data: data,
      }
      
      newSocket.clients.forEach(function each(client) {     
       if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(info));
          }
       });
      });


      
    });
})



// Get the chat id query and check it if it exists in sockets. If it doesn't exit
// Redirect to an error page, else redirect them to the chat room
app.get("/chat/:id", (req, res) => {
  let urlToRoom = req.params.id
  
  // If url path includes white spaces, remove them. 
  if (urlToRoom.includes(" ")) { 
    urlToRoom = urlToRoom.replace(/\s/, "")
  }


  let roomExist = sockets.find((element) => element[1] === urlToRoom)
  if (!roomExist) return res.redirect("/chat_not_found")

  return handle(req, res)
})

// Redirect all routes to nextjs if they are not about chats
app.get("*", (req, res) => {
  return handle(req, res)
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
      })
    }
     else {
      socket.destroy();
    }
  });

server.listen(8080);

})


