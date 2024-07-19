export interface BodyRequestLogin {
    email: string,
    password: string
}

export interface BodyResponseLogin {
    message: string,
    data: Record<string, string> //siempre que se tiene un objeto dentro del objeto que tiene un string y responde otro string
}

