import {Link} from 'react-router-dom';
import css from './Logo.module.css';
import icon from '../../images/icon.svg';


const Logo = () => {
    return (
        <div className={css.container_logo}>  
        <img src={`${icon}`}alt="icon" className={css.icon} />
    <Link to="/" className={css.logo}>  
       READ JOURNEY
    </Link>
    </div>
    );
};
export default Logo