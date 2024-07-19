var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CardTemplateController } from "./controllers/cardTemplate.controller.js";
import { BooksController } from "./controllers/books.controller.js";
const URL_BOOKS = "http://190.147.64.47:5155";
const btnLogout = document.getElementById("btn-logout");
const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");
const token = localStorage.getItem("authTtoken");
let currentPage = 1;
const limit = 10;
btnLogout.addEventListener("click", (e) => {
    localStorage.removeItem("authTtoken");
    window.location.href = "./index.html";
});
if (!token) {
    alert("Authentication token is missing. Please log in now.");
    window.location.href = "./index.html";
}
else {
    const containerBooks = document.querySelector(".container-books");
    const form = document.querySelector("form");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const description = document.getElementById("description");
    const summary = document.getElementById("summary");
    const publicationDate = document.getElementById("publication-date");
    let idCatche;
    const cardTemplateController = new CardTemplateController(containerBooks);
    prevPage.addEventListener("click", () => {
    });
    function allBooks(limit, currentPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const crudBooks = new BooksController(URL_BOOKS);
            try {
                const response = yield crudBooks.allBooks(token, limit, currentPage);
                console.log(`Respuesta de allbooks: ${response}`);
                const books = response.data;
                containerBooks.innerHTML = "";
                for (const book of books) {
                    cardTemplateController.render(book.id, book.title, book.author, book.description, book.summary, book.publicationDate);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
