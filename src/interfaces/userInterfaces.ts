
// Interface for saving user on db
export interface IUserData extends Document {
    // id: string,
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    active: boolean;
}

// Interface user from db
export interface IUserDataFromDB {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    active: boolean;
}

// Interface for register user
export interface IRegisterData {
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    password: string;
}

// LOGIN
export interface ILoginData {
    email: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IUserData;
    message: string;
}

// tokenInterface 'user'
export interface ITokenUserData {
    id: string;
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    role: string;
    active: boolean;
}
  