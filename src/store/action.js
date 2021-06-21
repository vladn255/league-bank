const ActionType = {
    LOAD_EXCHANGE_RATES: 'loadExchangeRates',
    SET_EXCHANGE_HISTORY: 'setExchangeHistory',
    ADD_EXCHANGE_EVENT: 'addExchangeEvent',
    CLEAR_HISTORY: 'clearHistory',
    SET_EXCHANGE_DATE: 'setExhangeDate'
}

const ActionCreator = {
    loadExchangeRates: (rates) => ({
        type: ActionType.LOAD_EXCHANGE_RATES,
        payload: rates
    }),
    setExchangeHistory: (history) => ({
        type: ActionType.SET_EXCHANGE_HISTORY,
        payload: history
    }),
    addExchangeEvent: (exchangeEvent) => ({
        type: ActionType.ADD_EXCHANGE_EVENT,
        payload: exchangeEvent
    }),
    clearHistory: () => ({
        type: ActionType.CLEAR_HISTORY
    }),
    setExhangeDate: (date) => ({
        type: ActionType.SET_EXCHANGE_DATE,
        payload: date
    })
}

export {
    ActionType,
    ActionCreator
}