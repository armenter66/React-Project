/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import { makeConcurrentReq, changeHTTP } from '@utils/network';
import { useState, useEffect } from 'react';
import styles from './PersonFilms.module.css';

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurrentReq(filmsHTTPS);

            setFilmsName(response);
        })();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list__wrapper}>
                    {filmsName
                    .sort((a, z)=> a.episode_id - z.episode_id)
                    .map(({title, episode_id}) => (
                    <li key={episode_id} className={styles.list__item}> 
                        <span className={styles.item__episode}>Episode {episode_id} : </span>
                        <a href="#" className={styles.item__link}>{title}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}


export default PersonFilms;