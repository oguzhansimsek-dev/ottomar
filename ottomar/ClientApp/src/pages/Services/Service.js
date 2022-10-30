//* Components
import PageTitle from "../../components/PageTitle";

//* Style files
import "./index.scss";
import { ArrowRightSFillIcon } from "../../assets/icons";

//* node modules
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import serviceImage from "../../assets/uploads/page-title-bg.jpeg";

const Service = () => {
  const serviceTitle = "hizmet 1 lasflasmd aslkdfjl askdfjlasdf";

  return (
    <section>
      <PageTitle title="Hizmet Başlığı" />
      <Container className="page-container">
        <Row>
          <Col sm="12" md="4" lg="4">
            <h4>Diğer Hizmetlerimiz</h4>
            <ul>
              <li className="d-flex align-items-center">
                <ArrowRightSFillIcon />
                <Link to="/hizmet/hizmet-1" className="other-service-link">
                  {serviceTitle.substring(0, 30)}
                  {serviceTitle.length > 30 ? "..." : ""}
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <ArrowRightSFillIcon />
                <Link to="/hizmet/hizmet-2" className="other-service-link">
                  hizmet 2
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <ArrowRightSFillIcon />
                <Link to="/hizmet/hizmet-3" className="other-service-link">
                  hizmet 2
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="8" lg="8">
            <img
              src={serviceImage}
              alt="hizmet-başlık"
              width="100%"
              height="400px"
              className="mb-3"
            />

            <p>
              Hizmet açıklaması uzun Hizmet açıklaması uzun Hizmet açıklaması
              uzun Hizmet açıklaması uzun Hizmet açıklaması uzun Hizmet
              açıklaması uzun Hizmet açıklaması uzun Hizmet açıklaması uzun
              Hizmet açıklaması uzun Hizmet açıklaması uzun Hizmet açıklaması
              uzun Hizmet açıklaması uzun Hizmet açıklaması uzun{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Service;
