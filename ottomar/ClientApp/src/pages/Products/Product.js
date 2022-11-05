//* node_modules
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//* Components
import PageTitle from "../../components/PageTitle";

//* Reducers
import { getProductByProductId } from "../../app/reducers/productSlice";

const Product = (props) => {
  const { productLink } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  async function fetchProduct(pLink) {
    const url =
      "https://localhost:7292/api/product/GetProductByProductLink/" + pLink;
    await fetch(url)
      .then((response) => response.json())
      .then((res) => dispatch(getProductByProductId(res)));
  }

  useEffect(() => {
    fetchProduct(productLink);
  }, []);
  console.log(product);
  return (
    <section>
      <PageTitle title={product.productName} />
      <Container className="page-container">
        <Row>
          <Col sm="12" md="8" lg="8"></Col>
          <Col sm="12" md="4" lg="4">
            <h5>
              <b>{product.productName}</b>
            </h5>
            <hr></hr>
            <span>Ürün Kodu: {product.productCode}</span>
            <br />
            <span>
              Stok Durumu:{" "}
              {product.stock === 0 ? (
                <b style={{ color: "red", fontWeight: "bold" }}>Stokta Yok</b>
              ) : (
                product.stock + " Adet"
              )}
            </span>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Product;
