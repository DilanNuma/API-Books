var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class BooksController {
    constructor(domain) {
        this.domain = domain;
    }
    allBooks(token, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            // Headers
            const headers = {
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`
            };
            //Metodo
            const reqOptions = {
                method: "GET", //Metodo para traer informacion
                headers: headers
            };
            //Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/books?limit=${limit}&page=${page}`, reqOptions);
            if (!response.ok) {
                throw new Error(`Error al obtener libros: ${response.status}: ${response.statusText}`);
            }
            // Parseo (capturar información desde un formato y traducirla a otro especificado) json
            const responseBodyGetAllBooks = yield response.json();
            return responseBodyGetAllBooks;
        });
    }
    createBook(title, author, description, summary, publicationDate, token) {
        return __awaiter(this, void 0, void 0, function* () {
            //Body
            const newBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: publicationDate.value
            };
            // Headers
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            //Metodo
            const reqOptions = {
                method: "POST", //Metodo para crear
                headers: headers,
                body: JSON.stringify(newBook)
            };
            //Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/books`, reqOptions);
            if (!response.ok) {
                throw new Error(`Error al crear libro: ${response.status}: ${response.statusText}`);
            }
            const responseBodyResponseCreateBooks = yield response.json();
            return responseBodyResponseCreateBooks;
        });
    }
    //funcion para traer un libro por el id
    getById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            // Headers
            const headers = {
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`
            };
            // Metodo
            const reqOptions = {
                method: "GET", //Metodo para traer informacion
                headers: headers
            };
            // Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/books/${id}`, reqOptions);
            if (!response.ok) {
                throw new Error(`Error al obtener libro por ID: ${response.status}: ${response.statusText}`);
            }
            // Parseo (capturar información desde un formato y traducirla a otro especificado) json
            const responseBodyGetById = yield response.json();
            return responseBodyGetById;
        });
    }
    //Funcion para actualizar un libro por el id
    update(idCatche, title, author, description, summary, publicationDate, token) {
        return __awaiter(this, void 0, void 0, function* () {
            //Body
            const updatedBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: publicationDate.value
            };
            // Headers
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            // Metodo
            const reqOptions = {
                method: "PATCH", //Metodo para actualizar
                headers: headers,
                body: JSON.stringify(updatedBook)
            };
            // Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/books/${idCatche}`, reqOptions);
            if (!response.ok) {
                throw new Error(`Error al actualizar libro por ID: ${response.status}: ${response.statusText}`);
            }
            // Parseo (capturar información desde un formato y traducirla a otro especificado) json
            const responseBodyUpdateBook = yield response.json();
            return responseBodyUpdateBook;
        });
    }
    //Funcion para eliminar un libro por el id
    delete(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            //Header
            const headers = {
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`
            };
            // Metodo
            const reqOptions = {
                method: "DELETE", //Metodo para eliminar
                headers: headers
            };
            // Peticion Fetch
            const response = yield fetch(`${this.domain}/api/v1/books/${id}`, reqOptions);
            if (!response.ok) {
                throw new Error(`Error al eliminar libro por ID: ${response.status}: ${response.statusText}`);
            }
            // Parseo (capturar información desde un formato y traducirla a otro especificado) json
            const responseBodyDeleteBook = yield response.json();
            return responseBodyDeleteBook;
        });
    }
}
