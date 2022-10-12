import React from "react"
import Homepage from "./pages/Homepage/Homepage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
// import {seedRecipes} from "./data/seed";

// seedRecipes();

function App() {
  return (
    <div className={ `d-flex flex-column ${ styles.appContainer }` }>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
