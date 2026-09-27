import { useOutletContext } from "react-router-dom";

import Page from "../../components/Page/Page.jsx";
import PageMeta from "../../components/PageMeta/PageMeta.jsx";

import HeroSection from "./sections/HeroSection.jsx";
import InfoSection from "./sections/InfoSection.jsx";

import "./Home.css";

function Home() {
  const { t, language } = useOutletContext();

  return (
    <>
      <PageMeta
        title={t.seo.home.title}
        description={t.seo.home.description}
        language={language}
      />

      <Page>
        <HeroSection t={t} />
        <InfoSection t={t} />
      </Page>
    </>
  );
}

export default Home;
