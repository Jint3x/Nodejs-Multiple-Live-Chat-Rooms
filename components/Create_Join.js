
// Upon trying to join a chatroom if it's empty do nothing, else
// redirect to the chatroom URL, if the chat room doesn't exist it will be handled
// by the server and redirected towards an error page
export const red = function redirect(data) {
    if (data === "") {
      return;
    }

    location.assign(`/chat/${data}`)
  }



// Send request to the server with data, the server then creates a chatroom based on
// what name has been sent with the data
  export const create = function create(data) {
        fetch("http://localhost:3000/chat_creation/create", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: data
          })
        })

        location.assign(`/chat/${data}`)
      }
  
