import { useLocation } from 'react-router-dom';
import img from '../../styles/static/not-found.jpeg';
import './NotFound.css';

const NotFound = () => {
    let location = useLocation();

    return (
        <>
            <img className="error__img" src={img} alt="error404"/>
            <p className='error__location'>No match for <u>{location.pathname}</u></p>
        </>
    );
};

export default NotFound;