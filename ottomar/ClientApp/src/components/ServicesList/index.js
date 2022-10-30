//* Style files
import "./index.scss";

//* node modules
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const ServicesList = () => {
  let serviceDetail =
    "Lorem Ipsum aksjfasd fkalsdfmlaks dmflkasmdflk amsdfmlaksmdfamsdf asmflmasdf lSAFNLSADF SLDKFM";

  return (
    <section>
      <Container className="page-container">
        <Row>
          <Col sm="12" md="4" lg="4">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="hizmet başlık"
                height="220px"
                className="mb-2"
              />
              <CardBody className="px-0 pt-0 ">
                <Link to="/hizmet/1" className="service-title">
                  <h4>Hizmet Başlık</h4>
                </Link>
                <p> {serviceDetail.substring(0, 85)}... </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesList;
