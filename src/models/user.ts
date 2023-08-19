import { Auth } from "firebase/auth";

export interface ISignUp{
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface ISignIn{
	email: string;
	password: string;
}

export interface ILogin{
	email: string;
	password: string;
	auth: Auth;
}