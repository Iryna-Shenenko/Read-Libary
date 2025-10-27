import Logo from "../Logo/Logo.jsx"
import css from "./RegisterForm.module.css"


const RegisterForm = () => {
    return (
        <div className={css.wrapper}>
            <Logo />
            <div className={css.container}>
                <h1 className={css.title}>Expand your mind, reading a book</h1>

            <label htmlFor="Name" className={css.label}>Name</label>
                <div className={css.container_input}>
                    <input 
                    id='name'
                    type="name" 
                    autoFocus
                    required
                    placeholder="Enter your name" 
                    />
                </div>
                <label>Mail</label>
                <input 
                    id='mail'
                    type="mail" 
                    autoFocus
                    required
                    placeholder="Enter your mail" 
                    />
                <label>Password</label>
                <input 
                    id='password'
                    type="password" 
                    autoFocus
                    required
                    placeholder="Enter your password" 
                    />
            </div>
            <div>
                <button>Registration</button>
                <p>Already have an account?</p>
            </div>
        </div>
        
    )
}
export default RegisterForm