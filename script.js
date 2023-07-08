let myLibrary = [];
const appBookDialog=document.querySelector('#appBookDialog');
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function showLibrary(){
    const container=document.querySelector('#container');
    container.innerHTML='';
    for(let i=0;i<myLibrary.length;i++){
        const book=document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-index',i);
        const title=document.createElement('h3');
        title.textContent=myLibrary[i].title;
        const author=document.createElement('h3');
        author.textContent=myLibrary[i].author;
        const pages=document.createElement('h3');
        pages.textContent=myLibrary[i].pages;
        const read=document.createElement('h3');
        read.textContent=myLibrary[i].read;
        const remove=document.createElement('button');
        remove.classList.add('remove');
        remove.textContent='Remove';
        remove.addEventListener('click',removeBook);
        const readButton=document.createElement('button');
        readButton.classList.add('readButton');
        readButton.textContent='read';
        readButton.addEventListener('click',readBook);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(remove);
        book.appendChild(readButton);
        container.appendChild(book);
    }
}
function removeBook(e){
    const index=e.target.parentNode.getAttribute('data-index');
    myLibrary.splice(index,1);
    showLibrary();
}
function readBook(e){
    const index=e.target.parentNode.getAttribute('data-index');
    // console.log(myLibrary[index])
    if(myLibrary[index].read==='true'){
        myLibrary[index].read='false';
    }else{
        myLibrary[index].read='true';
    }
    showLibrary();
}



function addBookToLibrary() {
  // do stuff here
    console.log("addBookToLibrary");
    let title = document.getElementById("formTitle").value;
    let author = document.getElementById("formAuthor").value;
    let pages = document.getElementById("formPages").value;
    let read = document.getElementById("formRead").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showLibrary();
}


let newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
myLibrary.push(newBook);
showLibrary();

const formTitle=document.querySelector('#formTitle');
const formAuthor=document.querySelector('#formAuthor');
const formPages=document.querySelector('#formPages');
const formRead=document.querySelector('#formRead');
const formSubmit=document.querySelector('#formSubmit');
const form=document.querySelector('#form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("formSubmit");

    addBookToLibrary();
    appBookDialog.close();
    formTitle.value='';
    formAuthor.value='';
    formPages.value='';
    formRead.checked=false;
    
});