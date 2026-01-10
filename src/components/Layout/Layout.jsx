import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RecommendedPage from "../../pages/RecommendedPage/RecommendedPage.jsx";
import { Outlet } from "react-router-dom";
import MyLibraryPage from '../../pages/MyLibraryPage/MyLibraryPage';
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";


const Layout = () => {
    return (
        <>
       <RegisterPage />
       <LoginPage />
       <RecommendedPage />
       <MyLibraryPage />
        <Outlet />
            </>
    )
}
export default Layout;