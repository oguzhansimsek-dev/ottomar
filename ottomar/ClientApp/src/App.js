//* node_modules
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//* Pages
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import HumanResources from "./pages/HumanResources";
import News from "./pages/News";
import Products from "./pages/Products";
import Product from "./pages/Products/Product";
import Services from "./pages/Services";
import Service from "./pages/Services/Service";

//* Components
import Header, { MobileNav } from "./components/Header";
import Footer from "./components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./pages/Products/productSlice";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);

  async function fetchProducts() {
    let url = "https://localhost:7292/api/product/getproducts";
    await fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getProducts(res));
      });

    //console.log(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
      {window.innerWidth < 990 ? <MobileNav /> : <Header />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/insan-kaynaklari" element={<HumanResources />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/galeri/:galleryType" element={<Gallery />} />
        <Route path="/haberler" element={<News />} />

        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmet/:hizmetId" element={<Service />} />

        <Route exact path="/urunler/:category" element={<Products />} />
        <Route exact path="/urun/:urunId" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
