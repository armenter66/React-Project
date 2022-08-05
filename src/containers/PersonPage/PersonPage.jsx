import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Suspense } from 'react';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { API_PERSON } from '@constans/api';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonIMG from '@components/PersonPage/PersonPhoto/PersonIMG';
import PersonBack from '@components/PersonPage/PersonBack/PersonBack';
import UiLoading from '@components/UI/UiLoading/UiLoading';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(()=>import('@components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({ match, setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personImg, setPersonImg] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFav, setPersonFav] = useState(false);

    const personData = useSelector( state => state.favouriteReducer);

    const {id} = useParams();
    useEffect(()=> {
        (async ()=> {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            personData[id] ? setPersonFav(true) : setPersonFav(false);

            setPersonId(id);
            
            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Gender', data: res.gender },
                    { title: 'Birth', data: res.birth_year },
                    { title: 'Eyes', data: res.eye_color },
                    { title: 'Hair', data: res.hair_color },
                    { title: 'Skin', data: res.skin_color },
                ]);

                setPersonName(res.name);
                setPersonImg(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true)
            }
        })();

    }, []);

    

    return (
        <>
            <PersonBack/>
            <div className={styles.wrapper}>
                 <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                <PersonIMG  personImg={personImg}
                            personName={personName}
                            personId={personId}
                            personFav={personFav}
                            setPersonFav={setPersonFav}
                            />
                {personInfo && (
                    <PersonInfo personInfo={personInfo}/>
                )}
                {personFilms && (
                        <Suspense fallback={<UiLoading theme="white" isShadow/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func
}


export default withErrorApi (PersonPage);