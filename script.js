const books = [
    { title: "The Great Gatsby", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/The%20Great%20Gatsby%20Book%20Cover.jpg", pdf: "https://TRASMIT.github.io/marketplace-website/E%20Books/the-great-gatsby.pdf" },
    { title: "The Odyssey by Homer", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/61hheEthD8L._SL1360_.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/The_Odyssey.pdf" },
    { title: "Dracula by Bram Stoker (1897 Edition)", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/61jl29eQPSL._UF1000%2C1000_QL80_.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/DRACULA%20by%20Bram%20Stoker.pdf" },
    { title: "Pride and Prejudice", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/pride-and-prejudice-original-imagrvgfyymy4h3n.webp", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/pride-and-prejudice.pdf" },
    { title: "Little Women", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/little-women-9781534462205_hr.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/little-women.pdf" },
    { title: "Frankenstein", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/frankenstein-9781982146177_hr.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/frankenstein.pdf" },
    { title: "The Wizard of Oz", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/b2a5b398a442f1776f00a09b8ed0d5c0.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/wonderfulwizardo00baumiala.pdf" },
    { title: "Alice in Wonderland", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/il_fullxfull.1519409460_3v5o.avif", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/alices-adventures-in-wonderland.pdf" },
    { title: "Sense and Sensibility", cover: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/Book%20Covers/510gZLQ4A3S.jpg", pdf: "https://raw.githubusercontent.com/TRASMIT/marketplace-website/main/E%20Books/sense-and-sensibility.pdf" }


];

const bookGrid = document.getElementById("bookGrid");

function displayBooks() {
    bookGrid.innerHTML = "";
    books.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <a href="book-details.html?index=${index}">
                <img src="${book.cover}" alt="${book.title} Cover">
            </a>
            <h3>${book.title}</h3>
        `;
        bookGrid.appendChild(bookElement);
    });
}

displayBooks();
