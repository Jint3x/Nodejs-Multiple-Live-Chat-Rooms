import { useEffect, useState } from 'react'
import styles from "../../styles/chatroom.module.css"




function Post(req, res) {
    return (
        <>
        <Header />
        <Main />
        </>
    )
}


function Header() {
    const [path, setPath] = useState("")
    useEffect(() => {
        let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
        setPath(id)
    }, [])


    return (
    <h1 id={styles.heading}>Chat Room: {path}</h1>
    )
}




function Main() {
    const [val, setVal] = useState("")
    const [ws, setWs] = useState("")
    const [messages, setMessages] = useState([])

    function change(e) {
        setVal(e.target.value)
    }
  
    function sendData() {
        ws.send(val)
        setVal("")
    }
  
  
  // Connect to webhook upon rendering the page and add in into a state so you can access it later
    useEffect(() => {
      let items = [] // This saves ALL messages
      let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
      let ws =  new WebSocket("ws://localhost:8080/"+id);

      ws.addEventListener("message", addItems) 


     function addItems(data) {
        let newItems = items.slice(0,) // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update
          newItems.push(data.data)
          items.push(data.data)
          setMessages(newItems)
     }
  
      setWs(ws) // set the WebSocket to be global
     
    }, [])
  

    return (
        <>
        <MessageLogger />
        <MessageSender value={val} change={change} log={sendData} />
        <MemberList />
        </>
    )
}



function MessageLogger() {
    return (
        <div id={styles.msgLogger}>

        </div>
    )
}

// Render the input and the submit button
function MessageSender(props) {
    return (
        <div>
            <input value={props.value} onChange={props.change} />
            <button onClick={props.log}>Click me to change</button>
        </div>
    )
}


function MemberList() {
    return <h1>Test Section</h1>
}





export default Post