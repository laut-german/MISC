import * as bcrypt from "bcrypt";

export enum UserRoles {
  PERSONAL = "PERSONAL",
  BUSINESS = "BUSINESS",
}

export interface UserEntityProps {
  email: string;
  password: string;
  role: UserRoles;
  businessName?: string;
  country?: string;
  firstName?: string;
  lastName?: string;
}

export class UserEntity {
  private _email: string;
  private _password: string;
  private _role: UserRoles;
  private _businessName?: string;
  private _country?: string;
  private _firstName?: string;
  private _lastName?: string;

  private constructor(props: UserEntityProps) {
    this.email = props.email;
    this.role = props.role;
    this.businessName = props.businessName;
    this.country = props.country;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this._password = props.password;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (!value.includes("@")) {
      throw new Error("Invalid email format");
    }
    this._email = value;
  }

  get role(): UserRoles {
    return this._role;
  }

  set role(value: UserRoles) {
    this._role = value;
  }

  get businessName(): string | undefined {
    return this._businessName;
  }

  set businessName(value: string | undefined) {
    this._businessName = value;
  }

  get country(): string | undefined {
    return this._country;
  }

  set country(value: string | undefined) {
    this._country = value;
  }

  get firstName(): string | undefined {
    return this._firstName;
  }

  set firstName(value: string | undefined) {
    this._firstName = value;
  }

  get lastName(): string | undefined {
    return this._lastName;
  }

  set lastName(value: string | undefined) {
    this._lastName = value;
  }

  get password(): string {
    return this._password;
  }

  public static async create(props: UserEntityProps): Promise<UserEntity> {
    if (props.password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(props.password, saltOrRounds);
    props.password = hashedPassword;
    return new UserEntity(props);
  }

  toPrismaObject() {
    return {
      email: this._email,
      password: this._password,
      role: this._role,
      businessName: this._businessName,
      country: this._country,
      firstName: this._firstName,
      lastName: this._lastName,
    };
  }
}
