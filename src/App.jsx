import "./App.css";
import AuthPage from "./pages/AuthPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import React from "react";

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
    <BlogDetailsPage/>
    </React.Fragment>
    </div>

  );
}

export default App;
