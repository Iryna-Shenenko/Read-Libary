
import BookCard from "../BookCard/BookCard.jsx";
import BookModal from "../BookModal/BookModal.jsx";
import { useState, useEffect } from "react";
const LIMIT = 8;

export default function RecommendedBooks() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
        try { 
      const res = await fetch(
        `https://readjourney.b.goit.study/api/books/recommended?page=${page}&limit=${LIMIT}`
      );

      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }
      const data = await res.json();
      console.log("API DATA:", data);

      
      setBooks(data.books || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
        console.error("FETCH ERROR:", error);
    }
}

    fetchBooks();
  }, [page]);

  return (
    <section>
      <h1>Recommended books</h1>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          ←
        </button>

        <span>{page}</span>

        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
          →
        </button>
      </div>

      <ul className="book-list">
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </ul>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </section>
  );
}