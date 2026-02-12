import Logo from "../Logo/Logo.jsx"
import css from "./LoginForm.module.css"
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const LoginForm = () => {
    return (
        <div className={css.wrapper}>
            <Logo />
            <div className={css.container}>
                <h1 className={css.title}>Expand your mind, reading a book</h1>

            
                <div className={css.container_input}>
                 <div>
                 <label for="email">Email</label>  
                <input className={css.input}
                autocomplete="email"
                    id='email'
                    type="email" 
                    autoFocus
                    required
                    placeholder="Email:" 
                    />
                </div>
                <div>
                <label for="password">Password</label>  
                <input className={css.input}
                autocomplete="new-password" // add автозаполнение пароля/
                    id='password'
                    type="password" 
                    autoFocus
                    required
                    placeholder="Password:" 
                    />
                    </div>
                    </div>
                    <div>
                        <p><FaEyeSlash  className="Eye" size="24"/></p>
                    </div>
            </div>
            <div className={css.register}>
                <button className={css.button}>Log In</button>
                    <Link className={css.login} to='/register'>Don’t have an account?</Link>
                
            </div>
        </div>
        
    )
}
export default LoginForm