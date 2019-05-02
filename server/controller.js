module.exports = {
  getUsers : (req, res)=> {
    console.log(`getUsers was fired`)
    const db = req.app.get('db')
    db.get_users().then((data)=>{
      res.status(200).send(data)
    })
  }
}