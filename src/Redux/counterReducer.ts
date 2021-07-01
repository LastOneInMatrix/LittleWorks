import {MinMaxValues} from "../AppRedux";

const CHANGE_SETTINGS_VALUES = 'CHANGE_SETTINGS_VALUES' as const;
export const changeValuesForSettingsAC = (value: MinMaxValues) => ({type: CHANGE_SETTINGS_VALUES, value} as const);

const RESET_COUNTER = 'RESET_COUNTER' as const;
export const onResetCounterAC = () => {
    return {type: RESET_COUNTER} as const
}

const ON_CLICK_INK = 'ON_CLICK_INK' as const;
export const onIncrementAC = () => {
    return {type: ON_CLICK_INK} as const
}

const CHANGE_MAX = 'CHANGE_MAX' as const;
export const onChangeMaxAC = () => {
    return {type: CHANGE_MAX} as const
}


type ActionsType = ReturnType<typeof changeValuesForSettingsAC> |
    ReturnType<typeof onResetCounterAC> |
    ReturnType<typeof onIncrementAC> |
    ReturnType<typeof onChangeMaxAC>


type DisabledButtonsType = {
    inc: boolean;
    res: boolean;
    set: boolean;
}
type ViewModeType = {
    forIfoPat: boolean;
    forButton: boolean;
    helper: boolean;
}
type maxMinValue = {
    min: number; max: number;
}

const initMinValue = 0;

const initialState = {
    viewMode: {forIfoPat: false, forButton: false, helper: true} as ViewModeType,
    disabled: {inc: false, res: true, set: false} as DisabledButtonsType,
    maxMinValue: {min: initMinValue, max: 5} as maxMinValue,
    count: initMinValue
}

type InitialStateType = typeof initialState; //todo узнать какой тайп нужно использовать для state, ведь возможно и из Store


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "RESET_COUNTER": {
            return {
                ...state,
                count: state.maxMinValue.min,
                disabled: {inc: false, res: true, set: false}
            }
        }
        case "CHANGE_MAX": {
            const stateCopy = {...state}
            stateCopy.disabled = {inc: false, res: false, set: false}
            stateCopy.maxMinValue.max === stateCopy.count ? stateCopy.disabled = {inc: true, set: false, res: false} :  stateCopy.viewMode = { forIfoPat: false, forButton: false, helper: true }
            return stateCopy;
        }
        case "ON_CLICK_INK": {
            const stateCopy = {...state, count: state.count + 1};

            if (stateCopy.maxMinValue.max !== stateCopy.count) {
                stateCopy.disabled = {inc: false, res: false, set: false};
            }
            else {
                stateCopy.disabled = {inc: true, res: false, set: false};
            }
            return stateCopy
        }
        case "CHANGE_SETTINGS_VALUES": {
            const stateCopy = {...state}
            stateCopy.maxMinValue = action.value;
            stateCopy.count = action.value.min;

            stateCopy.disabled = {inc: true, res: true, set: false};
            stateCopy.viewMode = {forIfoPat: true, forButton: false, helper: false};

            if (action.value.min >= action.value.max || action.value.min<0) {
                stateCopy.viewMode = {forIfoPat: true, forButton: false, helper: true};
                stateCopy.disabled = {inc: true, res: true, set: true};
            }
            return stateCopy;
        }
        default: return state;
    }
}