import Logo from '../logo/logo.jsx';
import Socials from '../socials/socials.jsx';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__credentials">
                    <Logo />
                    <p className="footer__text">150015, г.Москва, ул.Московская, д.32<br />
                        Генеральная лицензия Банка России №1050<br />
                        &copy; Лига Банк, 2019
                    </p>
                </div>
                <ul className="footer__services services">
                    <li className="services__item">
                        <a className="services__link footer__text footer__text--bold" href="/#">
                            Услуги
                        </a>
                    </li>
                    <li className="services__item">
                        <a className="services__link footer__text footer__text--bold" href="/#">
                            Рассчитать кредит
                        </a>
                    </li>
                    <li className="services__item">
                        <a className="services__link footer__text footer__text--bold" href="/#">
                            Контакты
                        </a>
                    </li>
                    <li className="services__item">
                        <a className="services__link footer__text footer__text--bold" href="/#">
                            Задать вопрос
                        </a>
                    </li>
                </ul>
                <div className="footer__mobile-contact">
                    <h3 className="footer__text footer__text--bold">*0904</h3>
                    <p className="footer__text">
                        Бесплатно для абонентов<br />
                        МТС, Билайн, Мегафон, Теле2
                    </p>
                </div>
                <div className="footer__phone-contact">
                    <h3 className="footer__text footer__text--bold">8 800 111 22 33</h3>
                    <p className="footer__text">
                        Бесплатный для всех городов России
                    </p>
                </div>
<Socials />
            </div>
        </footer>
    )
}

export default Footer;