// import bannerDir from "../../img/banner/";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__wrapper">
                    <h1 className="banner__title">Лига Банк</h1>
                    <p className="banner__text">Кредиты на любой случай</p>
                    <button className="button button--banner" type="button">Рассчитать кредит</button>
                </div>
                <picture className="banner__img banner__img--white">
                    <source type="image/webp"
                        srcset="../../img/banner/white-card.webp 1x, ../../img/banner/white-card@2x.webp 2x" />
                    <img src="../../img/banner/white-card.png" srcset="../../img/banner/white-card@2x.png 2x"
                        alt="white credit card" width="289" height="182" />
                </picture>
                <picture className="banner__img banner__img--black">
                    <source type="image/webp"
                        srcset="../../img/banner/black-card.webp 1x, ../../img/banner/black-card@2x.webp 2x" />
                    <img src="../img/banner/black-card.png" srcset="../../img/banner/black-card@2x.png 2x"
                        alt="black credit card" width="289" height="182" />
                </picture>
            </div>
        </div>
    )
}

export default Banner;