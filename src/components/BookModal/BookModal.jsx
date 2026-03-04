import { useEffect } from "react";

export default function BookModal({ book, onClose }) {
  useEffect(() => {
    const handleEsc = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>✖</button>
        <img src={book.imageUrl} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <button>Add to library</button>
      </div>
    </div>
  );
}