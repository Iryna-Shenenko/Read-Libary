import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RecommendedPage from "../../pages/RecommendedPage/RecommendedPage.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import MyLibraryPage from '../../pages/MyLibraryPage/MyLibraryPage';
import Registration from "../../pages/RegisterPage/RegisterPage.jsx";


const Layout = () => {
    return (
        <>
    <Registration />
       <LoginPage />
       <RecommendedPage />
       <MyLibraryPage />
        <Outlet />
            </>
    )
}
export default Layout;