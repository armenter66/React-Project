/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';
import PeopleNav from '@components/PeoplePage/PeopleNav/PeopleNav';
import { getApiResource, changeHTTP } from '@utils/network';
import { API_PEOPLE } from '@constans/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';

import './People.css';



const People = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id);

            // console.log(res);

            return {
                id,
                name,
                img
            }
        })
        
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }
    
    useEffect(()=>{
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <> 
        <PeopleNav 
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
        />
        {people && <PeopleList people={people}/>}  
        </>
    )
};

People.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(People);