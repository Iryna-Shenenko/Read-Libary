import Logo from "../Logo/Logo.jsx"
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx"
import UserPanel from "../UserPanel/UserPanel.jsx"
import css from "./Header.module.css"



const Header = () => {
    return (
        <div className={css.container_header} >
            <Logo />
            <div>
                <ul className={css.menu_header}>
                    <li className={css.item_header}>Home</li>
                    <li className={css.item_header}>My library</li>
                </ul>
            </div>
            <div><UserPanel />
            <LogOutBtn />
            </div>

        </div>
    )
}
export default Header