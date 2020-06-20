import styles from "../styles/homepage.module.css"
import Create from "../components/create"
import Join from "../components/join"



export default function Home() {
  return  (
  <>
  <Welcome />
  <Join />
  <Create />
  </>
  )
}


function  Welcome() {
  return (
 
    <div id={styles.welcome}>
    <h1 id={styles.wc}>Welcome</h1>
    <h1 id={styles.to}>to</h1>
    <h1 id={styles.chat}>Chatify</h1>

    <div id={styles.redirect}>
    <h1 className={styles.redirs}><a href="#create">Create a chatroom</a></h1>
    <h1 className={styles.redirs}><a href="#join">Join a chatroom</a></h1>
    </div>
    
    </div>
  )
}






