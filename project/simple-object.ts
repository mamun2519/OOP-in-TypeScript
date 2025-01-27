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
    return `Requested Email ${this.email} Is validate.`;
  }

  get userPassword(): string {
    return this.password;
  }
}

export const studentInfo = new StudentProfile("mamun@gmail.com", "Mamun2345");

console.log(studentInfo.);
