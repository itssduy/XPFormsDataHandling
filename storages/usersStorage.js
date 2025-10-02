// storages/usersStorage.js

const { name } = require("ejs");

// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};

    //this.id is just length
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio}) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio};
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio}) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  getUserByName(firstName, lastName) {
  if (firstName && lastName) {
    // Search for user with BOTH names matching
    return Object.values(this.storage).find(user => 
      user.firstName === firstName && user.lastName === lastName
    );
  }
  
  if (firstName) {
    // Search by first name only
    return Object.values(this.storage).find(user => 
      user.firstName === firstName
    );
  }
  
  if (lastName) {
    // Search by last name only
    return Object.values(this.storage).find(user => 
      user.lastName === lastName
    );
  }
  
  return null;
}

  getUserByName(firstName, lastName) {
    if (firstName && lastName) {
      return Object.values(this.storage).filter(user => 
        user.firstName === firstName && user.lastName === lastName
      );
    }
    
    if (firstName) {
      return Object.values(this.storage).filter(user => 
        user.firstName === firstName
      );
    }

    
    return [];
  }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
