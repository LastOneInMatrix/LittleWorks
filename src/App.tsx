import React, {useEffect, useState} from 'react';
import {Counter} from "./Counter/Counter";
import './App.css';

type DisabledType = {
    inc: boolean;
    res: boolean;
    set: boolean;
};
export type MinMaxValues = { min:number, max: number };
export type ViewModeType = { forIfoPat: boolean, forButton: boolean, helper: boolean };

function App() {

    const [maxValue, setMaxValue] = useState<MinMaxValues>({min:0, max:5});
    let [count, setCount] = useState(maxValue.min);  //todo где должно стоять useEffect?
    const [disabled, setDisabled] = useState<DisabledType>({inc: false, res: true, set: false});
    const [viewMode, setViewMode] = useState<ViewModeType>({ forIfoPat: false, forButton: false, helper: true });

    useEffect(() => {
        debugger
        const resultForSettings = localStorage.getItem('maxValue');
        const resultForValueCount = localStorage.getItem('count');

        if(resultForValueCount && resultForSettings) {
            let stateSettingsValues = JSON.parse(resultForSettings);
            setMaxValue(stateSettingsValues);
            let currentValue = JSON.parse(resultForValueCount)
            setCount(currentValue);
            if(stateSettingsValues.max <= currentValue) {
                setDisabled({inc: true, res: false, set: false}); //todo как можно сделать?
            }
        }

    }, []);

    const onIncClick = () => {
        setCount(++count);
        if (maxValue.max !== count) {
            setDisabled({inc: false, res: false, set: false});
        }
        else {
            setDisabled({inc: true, res: false, set: false});
        }
    }
    const onResClick = () => {
        setCount(maxValue.min);
        setDisabled({inc: false, res: true, set: false});
    }
    const changeValue = (value: MinMaxValues) => {
        setMaxValue(value);
        setCount(value.min);

        setDisabled({...disabled, inc: true, set: false});
        setViewMode({ forIfoPat: true, forButton: false, helper: false  });
        if (value.min >= value.max || value.min<0) {
            setViewMode({ forIfoPat: true, forButton: false, helper: true});
            setDisabled({inc: true, res: true, set: true})
        }


    };
    const onChangeMax = () => {

        setDisabled( {...disabled, inc: false, set: false});
        maxValue.max === count ?   setDisabled( {inc: true, set: false, res: false}) : setViewMode({ forIfoPat: false, forButton: false, helper: true });

    };
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('count', JSON.stringify(count));
    }, [maxValue, count])


  return (
    <div className="App">
        <Counter showSettings={true} viewMode={viewMode} changeValue={changeValue} onChangeView={onChangeMax} maxValue={maxValue} count={count} onIncClick={onIncClick} onResClick={onResClick} disabled={disabled} whatDisplay={'custom'}/>
        <Counter showSettings={false} viewMode={viewMode} changeValue={changeValue} onChangeView={onChangeMax} maxValue={maxValue} count={count} onIncClick={onIncClick} onResClick={onResClick} disabled={disabled} whatDisplay={'value'}/>
    </div>
  );
}

export default App;
