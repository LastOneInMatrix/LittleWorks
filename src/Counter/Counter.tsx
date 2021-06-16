import React, {ChangeEvent, MouseEvent, useState} from 'react';
import styles from './Counter.module.css';
import {DisabledType} from "../App";


type CounterPropsType = {
    initialValue: number;
    disabled: DisabledType;
    changeDisabled: (value: { forInc: boolean, forRes: boolean }) => void;
    setCount: (value: number) => void;
    maxValue: number;
};


export const Counter = (props: CounterPropsType) => {

    // const [value, setValue] = useState<string>('');
    // const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setValue(e.currentTarget.value)};


    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        debugger;
        let value = props.initialValue;
        e.currentTarget.innerHTML === 'inc' ? props.setCount(value === props.maxValue ? 5 : ++value) : props.setCount(0)

        if (value === 0) {
            props.changeDisabled({forInc: false, forRes: true});
        } else if (value > 0 && value === 5) {
            console.log('a')
            props.changeDisabled({forInc: true, forRes: false});
        }
        else if (value > 0) {
            console.log('a')
            props.changeDisabled({forInc: false, forRes: false});
        }
    }
    return <div className={styles.main}>
        <div className={styles.counterValue}>
            {props.initialValue}
        </div>
        <div className={styles.buttonsArea}>
            <button disabled={props.disabled.forInc} style={{opacity: props.initialValue === 5 ? '0.5' : '1'}}
                    onClick={(e) => onClickHandler(e)} className={styles.inc}>
                inc
            </button>
            <button disabled={props.disabled.forRes} style={{opacity: props.initialValue === 0 ? '0.5' : '1'}}
                    className={styles.res} onClick={onClickHandler}>
                reset
            </button>
            {/*<input value={value} onChange={onchangeHandler}/>*/}
        </div>
    </div>
}

let a = 1;
console.log(++a)