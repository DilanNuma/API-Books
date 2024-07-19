//index.ts
import { UserController } from "./controllers/controllers.users.js";

const URL_USERS: string = "http://190.147.64.47:5155";
const form = document.querySelector("form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", async (e:Event) => {
    e.preventDefault();
    //variable para instanciar la clase, la variable con inicial minuscula para diferenciar del nombre de la clase
    const crudUsers = new UserController (URL_USERS);
    const respuesta = await crudUsers.login(email, password);

    const token: string | null = respuesta.data.token;

    if (token) {
        console.log(`Login exitoso ${token}`);
    
        localStorage.setItem("authToken", token);
        window.location.href = "books.html";
    } else {
        alert("Error al iniciar sesión");
    }

    form.reset();
});