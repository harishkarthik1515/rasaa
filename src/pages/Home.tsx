import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import Timeline from "../components/Timeline";
import GroupCompanies from "../components/GroupCompanies";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Products />
      <Timeline />
      <GroupCompanies />
    </div>
  );
};

export default Home;