import React from 'react';
import {Counter} from "./Counter/Counter";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./Redux/store";
import {changeValuesForSettingsAC, onChangeMaxAC, onIncrementAC, onResetCounterAC} from "./Redux/counterReducer";

export type MinMaxValues = { min: number, max: number };
export type ViewModeType = { forIfoPat: boolean, forButton: boolean, helper: boolean };

function AppWithRedux() {

    const appState = useSelector<RootState, RootState>(state => state);
    const dispatch = useDispatch();

    const onResClick = () => {
        const action = onResetCounterAC()
        dispatch(action);
    }
    const changeValue = (value: MinMaxValues) => {
        const action = changeValuesForSettingsAC(value)
        dispatch(action);
    }
    const onChangeMax = () => {
        dispatch(onChangeMaxAC())
    }
    const onIncClick = () => {
        const action = onIncrementAC();
        dispatch(action);
    }

    return (
        <div className="App">
            <Counter
                showSettings={true}
                viewMode={appState.counter.viewMode}
                changeValue={changeValue}
                onChangeView={onChangeMax}
                maxValue={appState.counter.maxMinValue}
                count={appState.counter.count}
                onIncClick={onIncClick}
                onResClick={onResClick}
                disabled={appState.counter.disabled}
                whatDisplay={'custom'}
            />
            <Counter
                showSettings={false}
                viewMode={appState.counter.viewMode}
                changeValue={changeValue}
                onChangeView={onChangeMax}
                maxValue={appState.counter.maxMinValue}
                count={appState.counter.count}
                onIncClick={onIncClick}
                onResClick={onResClick}
                disabled={appState.counter.disabled}
                whatDisplay={'value'}
            />
        </div>
    );
}

export default AppWithRedux;
