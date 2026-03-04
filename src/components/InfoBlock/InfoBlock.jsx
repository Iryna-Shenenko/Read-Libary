import {Link} from "react-router-dom";  

export default function InfoBlock() {   
    return ( 
        <div>
            <h3>Start your workout</h3>
            <p>Here you can find books that we recommend to read. You can also add your own book to the list by clicking the button below.</p>
            <Link to='/add-book'>Add your book</Link>
        </div>
    )
}