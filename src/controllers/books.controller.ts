import { BodyResponseGetAllBooks, BodyRequestCreateBook, BodyResponseCreateBook, BodyResponseGetById, BodyRequestUpdateBook, BodyResponseDeleteBook } from "../models/books.model";

export class BooksController {
    public domain: string;
    
    constructor(domain: string) {
        this.domain = domain;
    }

    async allBooks(token: string, limit: number, page: number): Promise<BodyResponseGetAllBooks>{
        // Headers
        const headers: Record<string, string> = {
            "Accept": "*/*",
            "Authorization": `Bearer ${token}`
        };

        //Metodo
        const reqOptions: RequestInit = {
            method: "GET", //Metodo para traer informacion
            headers: headers
        };

        //Peticion Fetch
        const response: Response = await fetch(`${this.domain}/api/v1/books?limit=${limit}&page=${page}`, reqOptions);
        if(!response.ok){
            throw new Error(`Error al obtener libros: ${response.status}: ${response.statusText}`);
        }

        // Parseo (capturar información desde un formato y traducirla a otro especificado) json
        const responseBodyGetAllBooks: BodyResponseGetAllBooks = await response.json();

        return responseBodyGetAllBooks;
    }

    async createBook(title: HTMLInputElement, author: HTMLInputElement, description: HTMLInputElement, 
        summary: HTMLInputElement, publicationDate: HTMLInputElement, token: string): Promise<BodyResponseCreateBook> {
        //Body
        const newBook: BodyRequestCreateBook = {
            title: title.value,
            author: author.value,
            description: description.value,
            summary: summary.value,
            publicationDate: publicationDate.value
        }
        
        // Headers
        const headers: Record<string, string> = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };

        //Metodo
        const reqOptions: RequestInit = {
            method: "POST", //Metodo para crear
            headers: headers,
            body: JSON.stringify(newBook)
        };
        
        //Peticion Fetch
        const response: Response = await fetch(`${this.domain}/api/v1/books`, reqOptions);
        if(!response.ok){
            throw new Error(`Error al crear libro: ${response.status}: ${response.statusText}`);
        }

        const responseBodyResponseCreateBooks: BodyResponseCreateBook = await response.json();
        return responseBodyResponseCreateBooks;
    }

    //funcion para traer un libro por el id
    async getById (id: string, token: string): Promise<BodyResponseGetById>{ 
        // Headers
        const headers: Record<string, string> = {
            "Accept": "*/*",
            "Authorization": `Bearer ${token}`
        };
        
        // Metodo
        const reqOptions: RequestInit = {
            method: "GET", //Metodo para traer informacion
            headers: headers
        };
        
        // Peticion Fetch
        const response: Response = await fetch(`${this.domain}/api/v1/books/${id}`, reqOptions);
        if(!response.ok){
            throw new Error(`Error al obtener libro por ID: ${response.status}: ${response.statusText}`);
        }
        
        // Parseo (capturar información desde un formato y traducirla a otro especificado) json
        const responseBodyGetById: BodyResponseGetById = await response.json();
        
        return responseBodyGetById;
    }

    //Funcion para actualizar un libro por el id
    async update(idCatche: string, title: HTMLInputElement, author: HTMLInputElement, description: HTMLInputElement, 
        summary: HTMLInputElement, publicationDate: HTMLInputElement, token: string): Promise<BodyRequestUpdateBook> {
        //Body
        const updatedBook: BodyRequestCreateBook = {
            title: title.value,
            author: author.value,
            description: description.value,
            summary: summary.value,
            publicationDate: publicationDate.value
        }
        
        // Headers
        const headers: Record<string, string> = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        
        // Metodo
        const reqOptions: RequestInit = {
            method: "PATCH", //Metodo para actualizar
            headers: headers,
            body: JSON.stringify(updatedBook)
        };
        
        // Peticion Fetch
        const response: Response = await fetch(`${this.domain}/api/v1/books/${idCatche}`, reqOptions);
        if(!response.ok){
            throw new Error(`Error al actualizar libro por ID: ${response.status}: ${response.statusText}`);
        }
        
        // Parseo (capturar información desde un formato y traducirla a otro especificado) json
        const responseBodyUpdateBook: BodyRequestUpdateBook = await response.json();
        
        return responseBodyUpdateBook;
    }
    
    //Funcion para eliminar un libro por el id
    async delete(id: string, token: string): Promise<BodyResponseDeleteBook>{
        //Header
        const headers: Record<string, string> = {
            "Accept": "*/*",
            "Authorization": `Bearer ${token}`
        };
        
        // Metodo
        const reqOptions: RequestInit = {
            method: "DELETE", //Metodo para eliminar
            headers: headers
        };
        
        // Peticion Fetch
        const response: Response = await fetch(`${this.domain}/api/v1/books/${id}`, reqOptions);
        if(!response.ok){
            throw new Error(`Error al eliminar libro por ID: ${response.status}: ${response.statusText}`);
        }
        
        // Parseo (capturar información desde un formato y traducirla a otro especificado) json
        const responseBodyDeleteBook: BodyResponseDeleteBook = await response.json();
        
        return responseBodyDeleteBook;
    }

}