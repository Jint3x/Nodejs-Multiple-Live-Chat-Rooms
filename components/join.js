import styles from "../styles/homepage.module.css"
import { useState } from "react"

// Create the ChatRoom
function Join() {
    const [link, setLink] = useState("")
    const [test, setTest] = useState(false)

    function redirect() {
      if (link === "") {
        return;
      }

      if (link.includes(" ")) {
        return
      }
      location.assign(`/chat/${link}`)
    }
 


    return (
      <div id={styles.join}>
        <h1>Join a chatroom</h1>
      
      <div id={styles.roomj}>
        <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter a chat room to join" />
        <button onClick={redirect}>Join</button>

      </div>
      </div>
    )
}



export default Join