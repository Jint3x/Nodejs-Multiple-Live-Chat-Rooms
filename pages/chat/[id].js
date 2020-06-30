import { useEffect, useState, lazy, Suspense } from 'react'
import styles from "../../styles/chatroom.module.css"
import dynamic from 'next/dynamic'

const EnterUser = dynamic(() => import('../../components/login.js'))


function Post() {
    const [valid, setValid] = useState(false)

    // Check if they have a username, if not ask them for one
    useEffect(() => {
      if (document.cookie.split(";").some(element => element.includes("username"))) {
        setValid(true)
      }
    })

    function changeValidation() {
        setValid(true)
    }

  
    // If the client has an username cookie use it to connect to the chat, otherwise
    // give them a special forum to create their username and THEN connect them to the chat
    return (
        <>
        { valid && (
            <>
            <Header />
            <Main/>
            </>
        )}

        { !valid && (<EnterUser done={changeValidation}/>)}     
        </>
          )
}




function Header() {
    const [path, setPath] = useState("")

    useEffect(() => {
        let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
        setPath(id.replace(/%20/gi, " "))
    }, [])

    return (
    <h1 id={styles.heading}>Chat Room: {path}</h1>
    )
}




function Main() {
    const [ws, setWs] = useState("")
    const [messages, setMessages] = useState([])
    const [connected, setConnected] = useState(0)
    const [user, setUser] = useState("")
    const [theme, setTheme] = useState("black")



    // On new theme being clicked
    function changeTheme(data) {
        setTheme(data)
     }
 
  
    // Send a message (to the server) to be broadcasted to all connected clients 
    function sendData(val) {
        if (val === "") return;
        ws.send(`${user}: ${val}`)
    }

  
 
  
  // Connect to webhook upon rendering the page and add in into a state so you can access it later
    useEffect(() => {
    
      let items = [] // This saves ALL messages
      let id = location.pathname.split("/")[location.pathname.split("/").length - 1].replace(/%20/gi, "");
      let ws =  new WebSocket(location.origin.replace("http", "ws").replace("3000", "8080")+ "/" +id);
      let validUser = document.cookie.split(";").find(element => element.includes("username")).split("=")[1];

      ws.addEventListener("message", addItems) 


      ws.addEventListener("open", () => {
          ws.send(`${validUser} has joined the chat`)
      })

      function addItems(info) {
        let data = JSON.parse(info.data)
    
        // Catch a message from the server containing the updated number of members
        // and update it
        if (data.connected !== undefined) {
            setConnected(data.connected)
            return;
        }

        items.unshift(data.data)

        setMessages(items.slice(0)) // Create a new arr out of the old one so it can update the list of messages
        setUser(validUser)
     }
    

      window.addEventListener("unload", () => {
          ws.send(`${validUser} has left the chat`)
      })


      setWs(ws) // set the WebSocket to be global
     
    }, [])
  
    return (
        <>
        <MessageLogger messages={messages} theme={theme}/>
        <MessageSender log={sendData} />
        <MemberList clients={connected}/>
        <ThemeChanger changeTheme={changeTheme}/>
        </>
    )
}

  




// Loads all incoming messages in the chat
function MessageLogger(props) {

    let messages = props.messages
    let listMessages = messages.map(element => {
        return <Message data={element} key={`${element.toString()}${Math.floor(Math.random() * 100000)}`} />
    })


    return (
        <div id={styles.msgLogger}  className={styles[props.theme]}>
            <ul id={styles.messages}>
            {listMessages}
            </ul>    
        </div>
    )
}

function Message(props) {
    return <li>{props.data}</li>
}






// Render the input and the submit button
function MessageSender(props) {
    const [val, setVal] = useState("");

    function update(e) {
        setVal(e.target.value)
    }

    // Sends the input to the main component which then resends it to all clients
    function sendMessage() {
        props.log(val)
        setVal("")
    }

    // Runs when user presses enter on the input (instead of clicking send message btn)
    function sendMessageWithEnter(e) {

        if (e.which === 13 || e.keyStroke === 13) {
            setVal("")
           return props.log(val)     
        }

    }

    return (
        <div id={styles.sendMessages}>

            <input value={val} onChange={update} onKeyPress={sendMessageWithEnter} />
            <button onClick={sendMessage}>Send</button>

        </div>
    )
}


// The number of connected members
function MemberList(props) {

    console.log("asd")

    return (
        <div id={styles.connected}>
      <h1>Connected Members: {props.clients}</h1>
      </div>
    ) 
}


// The div containing all styles
function ThemeChanger(props) {
    const themes = ["white", "black", "red", "pink", "green", "yellow"]

    let themeHolders = themes.map(element => {
        return <ThemeBlock style={element} key={element.toString()} changeTheme={props.changeTheme}/>
    })

    return (
        <div id={styles.themeContainer}>
            <h1>Choose Your Theme!</h1>
            <div id={styles.holder}>
            {themeHolders}
            </div>
        </div>
    ) 
}

// Creates all small block pieces in the themes
function ThemeBlock(props) {
    let themeStyle = props.style

    return ( // Run a function to change the theme style
        <div id={styles[themeStyle]} className={styles[themeStyle]} onClick={() => props.changeTheme(themeStyle)} >
            <h1>Text</h1>
        </div>
    )
}




export default Post