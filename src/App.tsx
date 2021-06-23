import React, {useState} from 'react';
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
    let [count, setCount] = useState(maxValue.min);
    const [disabled, setDisabled] = useState<DisabledType>({inc: false, res: true, set: false});
    const [viewMode, setViewMode] = useState<ViewModeType>({ forIfoPat: true, forButton: false, helper: true });

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
        setViewMode({ forIfoPat: false, forButton: false, helper: true  })
    };


    const onChangeMax = () => {
        setViewMode({ forIfoPat: true, forButton: false, helper: true  });
    }

  return (
    <div className="App">
        <Counter viewMode={viewMode} changeValue={changeValue} onChangeView={onChangeMax} maxValue={maxValue} count={count} onIncClick={onIncClick} onResClick={onResClick} disabled={disabled} whatDisplay={'custom'}/>
        <Counter viewMode={viewMode} changeValue={changeValue} onChangeView={onChangeMax} maxValue={maxValue} count={count} onIncClick={onIncClick} onResClick={onResClick} disabled={disabled} whatDisplay={'value'}/>
    </div>
  );
}

export default App;
