import React, {ChangeEvent} from 'react';
import styles from './Customizator.module.css';
import {MinMaxValues} from "../../App";

type CustomizationType = {
    maxValue: MinMaxValues;
    changeValue: (value: MinMaxValues) => void;
}

//todo менять значение в LocalStorage сразу, без Set

export const Customization = (props: CustomizationType) => {


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.id === 'min' ? props.changeValue({...props.maxValue, min: +e.currentTarget.value }) : props.changeValue({...props.maxValue, max: +e.currentTarget.value})
    };

    return <div className={styles.main}>
        <div className={styles.itemA}><pre className={styles.preInline}>Min value</pre> <input id={'min'} value={props.maxValue.min} onChange={onChangeHandler} type={'number'}/></div>
        <div className={styles.itemB}><pre className={styles.preInline}>Max value</pre> <input id={'max'} value={props.maxValue.max} onChange={onChangeHandler} type={'number'}/></div>
    </div>
}