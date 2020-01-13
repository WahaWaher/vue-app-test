class StorageBase {
  constructor(
    options = {
      name: 'vue-app-storage',
    }
  ) {
    this.name = options.name;
  }

  init() {
    try {
      let storage = localStorage.getItem(this.name);
      let parsedStorage = JSON.parse(storage);

      if (typeof parsedStorage !== 'object' || parsedStorage === null) {
        throw Error('Wrong storage');
      }
    } catch (e) {
      localStorage.setItem(
        this.name,
        JSON.stringify({
          users: [],
          signedIn: null,
        })
      );
    }
    return this.getStorage();
  }
  getSignedIn() {
    return this.getStorage().signedIn;
  }
  getUsers() {
    return this.getStorage().users;
  }
  getUserByEmail(email) {
    return this.getUsers().find(u => u.email && u.email === email);
  }
  getStorage() {
    return JSON.parse(localStorage.getItem(this.name));
  }
  signUpUser(user = { fullName: '', email: '', password: '' }) {
    let storage = this.getStorage();

    if (storage.users.some(u => u.email === user.email)) {
      return null;
    } else {
      storage.users.push(user);
    }

    localStorage.setItem(this.name, JSON.stringify(storage));

    return this.getUsers();
  }
  signInUser(user = { fullName: '', email: '', password: '' }) {
    let storage = this.getStorage();

    storage.signedIn = user;

    localStorage.setItem(this.name, JSON.stringify(storage));

    return this.getSignedIn();
  }
  isUserExists(email) {
    return this.getUsers().some(u => u.email === email);
  }
  clearStorage() {
    localStorage.removeItem(this.name);
    this.init();

    return this.getStorage();
  }
  logout() {
    let storage = this.getStorage();

    storage.signedIn = null;

    localStorage.setItem(this.name, JSON.stringify(storage));
  }
}

export default StorageBase;
