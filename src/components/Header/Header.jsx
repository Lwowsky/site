import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Container from "../Container/Container.jsx";

import { NAVIGATION, getRoute } from "../../config/routes.js";

import { LANGUAGES, SUPPORTED_LANGUAGES } from "../../config/site.js";

import { getLanguagePath } from "../../utils/language.js";

import "./Header.css";

function Header({ t, language }) {
  const location = useLocation();
  const navigate = useNavigate();

  function changeLanguage(newLanguage) {
    navigate(getLanguagePath(location.pathname, newLanguage));
  }

  return (
    <header className="header">
      <Container className="header__container">
        <h1 className="header__logo">{t.header.title}</h1>

        <nav className="header__nav">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.key}
              to={getRoute(language, item.route)}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              {t.header[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="header__languages">
          {SUPPORTED_LANGUAGES.map((languageCode) => (
            <button
              key={languageCode}
              type="button"
              onClick={() => changeLanguage(languageCode)}
              disabled={language === languageCode}
            >
              {LANGUAGES[languageCode].label}
            </button>
          ))}
        </div>
      </Container>
    </header>
  );
}

export default Header;
