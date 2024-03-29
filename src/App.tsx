import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="container">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default App;
