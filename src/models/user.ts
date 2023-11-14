export interface IFSignUp{
	name: string;
	document: string;
	birthdate: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface IFSignIn{
	email: string;
	password: string;
}

export interface ISignIn{
	email: string;
	password: string;
}

export interface ISignUp{
	name: string;
	document: string;
	birthdate: string;
	email: string;
	password: string;
}

export interface User{
	name: string;
	document: string;
	birthdate: string;
	email: string;
}

export interface UserGetResult{
	id: string;
	name: string;
	email: string;
	token: string;
}