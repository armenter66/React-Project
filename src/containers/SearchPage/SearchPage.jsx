import { useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constans/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@components/UI/UiInput/UiInput';

import styles from './SearchPage.module.css';
import { useEffect } from 'react';
import { useCallback } from 'react';



const SearchPage = ({setErrorApi}) => {
    const [inputValue, setInputValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param =>  {
        const res = await getApiResource(API_SEARCH+param);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id, 
                    name,
                    img
                }
            })

            setPeople(peopleList);
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(()=> {
        getResponse('');
    },[])

     const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );


    const handleInputChange = value => {

        setInputValue(value);
        debounceGetResponse(value);
    }

    return (
        <>
            <h1 className='header__h1'>Search</h1>

            <UiInput
                value={inputValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters's name"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people}/>
        </>
    );
};

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);