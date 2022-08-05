import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Favorite from '../Favorite/Favorite';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../context/ThemeProvider';
import imgDroid from './img/droid.svg';
import imgLight from './img/lightsaber.svg';
import imgSpace from './img/space-station.svg'

import './Header.css';


const Header = () => {
    const [icon, setIcon] = useState(imgSpace);
    const isTheme = useTheme();

    useEffect(()=> {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLight)
                break;
            case THEME_DARK: setIcon(imgSpace)
                break;
            case THEME_NEITRAL: setIcon(imgDroid)
                break;        
            default: setIcon(imgSpace);
        }
    },[isTheme])

    return (
        <div className='header__container'>
            <img src={icon} alt="Logo" className='header__logo'/>

            <ul className='header__list'>
                <li><NavLink to="/" exact="true" >Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found" exact="true" >404</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>

            <Favorite/>
			
        </div>
    );
};

export default Header;