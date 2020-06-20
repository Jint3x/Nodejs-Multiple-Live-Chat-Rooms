import styles from "../styles/homepage.module.css"
import { useState } from "react"
import { red } from "../components/Create_Join.js"

// Create the ChatRoom
function Join() {
    const [link, setLink] = useState("")

    function redirect() {
      red(link)
    }


    return (
      <div className={styles.join} id="#join">
        <h1>Join a chatroom</h1>
      
      <div id={styles.roomj}>
        <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter a chat room to join" />
        <button onClick={redirect}>Join</button>

      </div>
      </div>
    )
}



export default Join