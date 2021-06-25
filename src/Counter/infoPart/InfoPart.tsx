import React from 'react';
import styles from "./InfoPart.module.css";
import {Customization} from "../ChangeValueComponent/Customizator";
import {MinMaxValues, ViewModeType} from "../../App";
import {ValuePart} from "./ValuePart/ValuePart";

type InfoPartType = {
    whatToRender: string;
    count:  number;
    disabled: {inc: boolean, res: boolean};
    maxValue: MinMaxValues;
    changeValue: (value: MinMaxValues) => void;
    viewMode: ViewModeType;
    showSettings: boolean;
}
export const InfoPart = ({viewMode, ...props}: InfoPartType) => {


   return  <div className={styles.counterValue}>

       {props.whatToRender === 'value' ? <ValuePart count={props.count} viewMode={viewMode} disabled={props.disabled}/>:<Customization changeValue={props.changeValue}  maxValue={props.maxValue}/>}
    </div>
}