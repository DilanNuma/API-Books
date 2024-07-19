export class CardTemplateController {
    constructor(containerBooks) {
        this.containerBooks = containerBooks;
    }
    //funcion para crear una card de libro
    render(id, author, title, description, summary, publicationDate) {
        const figure = document.createElement('figure');
        figure.classList.add('card', 'card-4');
        const h2 = document.createElement('h2');
        h2.classList.add('card-title', 'text-center');
        h2.textContent = title;
        figure.appendChild(h2);
        const h4 = document.createElement('h4');
        h4.classList.add('card-title', 'text-center');
        h4.textContent = `Autor: ${author}`;
        figure.appendChild(h4);
        const figcation = document.createElement('figcaption');
        figcation.classList.add('card-body', 'bg-light', 'text-dark');
        figure.appendChild(figcation);
        const h5 = document.createElement('h5');
        h5.classList.add('card-title', 'text-center');
        h5.textContent = `Descripción: ${description}`;
        figcation.appendChild(h5);
        const p = document.createElement('p');
        p.classList.add('card-text', 'text-center');
        p.textContent = summary;
        figcation.appendChild(p);
        const h6 = document.createElement('h6');
        h6.classList.add('card-subtitle', 'text-center');
        h6.textContent = `Fecha de publicación: ${publicationDate}`;
        figcation.appendChild(h6);
        const div = document.createElement('div');
        div.classList.add('d-flex');
        const btnEdit = document.createElement("button");
        btnEdit.classList.add('btn', 'btn-warning');
        btnEdit.textContent = 'Editar';
        btnEdit.type = "button";
        btnEdit.dataset.id = id;
        const btnDelete = document.createElement("button");
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.textContent = 'Eliminar';
        btnDelete.type = "button";
        btnDelete.dataset.id = id;
        div.appendChild(btnEdit);
        div.appendChild(btnDelete);
        figcation.appendChild(div);
        this.containerBooks.appendChild(figure);
    }
}
