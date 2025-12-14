import css from "./Dashboard.module.css"

const Dashboard = () => {
    return (
        <div>
             <input className={css.input}
                    id='Book title'
                    type="Book title" 
                    autoFocus
                    required
                    placeholder="Book title:" 
                    />
                
        </div>
    )
}
 export default Dashboard