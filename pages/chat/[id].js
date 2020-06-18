import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
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
    ws.addEventListener("message", (data) => {
        let newItems = items.slice(0,) // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update
        newItems.push(data.data)
        items.push(data.data)
        setMessages(newItems)
    })
    setWs(ws)
  }, [])




  return (
   <>
      <Info messages={messages}/>
      <Input value={val} change={change} log={sendData} />
   </>
  )
}

// Render the input and the submit button
function Input(props) {
    return (
        <div>
            <input value={props.value} onChange={props.change} />
            <button onClick={props.log}>Click me to change</button>
        </div>
    )
}


// Render all messages
function Info(props) {
    let messages = props.messages
    
    let lists = messages.map((element) => {
       return <List message={element} key={element.toString()}/>
    })
    console.log(messages, lists)
    return (
    <ul>
    {lists}
    </ul>
    )
    }

function List(props) {
    return <li>{props.message}</li>
}



export default Post