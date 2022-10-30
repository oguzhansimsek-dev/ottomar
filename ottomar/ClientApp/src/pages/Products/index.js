//* node_modules
import React from "react";
import { useParams } from "react-router-dom";

//* Components
import PageTitle from "../../components/PageTitle";
import ProductList from "../../components/ProductList";

const Products = () => {
  let params = useParams();

  function selectTitle(category) {
    let title = "";
    const titles = [
      { param: "blok", title: "Blok" },
      { param: "plaka", title: "Plaka" },
      { param: "traverten", title: "Traverten" },
      { param: "yardimci-ekipman", title: "Yardımcı Ekipman" },
    ];

    titles.forEach((elem) => {
      if (elem.param === category) {
        console.log(elem.title);
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
        <ProductList />
      </div>
    </section>
  );
};

export default Products;
