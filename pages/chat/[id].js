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

  function send() {
      ws.send(val)
  }

  console.log(messages)

  

// Connect to webhook upon rendering the page and add in into a state so you can access it later
  useEffect(() => {
    let items = []
    let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    let ws =  new WebSocket("ws://localhost:8080/"+id);
    ws.addEventListener("message", (data) => {
        items.push(data.data)
        console.log(items)
        setMessages(items)
    })
    setWs(ws)
  }, [])




  return (
   <>
      <Info messages={messages}/>
      <Input value={val} change={change} log={send} />
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
return <h1>{props.messages}</h1>
}

export default Post