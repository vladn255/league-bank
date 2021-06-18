const Converter = () => {
    return (
        <section className="converter">
            <h2 className="converter__title">Конвертер валют</h2>
            <form className="converter__form form">
                <div className="converter__wrapper converter__wrapper--current">
                    <h4 className="form__label">У меня есть</h4>
                    <input className="form__input" placeholder="введите сумму" name="available-sum" value="1000"></input>
                    <select className="form__select" name="available-currency">
                        <option value="RUB" selected>RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBR">GBR</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
                <div className="converter__wrapper converter__wrapper--conversed">
                    <h4 className="form__label">Хочу приобрести</h4>
                    <input className="form__input" placeholder="введите сумму" name="converted-sum" value="1000"></input>
                    <select className="form__select" name="converted-currency">
                        <option value="RUB">RUB</option>
                        <option value="USD" selected>USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBR">GBR</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
                <input className="form__input form__input--date" type="date" name="conversion-date" />
                <button className="button button--save">Сохранить результат</button>
            </form>

        </section>
    )
}

export default Converter;