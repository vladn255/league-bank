import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../store/action.js';
import { fetchRates } from '../../store/api-action.js';
import { getMinimumDate, getDateFormat } from '../../utils';

import { useState } from 'react';

const INITIAL_CURRENT_VALUE = 1000;

const Converter = ({ exchangeDate, currentRate, rates, onSetCurrentRate, onSetTargetDate, onSaveExchange }) => {
    const dateNow = getDateFormat(new Date());
    const minDate = getMinimumDate(dateNow);
    let currentRateValue = rates[currentRate];

    const [currentValue, setCurrentValue] = useState(INITIAL_CURRENT_VALUE);
    const [exchangeValue, setExchangeValue] = useState(currentValue * currentRateValue);

    const [currentCurrency, setCurrentCurrency] = useState('RUB');
    const [exchangeCurrency, setExchangeCurrency] = useState('USD');
    const [targetDate, setTargetDate] = useState(exchangeDate);

    const handleCurrentValueChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;
        setCurrentValue(value);
        setExchangeValue(value * currentRateValue);
    }

    const handleExchangeValueChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;
        setExchangeValue(value);
        setCurrentValue(value / currentRateValue);
    }

    const handleCurrentCurrencyChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;

        setCurrentCurrency(value);
        const newRate = `${value}${exchangeCurrency}`
        onSetCurrentRate(newRate);

        value === exchangeCurrency
            ? setExchangeValue(currentValue)
            : setExchangeValue(currentValue * rates[newRate]);
    }

    const handleExchangeCurrencyChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;

        setExchangeCurrency(value);
        const newRate = `${currentCurrency}${value}`
        onSetCurrentRate(newRate);

        value === currentCurrency
            ? setExchangeValue(currentValue)
            : setExchangeValue(currentValue * rates[newRate]);
    }

    const handleDateChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;
        if (value >= minDate && value <= dateNow) {
            setTargetDate(value);
            onSetTargetDate(value);
        } else {
            setTargetDate(dateNow);
            onSetTargetDate(dateNow);
        }
    }

    const handleSaveExchange = (evt) => {
        evt.preventDefault();

        onSaveExchange({
            date: targetDate,
            currentSum: currentValue,
            currentCurrency: currentCurrency,
            exchangeSum: exchangeValue,
            exchangeCurrency: exchangeCurrency
        })
    }

    return (
        <section className="converter">
            <h2 className="converter__title">Конвертер валют</h2>
            <form className="converter__form form">
                <div className="converter__wrapper converter__wrapper--current">
                    <input className="form__input" id="available-sum" placeholder="введите сумму" name="available-sum" value={currentValue} onChange={handleCurrentValueChange}></input>
                    <label className="form__label" htmlFor="available-sum">У меня есть</label>
                    <select className="form__select" name="available-currency" onChange={handleCurrentCurrencyChange}>
                        <option value="RUB" selected>RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
                <div className="converter__wrapper converter__wrapper--conversed">
                    <input className="form__input" id="converted-sum" placeholder="введите сумму" name="converted-sum" value={exchangeValue} onChange={handleExchangeValueChange}></input>
                    <label className="form__label" htmlFor="converted-sum">Хочу приобрести</label>
                    <select className="form__select" name="converted-currency" onChange={handleExchangeCurrencyChange}>
                        <option value="RUB">RUB</option>
                        <option value="USD" selected>USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
                <input className="form__input form__input--date" type="date" id="conversion-date" name="conversion-date" min={minDate} max={dateNow} value={targetDate} onChange={handleDateChange} />
                <label className="form__label" htmlFor="conversion-date"></label>
                <button className="button button--save" onClick={handleSaveExchange}>Сохранить результат</button>
            </form>

        </section>
    )
}

Converter.propTypes = {
    exchangeDate: PropTypes.string.isRequired,
    currentRate: PropTypes.string.isRequired,
    rates: PropTypes.objectOf(PropTypes.string).isRequired,
    onSetCurrentRate: PropTypes.func.isRequired,
    onSetTargetDate: PropTypes.func.isRequired,
    onSaveExchange: PropTypes.func.isRequired
};

const mapStateToProps = ({ exchangeDate, currentRate, rates }) => ({
    exchangeDate,
    currentRate,
    rates
});

const mapDispatchToProps = (dispatch) => ({
    onSetCurrentRate(rate) {
        dispatch(ActionCreator.setCurrentRate(rate))
    },

    onSetTargetDate(date) {
        dispatch(ActionCreator.setExchangeDate(date))
        dispatch(fetchRates(date))
    },

    onSaveExchange(exchangeEvent) {
        dispatch(ActionCreator.addExchangeEvent(exchangeEvent))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Converter);