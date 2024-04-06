function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    let str = `${this.title} by ${this.author}, ${this.pages} pages, `;
    if(this.read) {
      str += 'read';
    } else {
      str += 'not read yet';
    }
    return str;
  }
}

let newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(newBook.info());