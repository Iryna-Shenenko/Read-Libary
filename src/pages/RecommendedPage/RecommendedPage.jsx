import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import Header from "../../components/Header/Header.jsx"
import css from "./RecommendedPage.module.css"
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks.jsx";
import Filters from "../../components/Filters/Filters.jsx";     
import InfoBlock from "../../components/InfoBlock/InfoBlock.jsx";   
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock.jsx";


const RecommendedPage = () => {
    return (
        <div className={css.page}>
            <Header />
            <main className={css.main}>
            <Dashboard showAddWordBtn={false}>
                <Filters /> 
                <InfoBlock />
                <QuoteBlock />
                </Dashboard>
            <RecommendedBooks />
            </main>
        </div>
    )
}
export default RecommendedPage