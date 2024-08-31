import "./App.css";
import AuthPage from "./pages/AuthPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import React from "react";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  //ana komponent;tüm komponentler app içerisinde render edilecek
  return (

    <div>
      <React.Fragment>
    {/* <HomePage/> */}
    {/* <ShopPage/> */}
    {/* <ContactPage/> */}
    {/* <AuthPage/> */}
    {/* <BlogPage/> */}
    {/* <BlogDetailsPage/> */}
    <ProductDetailsPage/>
    
    </React.Fragment>
    </div>

  );
}

export default App;
