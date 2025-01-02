// src/components/Client/BookManager.tsx
"use client";

import { useState } from "react";

interface Book {
  id: number;
  name: string;
}

export default function BookManager({ books }: { books: Book[] }) {
  const [bookList, setBookList] = useState(books);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const addBook = (name: string) => {
    const newBook = { id: bookList.length + 1, name };
    setBookList((prev) => [...prev, newBook]);
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <ul className="book-list">
        {bookList.map((book) => (
          <li
            key={book.id}
            className={`book-item ${
              favorites.includes(book.id) ? "favorite" : ""
            }`}
          >
            {book.name}
            <button onClick={() => toggleFavorite(book.id)}>
              {favorites.includes(book.id) ? "Unfavorite" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>
      <div className="add-book-form">
        <input
          type="text"
          placeholder="Enter book name"
          id="new-book-input"
        />
        <button
          onClick={() => {
            const input = document.getElementById(
              "new-book-input"
            ) as HTMLInputElement;
            if (input.value.trim()) {
              addBook(input.value.trim());
              input.value = "";
            }
          }}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}
