// My Array
let myLibrary = [];

// Book Constructor 
function Book(title, author, numberOfPages, read) {
    this.title = "Title: " + title
    this.author = "Author: " + author
    this.numberOfPages = "Pages: " + numberOfPages
    this.read = read
    this.info = function() {
        console.log(title, author, numberOfPages, read)
    }
    

} 

//Add to library
function addBookToLibrary (title) {
  myLibrary.push(title);
}


//Add books from form to library 
function bookToLibrary () {
    let titleValue = document.getElementById('title').value
    let authorValue = document.getElementById('author').value
    let pagesValue = document.getElementById('numberOfPages').value
    let readOrNot
    if (document.getElementById('haveYouRead').checked === true) {
        readOrNot = "read"
    }
    else {
        readOrNot = "notRead"
    }
    const myTitle = new Book(titleValue, authorValue, pagesValue, readOrNot)
    addBookToLibrary(myTitle)
    document.getElementById('books').innerHTML=''
    displayTable(myLibrary)
}

//Pre-made book objects
const LOTR = new Book("LOTR", "JRR Tolkin", "9999", "read");
const harryPotter = new Book ("Harry", "Author", "756", "not read");

addBookToLibrary(LOTR);
addBookToLibrary(harryPotter);

//Adds objects to the HTML
function displayTable(books)
{
    let table = document.getElementById('books');

    for (var i = 0; i < books.length; ++i)
    {
        let book = books[i];

        let z = i;

        let box = document.createElement('div');

        box.classList.add("boxes")

        box.setAttribute("id", i);

        let properties = ['title', 'author', 'numberOfPages', 'read'];

        let readBook = function () {
            if (book.read == "read") {
                let cell1 = document.createElement('button')
                cell1.classList.add("read")
                cell1.innerHTML = "Read"
                cell1.type="button"
                cell1.onclick = function () {
                    let myid = document.getElementById(z);
                    myLibrary[myid.id].read = "notRead"
                    document.getElementById('books').innerHTML=''
                    displayTable(myLibrary);
                }
                box.appendChild(cell1)
            }

            else {
                let cell2 = document.createElement('button')
                cell2.classList.add("notRead")
                cell2.innerHTML = "Not Read"
                cell2.type="button"
                cell2.onclick = function () {
                    let myid = document.getElementById(z);
                    myLibrary[myid.id].read = "read"
                    document.getElementById('books').innerHTML=''
                    displayTable(myLibrary);
                 }
                box.appendChild(cell2)
            }
        
        }

        for (var j = 0; j < 3; ++j)
        {  
            let cell = document.createElement('p');

            cell.innerHTML = book[properties[j]];

            box.appendChild(cell);
        }

        let deleteButton = document.createElement('button')

        deleteButton.innerHTML = "Delete"

        deleteButton.classList.add('delete')

        deleteButton.onclick = function() {
            let myid = document.getElementById(z);
            myLibrary.splice(myid.id, 1);
            document.getElementById('books').innerHTML=''
            displayTable(myLibrary);
        };

        box.appendChild(deleteButton)

        readBook();

        table.appendChild(box)
    }
}

//Submit button to add form data to array
document.getElementById('input2').addEventListener("click", function(ev) {
    ev.preventDefault();

    bookToLibrary();

    document.getElementById('newBook').style.visibility='hidden';

    document.getElementById('bookCreate').reset();

})

//Allows cancel button to hide form
document.getElementById("input1").addEventListener("click", function(ev) {
    ev.preventDefault();

    document.getElementById('bookCreate').reset();

    document.getElementById('newBook').style.visibility='hidden';
})

document.getElementById('')
displayTable(myLibrary);




 