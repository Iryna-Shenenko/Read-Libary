export default function Filters() {
    return (
        <div>
            <h3>Filters:</h3>
            <input
                id='Book title'
                type="Book title" 
                autoFocus
                required
                placeholder="Book title:" 
            />
            <input
                id='The author'
                type="The author" 
                autoFocus
                required
                placeholder="The author:" 
            />
            <button>To apply</button>
        </div>
    )
}