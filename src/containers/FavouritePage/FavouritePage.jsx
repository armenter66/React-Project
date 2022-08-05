import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';

import styles from './FavouritePage.module.css';

const FavouritePage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favouriteReducer);

    useEffect(()=> {
        const arr = Object.entries(storeData);
        
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res);
        }

    }, []);

    return (
        <>
        <h1 className="header__h1">Favorites Page</h1>
        {people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No Data</h2>}
        </>
        
    );
};

export default FavouritePage;