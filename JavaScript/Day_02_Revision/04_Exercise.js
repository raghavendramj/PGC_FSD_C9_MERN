function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.details = function () {
    return this.name + " " + this.author + " " + this.year;
  };
}

var book1 = new Book("Angels and Demons", "Dan Brown", 2014);
var book2 = new Book("The Immortals of Meluha", "Amish Tripathi", 2013);

console.log(book1.details());
console.log(book2.details());

console.log("********************* Using Dot Notation! *********************");
console.log(book1.name + " " + book1.author + " " + book1.year);
console.log(book2.name + " " + book2.author + " " + book2.year);
