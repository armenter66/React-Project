/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../../context/ThemeProvider';
import darkImg from './img/dark-side.jpeg';
import lightImg from './img/light-side.jpeg';
import neitralImg from './img/falcon.jpeg';

import cn from 'classnames';
import styles from'./ChooseSide.module.css';


const ChooseSideItem = ({
    classes,
    theme,
    text,
    img,
})=> {
    const isTheme = useTheme();

    return (
    <div className={cn(styles.item, classes)}
        onClick={()=> isTheme.change(theme)}
    >
        <div className={styles.item__header}>{text}</div>
        <img src={img} alt={text} className={styles.item__img}/>
    </div>
    );
}   

ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string
}


const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: lightImg,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: darkImg,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: 'Han Solo Side',
            img: neitralImg,
            classes: styles.item__neitral
        }
    ]

    return (
        <div className={styles.container}>  
            {elements.map((el, index)=>(
                <ChooseSideItem 
                    key={index}
                    theme={el.theme}
                    text={el.text}
                    img={el.img}
                    classes={el.classes}
                />
            ))}  
        </div>
    );
} 


export default ChooseSide;