import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Timeline from "./components/Timeline";
import GroupCompanies from "./components/GroupCompanies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Products />
      <Timeline />
      <GroupCompanies />
      <Footer />
    </div>
  );
}

export default App;
