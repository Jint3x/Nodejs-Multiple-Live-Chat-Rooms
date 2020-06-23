import styles from "../styles/homepage.module.css"
import { create } from "../components/Create_Join.js"
import { useState } from "react"


function Create() {
    const [value, setValue] = useState("");

    function update(e) {
        setValue(e.target.value)
    }

    function createRoom() {
      create(value)
    }


    return (
      <div className={styles.create} id="create">
      <h1>Create a chatroom</h1>
  
  
      <div id={styles.roomc}>
          <input value={value} onChange={update} placeholder="Enter a chat room to create" />
          <button onClick={createRoom}>Create</button>
  
        </div>
      </div>
    )
  }
// Fixed typo on create => enter a chat to join
// 
  
  export default Create