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

export const user = new UserProfile(
  "Mohammad Mamun",
  "mamun@gmail.com",
  "1234"
);

class StudentProfile {
  readonly id: string;
  public email: string;
  private password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.id = "1234";
  }

  userEmailValidate() {
    return `Rl ${this.email}`;
  }
}

export const user = new StudentProfile("Mohammad Mamun", "mamun@gmail.com");
