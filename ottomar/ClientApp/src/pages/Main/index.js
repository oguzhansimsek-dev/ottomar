//* Components
import ProductList from "../../components/ProductList";

//* Styles files
import "./index.scss";

//* node_modules
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <section className="page-container">
      <Container className="mb-3 showcase">
        <Row>
          <Col
            sm="12"
            md="12"
            lg="12"
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <h6>Sizin İçin Seçtiğimiz Ürünler</h6>
            <h2>ÜRÜNLERİMİZ</h2>
          </Col>
        </Row>
      </Container>
      <ProductList />
    </section>
  );
};
export default Main;
