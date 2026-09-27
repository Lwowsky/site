import Section from "../../../components/Section/Section.jsx";

function HeroSection({ t }) {
  return (
    <Section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">{t.home.hero.title}</h1>

        <p className="hero-section__text">{t.home.hero.text}</p>
      </div>
    </Section>
  );
}

export default HeroSection;
