import Logo from "../Logo/Logo.jsx"
import css from "./RegisterForm.module.css"
import { FaEyeSlash } from "react-icons/fa";


const RegisterForm = () => {
    return (
        <div className={css.wrapper}>
            <Logo />
            <div className={css.container}>
                <h1 className={css.title}>Expand your mind, reading a book</h1>

            
                <div className={css.container_input}>
                    <input className={css.input}
                    id='name'
                    type="name" 
                    
                    required
                    placeholder="Name:" 
                    />
    
                <input className={css.input}
                    id='mail'
                    type="mail" 
                    autoFocus
                    required
                    placeholder="Mail:" 
                    />
                
                <input className={css.input}
                    id='password'
                    type="password" 
                    autoFocus
                    required
                    placeholder="Password:" 
                    />
                    </div>
                    <div>
                        <p><FaEyeSlash  className="Eye" size="24"/></p>
                    </div>
            </div>
            <div className={css.register}>
                <button className={css.button}>Registration</button>
                <p className={css.description}>Already have an account?</p>
            </div>
        </div>
        
    )
}
export default RegisterForm