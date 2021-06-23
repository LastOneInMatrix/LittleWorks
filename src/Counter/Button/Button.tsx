import React from 'react';
import styles from "./Button.module.css";


type ButtonType = {
    text: string;
    onClick: () => void;
    disabled: {inc: boolean, res: boolean, set: boolean};

}
export const Button = ({disabled,...props}: ButtonType) => {
    const disabledForButton = props.text === 'inc' ? disabled.inc : props.text === 'res' ? disabled.res : disabled.set;
    return <button onClick={props.onClick} className={styles.inc} style={{opacity: disabledForButton ? '0.5' : '1'}} disabled={disabledForButton}>
        {props.text}
    </button>
}