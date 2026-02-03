const bcrypt = require('bcryptjs')

const store = {
  users: []
}

async function findUserByEmail(email) {
  return store.users.find(u => u.email === email)
}

async function createUser({ name, email, password, role = 'student' }) {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(password, salt)
  const user = { _id: `${Date.now()}`, name, email, password: hashed, role }
  store.users.push(user)
  return user
}

async function matchPassword(user, enteredPassword) {
  return bcrypt.compare(enteredPassword, user.password)
}

module.exports = { findUserByEmail, createUser, matchPassword }
