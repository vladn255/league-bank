import { ActionType } from './action/action.js';

const initialState = {
    rates: [],
    history: [],
    exchangeDate: new Date().toDateString,

    initialCurrencyValue: 1000,
    initialCurrencyOption: 'RUB',
    exchangeCurrenctValue: 0,
    exchangeCurrencyOption: 'USD'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_EXCHANGE_RATES:
            return {
                ...state,
                rates: action.payload
            };

        case ActionType.SET_EXCHANGE_HISTORY:
            return {
                ...state,
                history: action.payload
            };

        case ActionType.ADD_EXCHANGE_EVENT:
            const newHistory = state.history.unshift(action.payload);
            return {
                ...state,
                history: newHistory.splice(-1)
            };

        case ActionType.CLEAR_HISTORY:
            return {
                ...state,
                history: []
            }

        case ActionType.SET_EXCHANGE_DATE:
            return {
                ...state,
                exchangeDate: action.payload
            }

        default: {
            return state;
        }
    }
}

export default reducer;