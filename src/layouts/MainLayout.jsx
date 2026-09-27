import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import { SUPPORTED_LANGUAGES } from "../config/site.js";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

import NotFound from "../pages/NotFound/NotFound.jsx";

import translations from "../i18n/index.js";

function MainLayout() {
  const { lang } = useParams();

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <NotFound />;
  }

  const language = lang;
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="app">
      <Header t={t} language={language} />

      <Outlet context={{ t, language }} />

      <Footer t={t} />
    </div>
  );
}

export default MainLayout;
