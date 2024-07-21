var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserController {
    constructor(domain) {
        this.domain = domain;
    }
    //asincrona porque se va a realizar una peticion fetch
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // Body
            const userData = {
                email: email.value, //email = al valor del email en el campo, por eso se pone el .value
                password: password.value
            };
            // Header
            const headers = {
                'accept': '*/*',
                'Content-Type': 'application/json'
            };
            // Metodo
            const reqOptions = {
                method: 'POST', //Post para loguear
                headers: headers,
                body: JSON.stringify(userData)
            };
            // Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/auth/login`, reqOptions);
            // Validacion de errores
            if (!response.ok) {
                console.log(`Response Body: ${(yield response.json()).message}`);
                throw new Error(`Error: ${response.status}: ${response.statusText}`);
            }
            // Parseo (capturar información desde un formato y traducirla a otro especificado) json
            const responseBodyLogin = yield response.json();
            return responseBodyLogin;
        });
    }
}
