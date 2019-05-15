class User{
  constructor(email,password){
    this.email = email
    this.password = password
    this.inbox = []
  }
  sendMessage(rec){
    let msg = new Message()
    rec.inbox.push(msg)
  }
}

class Message{
  constructor(content){
    this.content = prompt('Enter message')
  }
}

user1 = new User ('you@you.com', 1234)
user2 = new User ('me@yme.com', 1234)


let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event){
  if(event.which == 13){
    sendMessage()
  }
})
// block = user2

function sendMessage(){
  let txt = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = txt.value
  user2inbox.appendChild(p)
  txt.value = ''
  txt.focus()

  // if(user2 == block){
  //   alert('U R SOOOO BLOCKED')
  //   p.parentNode.removeChild(p)
  // }
}

user1form.addEventListener('submit', function(event){
  event.preventDefault()
  sendMessage()
})
