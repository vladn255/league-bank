import Logo from '../logo/logo.jsx';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Logo />
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
                    <li className="nav__item nav__item--active">
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