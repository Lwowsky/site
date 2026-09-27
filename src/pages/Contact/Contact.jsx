import { useOutletContext } from "react-router-dom";

import Page from "../../components/Page/Page.jsx";
import PageMeta from "../../components/PageMeta/PageMeta.jsx";

import { ROUTES } from "../../config/routes.js";

function Contact() {
  const { t, language } = useOutletContext();

  return (
    <>
      <PageMeta
        title={t.seo.contact.title}
        description={t.seo.contact.description}
        language={language}
        path={ROUTES.contact}
      />

      <Page>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>
      </Page>
    </>
  );
}

export default Contact;
