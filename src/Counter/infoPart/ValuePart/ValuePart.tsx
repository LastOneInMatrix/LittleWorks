import React from 'react';
import {ViewModeType} from "../../../AppRedux";
import styles from './ValuePart.module.css'

type ValuePartPropsType = {
    count: number;
    viewMode: ViewModeType;
    disabled: {inc: boolean, res: boolean};
}

export const ValuePart = ({count, viewMode, ...props}: ValuePartPropsType) => {
    const textForInfoPart =
        viewMode.helper ?
            <span className={styles.errorSpan}>Incorrect value</span> :
            <span className={styles.infoSpan}>Enter value and press 'set'</span>
    return viewMode.forIfoPat ? textForInfoPart :
        <span style={{color: props.disabled.inc ? 'red' : '#282c34'}}>{count}</span>
}