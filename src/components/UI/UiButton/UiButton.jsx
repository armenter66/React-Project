import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './UiButton.module.css';

const UiButton = ({
    text, 
    onClick, 
    disabled,
    theme = 'dark',
    classes
}) => {
    return (
            <button 
                onClick={onClick} 
                className={cn(styles[theme], styles.UiButton__btn, classes)}
                disabled={disabled}
                >
                {text}
            </button>
    );
};

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string
}


export default UiButton;