import Section from "../../../components/Section/Section.jsx";

function InfoSection({ t }) {
  return (
    <Section className="info-section">
      <div className="info-section__content">
        <h2 className="info-section__title">{t.home.info.title}</h2>

        <p className="info-section__text">{t.home.info.text}</p>
      </div>
    </Section>
  );
}

export default InfoSection;
