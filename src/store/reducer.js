import { ActionType } from './action.js';
import { getDateFormat } from '../utils';
import { HISTORY_MAX_LENGTH } from '../const.js';

const initialState = {
    rates: [],
    history: [],
    exchangeDate: getDateFormat(new Date()),

    initialCurrencyValue: 1000,
    initialCurrencyOption: 'RUB',
    exchangeCurrenctValue: 0,
    exchangeCurrencyOption: 'USD',

    currentRate: 'RUBUSD'
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
            let newHistory = state.history.slice();
            newHistory.unshift(action.payload);
            if (newHistory.length > HISTORY_MAX_LENGTH) {
                newHistory.splice(-1)
            }
            return {
                ...state,
                history: newHistory
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

        case ActionType.SET_CURRENT_RATE:
            return {
                ...state,
                currentRate: action.payload
            }

        default: {
            return state;
        }
    }
}

export default reducer;