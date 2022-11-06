//* node_modules
import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/RootComponents/Spinner";
import { Carousel } from "react-responsive-carousel";

//* Components
import PageTitle from "../../components/PageTitle";
import ProductList from "../../components/ProductList";

//* Reducers
import {
  getProductByProductId,
  getProducts,
} from "../../app/reducers/productSlice";

const Product = () => {
  let location = useLocation();
  const { productLink } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const sameProducts = useSelector((state) => state.products.value);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProduct(pLink) {
    setIsLoading(true);
    const url =
      "https://localhost:7292/api/product/GetProductByProductLink/" + pLink;
    await fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getProductByProductId(res));
        fetchProductsByCategoryId(res.categoryId);
        setIsLoading(false);
      });
  }

  async function fetchProductsByCategoryId(id) {
    setIsLoading(true);
    const url =
      "https://localhost:7292/api/product/getproductsbycategoryid/" + id;

    await fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getProducts(res));
        setIsLoading(false);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct(productLink);
    console.log(sameProducts);
  }, [location]);

  const ShowProductDetail = (p) => {
    return (
      <Container className="page-container">
        <Row className="mb-4">
          <Col sm="12" md="8" lg="8">
            <Carousel>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwryxFfYgPyHD3zskTOzCeb46CAGESFt5NA&usqp=CAU" />
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwryxFfYgPyHD3zskTOzCeb46CAGESFt5NA&usqp=CAU" />
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwryxFfYgPyHD3zskTOzCeb46CAGESFt5NA&usqp=CAU" />
              </div>
            </Carousel>
          </Col>
          <Col sm="12" md="4" lg="4">
            <h5>
              <b>{p.productName}</b>
            </h5>
            <hr></hr>
            <span>Ürün Kodu: {p.productCode}</span>
            <br />
            <span>
              Stok Durumu:{" "}
              {p.stock === 0 ? (
                <b style={{ color: "red", fontWeight: "bold" }}>Stokta Yok</b>
              ) : (
                p.stock + " Adet"
              )}
            </span>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="same-products-title">
              <h4>Benzer Ürünler</h4>
              <ProductList products={sameProducts} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <section>
      <PageTitle title={product.productName} />
      {isLoading === true ? <Spinner /> : ShowProductDetail(product)}
    </section>
  );
};
export default Product;
