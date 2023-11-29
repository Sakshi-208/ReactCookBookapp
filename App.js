import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meals from "./components/Meals";
import Newsletter from "./components/Newsletter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meals />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
