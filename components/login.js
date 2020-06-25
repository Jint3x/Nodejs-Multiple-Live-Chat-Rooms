import { useState } from 'react'
import username from "../styles/create_a_name.module.css"


function EnterUser(props) {
    const [user, setUser] = useState("")

    function update(e) {
        setUser(e.target.value)
    }

    function LogIn() {
        if (user === "") return // Do not log empty names


        document.cookie = `username=${user}`
        props.done()
    }



    return (
        <div id={username.main}>
            <div id={username.center}>
                <h1>Please login to continue</h1>
                <input type="text" value={user} placeholder="Ex: xx_Minecrafter_xx" onChange={update} />
                <br />
                <button onClick={LogIn} >Login</button>

            </div>


        </div>
    ) 
}

export default EnterUser