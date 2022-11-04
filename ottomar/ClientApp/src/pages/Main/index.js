//* node_modules
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

//* Components
import ProductList from "../../components/ProductList";

//* Styles files
import "./index.scss";

//*Reducers
import { getProducts } from "../../app/reducers/productSlice";

const Main = () => {
  const dispatch = useDispatch();

  async function fetchProducts() {
    let url = "https://localhost:7292/api/product/getproducts";
    await fetch(url)
      .then((response) => response.json())
      .then((res) => dispatch(getProducts(res)));
  }
  const products = useSelector((state) => state.products.value);

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <ProductList products={products} />
    </section>
  );
};
export default Main;
