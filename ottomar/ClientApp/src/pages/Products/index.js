//* node_modules
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//* Components
import PageTitle from "../../components/PageTitle";
import ProductList from "../../components/ProductList";

//* Reducers
import { getProducts } from "./productSlice";

const Products = (props) => {
  let params = useParams();
  const dispatch = useDispatch();

  async function fetchProductsByCategoryId(id) {
    const url =
      "https://localhost:7292/api/product/getproductsbycategoryid/" + id;

    await fetch(url)
      .then((response) => response.json())
      .then((res) => dispatch(getProducts(res)));
  }

  useEffect(() => {
    fetchProductsByCategoryId(1);
  }, []);

  const products = useSelector((state) => state.products.value);

  // BAŞLIK OLUŞTURMA
  function selectTitle(category) {
    let title = "";
    const titles = [
      { id: 1, param: "blok", title: "Blok" },
      { id: 2, param: "plaka", title: "Plaka" },
      { id: 3, param: "traverten", title: "Traverten" },
      { id: 4, param: "yardimci-ekipman", title: "Yardımcı Ekipman" },
    ];

    titles.forEach((elem) => {
      if (elem.param === category) {
        //console.log(elem.title);
        title = elem.title;
      }
    });
    return title;
  }

  // function editTitle(category) {
  //   let newTitle = category.split("-");
  //   let result = "";
  //   newTitle.forEach((t) => {
  //     t = t.charAt(0).toUpperCase() + t.slice(1);
  //     result = result + " " + t;
  //   });

  //   return result;
  // }

  return (
    <section>
      <PageTitle title={selectTitle(params.category)} />
      <div className="page-container">
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Products;
