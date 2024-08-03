import "./App.css";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";

function App() {
  //ana komponent;tüm komponentler app içerisinde render edilecek
  return (

    <div>
      <Header />
     <Sliders/>
     <Categories/>
      <Policy />
      <Footer />
    </div>

  );
}

export default App;
