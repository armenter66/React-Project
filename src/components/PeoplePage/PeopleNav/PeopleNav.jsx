import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton/UiButton';
import './PeopleNav.css';

const PeopleNav = ({
    getResource, 
    nextPage, 
    prevPage, 
    counterPage
}) => {
    const handleChangeNext = () => {getResource(nextPage)};
    const handleChangePrev = () => {getResource(prevPage)};

    return (
        <>
        <div className='peopleNav__wrapper'>
            <Link to={`/people/?page=${counterPage-1}`} className='link'>
                <UiButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className='link'>
                <UiButton 
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
        </>
    );
};

PeopleNav.propTypes = {
    getResource: PropTypes.func,  
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number,
}


export default PeopleNav;