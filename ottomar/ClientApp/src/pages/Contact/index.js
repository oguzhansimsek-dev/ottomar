//* Components
import PageTitle from "../../components/PageTitle";
import ContactForm from "../../components/ContactForm";

//* Style files
import "./index.scss";

//* node_modules
import { Container, Row, Col } from "reactstrap";
import {
  Map2Icon,
  MobilePhoneIcon,
  OutlinePostOfficeIcon,
} from "../../assets/icons";

const Contact = () => {
  return (
    <section>
      <PageTitle title="İletişim" />
      <Container className="container-fluid contact m-0 p-0">
        <Row className="p-0 m-0">
          <Col
            sm="4"
            md="4"
            lg="4"
            className="address-bg text-center d-flex justify-content-center align-items-center flex-column"
          >
            <Map2Icon className="mb-2" />
            <h5 className="text-dark">
              <b>Adres</b>
            </h5>
            <p>
              Köprülü Mehmet Paşa Kervansarayı <br /> Bilecik Adapazarı
              Karayolu, 11130 Vezirhan Belediyesi/Bilecik <br /> Merkez/Bilecik,
              Türkiye
            </p>
          </Col>
          <Col
            sm="4"
            md="4"
            lg="4"
            className="tel-bg text-center d-flex align-items-center justify-content-center flex-column"
          >
            <MobilePhoneIcon className="mb-2" />
            <h5>
              <b>Telefon</b>
            </h5>
            <p>+90 532 723 54 03</p>
          </Col>
          <Col
            sm="4"
            md="4"
            lg="4"
            className="email-bg text-center d-flex align-items-center justify-content-center flex-column"
          >
            <OutlinePostOfficeIcon
              className="mb-2"
              style={{ fontSize: "45px", fill: "#fff" }}
            />
            <h5>
              <b>E-posta Adresimiz</b>
            </h5>
            <p>info@ottomardogaltas.com.tr - ottomardogaltas@gmail.com</p>
          </Col>
        </Row>
      </Container>

      <Container className="page-container">
        <Row>
          <Col sm="12" md="6" lg="6"></Col>
          <Col sm="12" md="5" lg="5">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
