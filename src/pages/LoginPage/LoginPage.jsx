import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx"
import LoginForm from "../../components/LoginForm/LoginForm.jsx"
import css from "../LoginPage/LoginPage.module.css"


const LoginPage = () => {
    return(
        <div className={css.loginForm}>
        <LoginForm />
        <AdvantagesSection />
            
        </div>
       
    )
}

export default LoginPage



