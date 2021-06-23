import whiteCard1webp from "../../img/banner/white-card.webp";
import whiteCard2webp from "../../img/banner/white-card@2x.webp";
import whiteCard1png from "../../img/banner/white-card.png";
import whiteCard2png from "../../img/banner/white-card@2x.png";

import blackCard1webp from "../../img/banner/black-card.webp";
import blackCard2webp from "../../img/banner/black-card@2x.webp";
import blackCard1png from "../../img/banner/black-card.png";
import blackCard2png from "../../img/banner/black-card@2x.png";

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
                        srcSet={`${window.location.origin}${whiteCard1webp} 1x, ${window.location.origin}${whiteCard2webp} 2x`} />
                    <img src={`${window.location.origin}${whiteCard1png} 1x, ${window.location.origin}${whiteCard2png} 2x`}
                        alt="white credit card" width="335" height="228" />
                </picture>
                <picture className="banner__img banner__img--black">
                    <source type="image/webp"
                        srcSet={`${window.location.origin}${blackCard1webp} 1x, ${window.location.origin}${blackCard2webp} 2x`} />
                    <img src={`${window.location.origin}${blackCard1png} 1x, ${window.location.origin}${blackCard2png} 2x`}
                        alt="black credit card" width="335" height="228" />
                </picture>
            </div>
        </div>
    )
}

export default Banner;