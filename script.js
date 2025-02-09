const books = [
    { title: "The Great Gatsby", pdf: "C:\Users\vasuk\Documents\E Books" },
    { title: "The Odessy by homer", pdf: "https://github.com/TRASMIT/marketplace-website/blob/main/E%20Books/The_Odyssey.pdf" },
    { title: "Book 3", pdf: "book3.pdf" }
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
