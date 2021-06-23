import React from 'react';
import styles from "./InfoPart.module.css";
import {Customization} from "../ChangeValueComponent/Customizator";
import {MinMaxValues, ViewModeType} from "../../App";

type InfoPartType = {
    whatToRender: string;
    count?:  number;
    disabled: {inc: boolean, res: boolean};
    maxValue: MinMaxValues;
    changeValue: (value: MinMaxValues) => void;
    viewMode: ViewModeType;
}
export const InfoPart = ({viewMode, ...props}: InfoPartType) => {
   return  <div className={styles.counterValue}>
       {props.whatToRender === 'value' && viewMode.forIfoPat ? <span  style={{color: props.disabled.inc ? 'red' : '#282c34' }}>{props.count}</span> :   <Customization changeValue={props.changeValue}  maxValue={props.maxValue}/>}
    </div>
}