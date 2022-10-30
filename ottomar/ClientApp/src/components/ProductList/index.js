//* node_modules

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//* Style files
import "./index.scss";

const ProductList = () => {
  let productName = "Ürün Adı safdmlasdfa asdkfm akfmd alksdjfk aslkdfasdf";

  return (
    <section>
      <Container>
        <Row>
          <Col sm="12" md="3" lg="3">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="ürün başlık"
                height="165px"
              />
              <CardBody className="px-0 pt-0">
                <Link to="/urun/1" className="go-to-btn">
                  Ürünü incele
                </Link>
                <p>
                  {productName.substring(0, 30)}
                  {productName.length > 30 ? "..." : ""}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="3" lg="3">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="ürün başlık"
                height="165px"
              />
              <CardBody className="px-0 pt-0">
                <Link to="/product/productId" className="go-to-btn">
                  Ürünü incele
                </Link>
                <p>Ürün Adı</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="3" lg="3">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="ürün başlık"
                height="165px"
              />
              <CardBody className="px-0 pt-0">
                <Link to="/product/productId" className="go-to-btn">
                  Ürünü incele
                </Link>
                <p>Ürün Adı</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="3" lg="3">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="ürün başlık"
                height="165px"
              />
              <CardBody className="px-0 pt-0">
                <Link to="/product/productId" className="go-to-btn">
                  Ürünü incele
                </Link>
                <p>Ürün Adı</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="3" lg="3">
            <Card className="border-0">
              <img
                src="https://www.ottomardogaltas.com.tr/image/cache/data/golden%20onixs/Golden%20Oniks%20OTTOMAR%20DO%C4%9EALTA%C5%9E%20B%C4%B0LEC%C4%B0K-800x500.jpeg"
                alt="ürün başlık"
                height="165px"
              />
              <CardBody className="px-0 pt-0">
                <Link to="/product/productId" className="go-to-btn">
                  Ürünü incele
                </Link>
                <p>Ürün Adı</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
