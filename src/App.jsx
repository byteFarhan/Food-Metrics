import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </>
  );
}

export default App;
