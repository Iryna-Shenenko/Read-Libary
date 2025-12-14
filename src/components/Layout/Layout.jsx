import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
            </>
    )
}
export default Layout;