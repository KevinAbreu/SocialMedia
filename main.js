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
