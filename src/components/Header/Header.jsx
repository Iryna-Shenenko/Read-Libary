import Logo from "../Logo/Logo.jsx"
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx"
import UserPanel from "../UserPanel/UserPanel.jsx"
import css from "./Header.module.css"
import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <div className={css.container_header} >
            <Logo />
            <div className={css.menu}>
                <ul className={css.menu_header}>
                    <li >
                        <NavLink
                        to="/"
                        className={({isActive}) =>
                        isActive
                    ? `${css.item_header} ${css.active}`
                    : css.item_header
                }>
                    Home
                </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/library"
                        className={({isActive}) =>
                        isActive
                    ? `${css.item_header} ${css.active}`
                    : css.item_header
                }> 
                My Library
                </NavLink>
                    </li>
                </ul>
            </div>
            <div className={css.user_panel}><UserPanel />
            <LogOutBtn />
            </div>

        </div>
    )
}
export default Header