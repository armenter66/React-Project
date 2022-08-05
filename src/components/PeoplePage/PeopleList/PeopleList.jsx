import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PeopleList.css';

const PeopleList = ({people}) => {
    return (
        <ul className='list__container'> 
            { people.map(({id, name, img }) => 
                <li key={id} className='list__item'>
                    <Link to={`/people/${id}`}>
                    <img className='list__photo' src={img} alt={name}/>
                        <p>{name}</p>
                    </Link>
                </li>

         
            )}
          
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;