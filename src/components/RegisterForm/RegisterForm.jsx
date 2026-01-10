import Logo from "../Logo/Logo.jsx"
import css from "./RegisterForm.module.css"
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


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
                <div className={css.input_icon_password}> 
                <input className={css.input}
                    id='password'
                    type="password" 
                    autoFocus
                    required
                    placeholder="Password:" 
                    />
                        <svg className={css.icon}><FaEyeSlash  className="Eye" size="24"/></svg>
                        </div>
                    </div>
            </div>
            <div className={css.register}>
                <button className={css.button}>Registration</button>
                    <Link className={css.login} to='/login'>Already have an account?</Link>
                
            </div>
        </div>
        
    )
}
export default RegisterForm