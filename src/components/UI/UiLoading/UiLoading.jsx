import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import loaderWhite from './img/loaderWhite.svg';
import loaderBlack from './img/loaderBlack.svg';
import loaderBlue from './img/loaderBlue.svg';
import cn from 'classnames';
import styles from './UiLoading.module.css';

const UiLoading = ({theme='white', isShadow=true, classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(()=>{
        switch(theme) {
            case 'black': setLoaderIcon(loaderBlack); break;

            case 'blue': setLoaderIcon(loaderBlue); break;

            case 'white': setLoaderIcon(loaderWhite); break;

            default: setLoaderIcon(loaderWhite);
        }
    },[]);

    return (
        <img src={loaderIcon} alt='loader' className={cn(styles.loader, isShadow && styles.shadow)}/>
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}


export default UiLoading;