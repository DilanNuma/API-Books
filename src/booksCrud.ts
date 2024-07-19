import { CardTemplateController } from "./controllers/cardTemplate.controller.js";
import { BooksController } from "./controllers/books.controller.js";

const URL_BOOKS: string = "http://190.147.64.47:5155";
const btnLogout = document.getElementById("btn-logout") as HTMLButtonElement;
const prevPage = document.getElementById("prev-page") as HTMLButtonElement;
const nextPage = document.getElementById("next-page") as HTMLButtonElement;
const token = localStorage.getItem("authTtoken");
let currentPage: number = 1;
const limit: number = 10;

btnLogout.addEventListener("click", (e: Event) => {
    localStorage.removeItem("authTtoken");
    window.location.href = "./index.html";
});

if(!token) {
    alert("Authentication token is missing. Please log in now.");
    window.location.href = "./index.html";
} else {
const containerBooks = document.querySelector(".container-books") as HTMLDivElement;
const form = document.querySelector("form") as HTMLFormElement;
const title = document.getElementById("title") as HTMLInputElement;
const author = document.getElementById("author") as HTMLInputElement;
const description = document.getElementById("description") as HTMLInputElement;
const summary = document.getElementById("summary") as HTMLInputElement;
const publicationDate = document.getElementById("publication-date") as HTMLInputElement;
let idCatche: string | undefined;

const cardTemplateController = new CardTemplateController(containerBooks);

prevPage.addEventListener("click", () => {

});

async function allBooks(limit: number, currentPage: number){
    const crudBooks = new BooksController(URL_BOOKS);

    try {
        const response = await crudBooks.allBooks(token as string, limit, currentPage);
        console.log(`Respuesta de allbooks: ${response}`);
        const books = response.data;

        containerBooks.innerHTML = "";

        for(const book of books){
            cardTemplateController.render(book.id, book.title, book.author, book.description, book.summary, book.publicationDate);
        }
    } catch (error) {
        console.error(error);
    }
}
}