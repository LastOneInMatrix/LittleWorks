import React  from 'react';
import styles from './Counter.module.css';

import {Button} from "./Button/Button";
import {InfoPart} from "./infoPart/InfoPart";
import {MinMaxValues, ViewModeType} from "../App";


type CounterPropsType = {
    count: number;
    onIncClick: () => void;
    onResClick: () => void;
    disabled: {inc: boolean, res: boolean, set: boolean};
    whatDisplay: string;
    onChangeView: () => void;
    maxValue: MinMaxValues;
    changeValue: (value: MinMaxValues) => void;
    viewMode: ViewModeType;
};


export const Counter = (props: CounterPropsType) => {
    return <div className={styles.app}>
        <div className={styles.main}>
                  <InfoPart viewMode={props.viewMode} maxValue={props.maxValue} changeValue={props.changeValue} disabled={props.disabled} count={props.count} whatToRender={props.whatDisplay}/>
            <div className={styles.buttonsArea}>
                {
                    props.whatDisplay === 'custom' ? <Button text={'set'} onClick={props.onChangeView} disabled={props.disabled}/>
                        : <pre className={styles.preElement}>
                            <Button text={'inc'} onClick={props.onIncClick} disabled={props.disabled}/>
                            <Button text={'res'} onClick={props.onResClick} disabled={props.disabled}/>
                    </pre>
                }

            </div>
        </div>
    </div>



}
