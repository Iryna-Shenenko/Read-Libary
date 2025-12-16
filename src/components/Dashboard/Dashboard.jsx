import css from "./Dashboard.module.css"

const Dashboard = () => {
    return (
        <div>
            <div>  
                <h3>Filters</h3>

             <input className={css.input}
                    id='Book title'
                    type="Book title" 
                    autoFocus
                    required
                    placeholder="Book title:" 
                    />

            <input className={css.input}
                    id='The author'
                    type="The author" 
                    autoFocus
                    required
                    placeholder="The author:" 
                    />
        
        <button>To apply</button>
        </div>

        <div className={css.workout}>
        <h4>Start your workout</h4>
        <ol>
          <li>Create a personal library</li>
          <li>Create your first workout</li>
        </ol>
      </div>
        </div>



    )
}
 export default Dashboard