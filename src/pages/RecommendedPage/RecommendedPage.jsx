import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import Header from "../../components/Header/Header.jsx"
import css from "./RecommendedPage.module.css"
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks.jsx";

const RecommendedPage = () => {
    return (
        <div className={css.page}>
            <Header />
            <main className={css.main}>
            <Dashboard />
            <RecommendedBooks />
            </main>
        </div>
    )
}
export default RecommendedPage