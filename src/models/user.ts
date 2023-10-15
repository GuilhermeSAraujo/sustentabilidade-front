export interface IFSignUp{
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface IFSignIn{
	email: string;
	password: string;
}

export interface ILogin{
	email: string;
	password: string;
}

export interface ISignUp{
	name: string;
	email: string;
	password: string;
}

export interface User{
	email: string;
}