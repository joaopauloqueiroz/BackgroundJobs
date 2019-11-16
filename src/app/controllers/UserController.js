import Queue from '../lib/Queue'
module.exports = {
  async store ( req, res ) {
    //criar usuario
    const { name, email, password } = req.body
    const user = {
      name,
      email,
      password
    }
    //add job registration of queue
    Queue.add('RegistrationMail', { user })
    
    res.json(user)
  }
}