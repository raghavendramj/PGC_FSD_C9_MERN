// DONE 1: Wrote a function to create book details in the DB. You can mock this functionality by using a setTimeout() method.
let bookDetails = (callback) => {
    let bookId = null;
    let bookName = null;
    let bookAuthor = null;
    // creating book details in DB
    setTimeout(() => {
        bookId = 1;
        bookName = "Angels and Demons"
        bookAuthor = "Dan Brown"
        callback(bookId, bookName, bookAuthor);
    }, 1000);
}

// DONE 2: Wrote a callback function which prints the book details to the console.
let printBookDetails = (bookId, bookName, bookAuthor) => {
    console.log(`Book id is: ${bookId}`);
    console.log(`The name of the book is: ${bookName}`);
    console.log(`The author of ${bookName} is ${bookAuthor}`);
}

// DONE 3: Invoked first function while passing in the callback function.
bookDetails(printBookDetails);