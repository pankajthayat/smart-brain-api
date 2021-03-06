const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission');
  }
  
  const hash = bcrypt.hashSync(password);
  console.log("entering : ", hash, email)
  console.log("entering : ")
    db.transaction(trx => {
      console.log("db : ",trx)
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        console.log("email: ")
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => {
      console.log("res : ", err)
      return res.status(400).json('unable to register: '+err)
    }
      )
    
}

module.exports = {
  handleRegister: handleRegister
};


