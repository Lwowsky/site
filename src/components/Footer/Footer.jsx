import Container from "../Container/Container.jsx";

import "./Footer.css";

function Footer({ t }) {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <p className="footer__text">© 2026 My Site. {t.footer.copyright}</p>
      </Container>
    </footer>
  );
}

export default Footer;
