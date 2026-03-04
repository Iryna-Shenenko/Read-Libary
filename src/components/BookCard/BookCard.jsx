export default function BookCard({ book }) { 
    return (
        <li className="book-card">
            <img src={book.imageUrl} alt={book.title}  />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </li>   
    );
}   
