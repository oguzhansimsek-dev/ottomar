//* Style files
import "./index.scss";

//* node_modules
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const PageTitle = (props) => {
  return (
    <div className="page-title">
      <Container className="d-flex align-items-end py-4 h-100 justify-content-center px-0">
        <Row className="w-100">
          <Col md="12" lg="12" className="d-flex justify-content-between">
            <h1>{props.title}</h1>
            <Breadcrumb className="d-flex align-items-center">
              <BreadcrumbItem>
                <Link to="/" className="breadcrumb-link">
                  Anasayfa
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem className="passive">{props.title}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <div className="bg-container"></div>
    </div>
  );
};

export default PageTitle;
