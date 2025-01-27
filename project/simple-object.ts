class UserProfile {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getFullAddress() {
    return `Requested User Name ${this.name} and his email ${this.email}`;
  }
}

const user = new UserProfile("Mohammad Mamun", "mamun@gmail.com", "1234");
