import iconBookmark from './bookmark.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState();

    const personData = useSelector( state => state.favouriteReducer);

    useEffect(()=> {
        const length = Object.keys(personData).length;
        length.toString().length > 2 ? setCount("...") : setCount(length);
        
    });

    return (
        <div className={styles.container}>
            <Link to="/favorites" >
                <span className={styles.counter}>{count}</span>
                <img src={iconBookmark} alt="" className={styles.icon}/>
            </Link>
        </div>
    );
};

export default Favorite;