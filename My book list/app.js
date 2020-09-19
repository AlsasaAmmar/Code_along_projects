//book class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//ui class: handle UI tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'bookone',
        author: 'John',
        isbn: '232342423',
      },
      {
        title: 'bookone',
        author: 'John',
        isbn: '232342423',
      }
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookTolist(book));

  }
  static addBookTolist(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = ` 
    <td> ${book.title}</td>
    <td> ${book.author}</td>
    <td> ${book.isbn}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);

  }
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

  }
}
// store class: handles storage

// Events : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// event :add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  //prevent actual submit
  e.preventDefault();
  //get form vlues
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //instantiate book 
  const book = new Book(title, author, isbn);
  // add book to UI
  UI.addBookTolist(book);

  //clear field 
  UI.clearFields();
}


)
// Event remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
});