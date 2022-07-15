let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + author + ", " + pages + ", " + read); 
    }
}

const theHobbit = new Book("The Hobbit", " by J.R.R Tolkien ", "295 Pages", "has read ")

console.log(theHobbit.info());


function addBookToLibrary() {

}