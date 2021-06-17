import './banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <h1 className="banner__title">Лига Банк</h1>
                <p className="banner__text">Кредиты на любой случай</p>
                <button className="banner__button" type="button">Рассчитать кредит</button>
            </div>
            <img className="banner__img" src="./img/white-card.png" alt="white credit card" width="289px" height="182px"/>
            <img className="banner__img" src="./img/black-card.png" alt="black credit card" width="289px" height="182px"/>
        </div>
    )
}

export default Banner;