import { useOutletContext } from "react-router-dom";

import Page from "../../components/Page/Page.jsx";
import PageMeta from "../../components/PageMeta/PageMeta.jsx";

import { ROUTES } from "../../config/routes.js";

function About() {
  const { t, language } = useOutletContext();

  return (
    <>
      <PageMeta
        title={t.seo.about.title}
        description={t.seo.about.description}
        language={language}
        path={ROUTES.about}
      />

      <Page>
        <h2>{t.about.title}</h2>
        <p>{t.about.text}</p>
      </Page>
    </>
  );
}

export default About;
