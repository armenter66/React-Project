import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
	setPersonToFavourite,
	removePersonFromFavourite,
} from '@store/actions';
import iconFav from './Fav.svg';
import iconFavTrans from './FavTrans.svg';

import styles from './PersonIMG.module.css';

const PersonIMG = ({personImg, personName, personId, personFav, setPersonFav }) => {
    const dispatch = useDispatch();
    
    const dispatchFavPerson = ()=> {
        if (personFav) {
            dispatch(removePersonFromFavourite(personId));
            setPersonFav(false);
        } else {
            dispatch(setPersonToFavourite({
            [personId]: {
                name: personName,
                img: personImg
            }
        }));
            setPersonFav(true);
        }
    }

    return (
        <>
        <div className={styles.container}>
            <img src={personImg} alt={personName} className={styles.photo}/>

            <img 
            src={personFav ? iconFavTrans : iconFav}
            onClick={dispatchFavPerson} 
            className={styles.img__fav}
            alt="Add to Favorite"
            />
        </div>     

        

        </>
    );
};

PersonIMG.propTypes = {
    personImg: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFav: PropTypes.bool,
    setPersonFav: PropTypes.func
}


export default PersonIMG;