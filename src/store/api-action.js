import { ActionCreator } from './action.js';
import { API_KEY, CURRENCIES } from '../const.js';
import { getCombinations } from '../utils.js';

const fetchRates = (date) => (dispatch, _getState, api) => (
    api.get(`?get=rates&pairs=${getCombinations(CURRENCIES).join()}&${date === undefined ? `` : `&date=${date}`}&key=${API_KEY}`)
        .then(({ data: { data } }) => {
            console.log(data);
            dispatch(ActionCreator.loadExchangeRates(data))
        })
        .catch((err) => console.log(err))
)

export {
    fetchRates
}