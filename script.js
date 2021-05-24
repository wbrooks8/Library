// My Array
let myLibrary = [];

// Book Constructor 
function Book(title, author, numberofpages, read) {
    this.title = "Title: " + title
    this.author = "Author: " + author
    this.numberofpages = "Pages: " + numberofpages
    this.read = read
    this.info = function() {
        console.log(title, author, numberofpages, read)
    }
    

} 

//Add to library
function addBookToLibrary (title) {
  myLibrary.push(title);
}


//Add books from form to library 
function book2 () {
    let q = document.getElementById('title').value
    let w = document.getElementById('author').value
    let e = document.getElementById('numberofpages').value
    let r
    if (document.getElementById('haveYouRead').checked === true) {
        r = "read"
    }
    else {
        r = "notread"
    }
    const t = new Book(q, w, e, r)
    addBookToLibrary(t)
    document.getElementById('books').innerHTML=''
    displayTable(myLibrary)
    console.log(r)
}

//Pre-made book objects
const LOTR = new Book("LOTR", "JRR Tolkin", "9999", "read");
const harrypotter = new Book ("Harry", "Author", "756", "not read");

addBookToLibrary(LOTR);
addBookToLibrary(harrypotter);

//Adds objects to the HTML
function displayTable(books)
{
    var table = document.getElementById('books');

    for (var i = 0; i < books.length; ++i)
    {
        var book = books[i];

        let z = i;

        var box = document.createElement('div');

        box.classList.add("boxes")

        box.setAttribute("id", i);

        var properties = ['title', 'author', 'numberofpages', 'read'];

        let readbook = function () {
            if (book.read == "read") {
                let cell1 = document.createElement('button')
                cell1.classList.add("read")
                cell1.innerHTML = "Read"
                cell1.type="button"
                cell1.onclick = function () {
                    let myid = document.getElementById(z);
                    myLibrary[myid.id].read = "notread"
                    document.getElementById('books').innerHTML=''
                    displayTable(myLibrary);
                }
                box.appendChild(cell1)
            }

            else {
                let cell2 = document.createElement('button')
                cell2.classList.add("notread")
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
            var cell = document.createElement('p');

            cell.innerHTML = book[properties[j]];

            box.appendChild(cell);
        }

        let cell3 = document.createElement('button')

        cell3.innerHTML = "Delete"

        cell3.classList.add('delete')

        cell3.onclick = function() {
            let myid = document.getElementById(z);
            myLibrary.splice(myid.id, 1);
            document.getElementById('books').innerHTML=''
            displayTable(myLibrary);
        };

        box.appendChild(cell3)

        readbook();

        table.appendChild(box)
    }
}

//Submit button to add form data to array
document.getElementById('input2').addEventListener("click", function(ev) {
    ev.preventDefault();

    book2();

    document.getElementById('newbook').style.visibility='hidden';

    document.getElementById('bookcreate').reset();

})

//Allows cancel button to hide form
document.getElementById("input1").addEventListener("click", function(ev) {
    ev.preventDefault();

    document.getElementById('bookcreate').reset();

    document.getElementById('newbook').style.visibility='hidden';
})

document.getElementById('')
displayTable(myLibrary);




 