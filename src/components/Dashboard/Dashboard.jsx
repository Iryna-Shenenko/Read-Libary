import css from "./Dashboard.module.css"

const Dashboard = () => {
    return (
        <div className={css.dashboard}>
            <div className={css.filter}>  
                <h3 className={css.title}>Filters</h3>

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
        <div className={css.container_button}>
        <button className={css.button}>To apply</button>
        </div>
        </div>

        <div className={css.workout}>
        <h4 className={css.title_workout}>Start your workout</h4>
        <ol>
          <li className={css.list}>Create a personal library</li>
          <li>Create your first workout</li>
        </ol>
      </div>
        </div>



    )
}
 export default Dashboard