

const CHANGE_SETTINGS_VALUES = 'CHANGE_SETTINGS_VALUES' as const;
const changeValuesForSettingsAC = (payload: any) => ({type: CHANGE_SETTINGS_VALUES, payload} as const);

const RESET_COUNTER = 'RESET_COUNTER' as const;
const onResetCounterAC = () => {
  return  {type: RESET_COUNTER} as const
}







type ActionsType =  ReturnType<typeof changeValuesForSettingsAC> | ReturnType<typeof onResetCounterAC>;


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
    min:number; max:number;
}

const initMinValue = 0;

const initialState = {
    viewMode: { forIfoPat: false, forButton: false, helper: true } as ViewModeType,
    disabled: {inc: false, res: true, set: false} as DisabledButtonsType,
    maxMinValue: {min:initMinValue, max:5} as maxMinValue,
    count: initMinValue
}

type InitialStateType = typeof initialState; //todo узнать какой тайп нужно использовать для state, ведь возможно и из Store


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

switch(action.type){
    case "RESET_COUNTER": {
       return {
           ...state,
           count: state.maxMinValue.min,
           disabled: {inc: false, res: true, set: false}
       }
    }
}
    return state;
}