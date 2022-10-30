//* node_modules
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//* Style files
import "./index.scss";
import logo from "../../assets/uploads/logo.png";
//require("/Users/oguzhan/Desktop/ottomar-dogaltas/src/assets/uploads/logo.png");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <Container>
          <Row>
            <Col md="6" lg="6">
              <Link to="/">
                <img
                  className="footer-logo"
                  src={logo}
                  alt="Ottomar Doğal Taş"
                />
              </Link>
              <div className="footer-text">
                <p>
                  ©Copyright Ottomar Doğaltaş © Tüm Hakları Saklıdır -{" "}
                  {new Date().getFullYear()}
                </p>
              </div>
            </Col>
            <Col md="6" lg="6" className="d-flex justify-content-end">
              <ul className="footer-menu">
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                |
                <li>
                  <Link to="/hizmetler">Hizmetler</Link>
                </li>
                |
                <li>
                  <Link to="/galeri/fotograf-galerisi">Foto Galeri</Link>
                </li>
                |
                <li>
                  <Link to="/iletisim">İletişim</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
