//* Components
import PageTitle from "../../components/PageTitle";

//* node_modules
import { Container, Row, Col } from "reactstrap";

const Product = () => {
  return (
    <section>
      <PageTitle title="Ürün Başlığı" />
      <Container className="page-container">
        <Row>
          <Col sm="12" md="8" lg="8"></Col>
          <Col sm="12" md="4" lg="4">
            <h5>
              <b>Ürün Başlığı</b>
            </h5>
            <hr></hr>
            <span>Ürün Kodu: 12342</span>
            <br />
            <span>
              Stok Durumu: <b>Stokta var</b>
            </span>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Product;
