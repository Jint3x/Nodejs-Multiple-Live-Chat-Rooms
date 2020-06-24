import styles from "../styles/missing_room.module.css"
import { create, red } from "../components/Create_Join"
import { useState } from "react"


function Missing() {

    return (
        <>
        <div id={styles.missing}>
            <img src="https://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png"></img>
            <h1>We are sorry but room you tried to enter doesn't exist!</h1>
        </div>
        <Create />
        </>
    )
}

function Create() {
    const [reg, setReg] = useState("")
    const [join, setJoin] = useState("")

  
    function roomCreate() {
        create(reg)
    }


    function roomJoin() {
        red(join)
    }


    return (
        <div id={styles.create}>
          <div>
              <input value={reg} onChange={(e) => setReg(e.target.value)} placeholder="Create a chat room"/>
              <button onClick={roomCreate}>Create</button>
          </div>

          <div>
          <input value={join} onChange={(e) => setJoin(e.target.value)} placeholder="Join a chat room"/>
              <button onClick={roomJoin}>Join</button>

          </div>
        </div>
    )
}







export default Missing