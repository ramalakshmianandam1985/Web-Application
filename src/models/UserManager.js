const User = require('./User');
 
class UserManager {
  constructor() {
    this.currentUser = null;
    this.users = [];
  }
 
  createUser(username, password) {
    const user = new User(username, password);
    this.users.push(user);
    return user;
  }
 
  loginUser(username, password) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return user;
    }
    return null;
  }
 
  changePassword(username, newPassword) {
    const user = this.users.find(u => u.username === username);
    if (user) {
      user.password = newPassword;
      return user;
    }
    return null;
  }
}
 
module.exports = UserManager;