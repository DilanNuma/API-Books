import { BodyRequestLogin, BodyResponseLogin }  from "../models/auth.model";

export class UserController {
    public domain: string;

    constructor(domain: string) {
        this.domain = domain;
    }
    //asincrona porque se va a realizar una peticion fetch
    async login(email: HTMLInputElement, password: HTMLInputElement): Promise<BodyResponseLogin> { //HTMLInputElement porque esos campos son de tipo input en el html
        // Body
        const userData: BodyRequestLogin = {
            email: email.value, //email = al valor del email en el campo, por eso se pone el .value
            password: password.value
        }
        // Header
        const headers: Record<string, string> = { //record string string porque en la api son de tipo string y son dos
            'accept': '*/*',
            'Content-Type': 'application/json'
        }
        // Metodo
        const reqOptions: RequestInit = {
            method: 'POST', //Post para loguear
            headers: headers,
            body: JSON.stringify(userData)
        }

        // Peticion Fetch
        const response = await fetch(`${this.domain}/api/v1/auth/login`, reqOptions);
        // Validacion de errores
        if (!response.ok) {
            console.log(`Response Body: ${(await response.json()).message}`);
            throw new Error(`Error: ${response.status}: ${response.statusText}`);
        }
        // Parseo (capturar información desde un formato y traducirla a otro especificado) json
        const responseBodyLogin: BodyResponseLogin = await response.json();

        return responseBodyLogin;
    }
}