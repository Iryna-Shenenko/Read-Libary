import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx"
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx"
import css from "./RegisterPage.module.css"

const Registration = () => {
    return(
        <div className={css.registration}>
        <RegisterForm />
        <AdvantagesSection />
            
        </div>
       
    )
}
export default Registration