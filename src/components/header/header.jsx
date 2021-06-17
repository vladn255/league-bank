import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <svg className="logo__icon">

                    </svg>
                    <span>
                        ЛИГА Банк
                    </span>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="/#">
                            Услуги
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">
                            Рассчитать кредит
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">
                            Конвертер валют
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">
                            Контакты
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">
                            Задать вопрос
                        </a>
                    </li>
                </ul>
                <a className="header__link" href="/#">
                    Войти в Интернет-банк
                </a>
            </nav>
        </header>
    );
}

export default Header;