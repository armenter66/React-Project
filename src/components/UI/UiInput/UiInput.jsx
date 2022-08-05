import PropTypes from 'prop-types';
import cn from 'classnames';
import iconCancel from './img/cancel.svg';

import styles from './UiInput.module.css';

const UiInput = ({
    handleInputChange,
    value,
    classes,
    placeholder
}) => 
    (
        <div className={cn(styles.wrapper__input, classes)}>
           <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img src={iconCancel} alt="Cancel"  className={cn(styles.clear, !value && styles.clear__disabled)} onClick={()=> value && handleInputChange('')}/>
        </div>
    );

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UiInput;