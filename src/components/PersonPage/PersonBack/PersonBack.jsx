/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import styles from './PersonBack.module.css';

const PersonBack = () => {
    const history = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        history(-1);
    }
    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <span> &#8592; Go Back </span>
        </a>
    );
};

export default PersonBack;