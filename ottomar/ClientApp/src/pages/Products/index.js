//* node_modules
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";

//*Pages
import PageNotFound from "../PageNotFound";

//* Components
import PageTitle from "../../components/PageTitle";
import ProductList from "../../components/ProductList";
import CustomSpinner from "../../components/RootComponents/Spinner";

//* Reducers
import { getProducts } from "../../app/reducers/productSlice";
import { currentCategory as setCurrentCategory } from "../../app/reducers/categorySlice";

const Products = (props) => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const currentCategory = useSelector((state) => state.categories.current);
  const products = useSelector((state) => state.products.value);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Parametre olarak gelen string ile kategori bilgilerini getir. currentCategory güncelle.
  async function fetchCategoryByCategoryLink(cLink) {
    const url =
      "https://localhost:7292/api/category/GetCategoryByCategoryLink/" + cLink;

    await fetch(url)
      .then((response) => response.json())
      .then((res) => dispatch(setCurrentCategory(res)));
  }

  // Kategoriye göre Ürünleri getir.
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
    if (currentCategory.categoryId == null) {
      fetchCategoryByCategoryLink(category);
    }

    fetchProductsByCategoryId(currentCategory.categoryId);
  }, [category]);

  return (
    <section>
      <PageTitle title={currentCategory.categoryName} />
      <div className="page-container">
        {isLoading ? <CustomSpinner /> : <ProductList products={products} />}
      </div>
    </section>
  );
};

export default Products;
