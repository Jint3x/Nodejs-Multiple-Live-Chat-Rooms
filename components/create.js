import styles from "../styles/homepage.module.css"
import { useState } from "react"


function Create() {
    const [value, setValue] = useState("");

    function update(e) {
        setValue(e.target.value)
    }

    function createRoom() {
      fetch("http://localhost:3000/chat_creation/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: value
        })
      })
    }


    return (
      <div id={styles.create}>
      <h1>Create a chatroom</h1>
  
  
      <div id={styles.roomc}>
          <input value={value} onChange={update} placeholder="Enter a chat room to join" />
          <button onClick={createRoom}>Create</button>
  
        </div>
      </div>
    )
  }

  
  export default Create