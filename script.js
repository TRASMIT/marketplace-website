const books = [
    { title: "The Great Gatsby", pdf: "https://github.com/TRASMIT/marketplace-website/blob/main/E%20Books/the-great-gatsby.pdf" },
    { title: "The Odessy by homer", pdf: "https://github.com/TRASMIT/marketplace-website/blob/main/E%20Books/The_Odyssey.pdf" },
    { title: "Dracula by Bram Stoker 1897 edition", pdf: "https://github.com/TRASMIT/marketplace-website/blob/main/E%20Books/DRACULA%20by%20Bram%20Stoker.pdf" };
    { title: "Pride and Prejudice", pdf: "https://github.com/TRASMIT/marketplace-website/blob/main/E%20Books/pride-and-prejudice.pdf" }
];
const bookGrid = document.getElementById("bookGrid");
function displayBooks() {
    bookGrid.innerHTML = "";
    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `<h3>${book.title}</h3><a href="${book.pdf}" target="_blank">Read Online</a>`;
        bookGrid.appendChild(bookElement);
    });
}
displayBooks();
