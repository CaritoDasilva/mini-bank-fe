export class Client {
    name: string;
    password: string;
    email: string;
    rut: string;

    constructor(name: string, email: string, rut: string, password?: string) {
        this.name = name;
        this.email = email;
        this.rut = rut;
        this.password = !password ? '' : password;
    }
}

export interface IFormLogin extends Client {
    name: string;
    password: string;
}