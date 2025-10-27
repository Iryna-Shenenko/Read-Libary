import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx"
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx"
import css from "./Registration.module.css"

const Registration = () => {
    return(
        <div className={css.container}>
        <AdvantagesSection />
        <RegisterForm />
            
        </div>
       
    )
}
export default Registration