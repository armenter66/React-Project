import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ people }) => (
        <>
            {people.length 
                ? (
                    <ul className={styles.list__container}>
                        {people.map(({id, name, img}) => 
                            <li key={id} className={styles.list__item}>
                            <Link to={`/people/${id}`}>
                                <img src={img} alt={name} className={styles.list__img}/>
                                <p className={styles.list__name}>{name}</p>
                            </Link>    
                            </li>
                        )}
                    </ul>
                )
                : <h2 className={styles.person__error}>No results</h2>     
            }
        </>
);

SearchPageInfo.propTypes = {
    people: PropTypes.array 
}

export default SearchPageInfo;