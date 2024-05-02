import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ImgHeader from "./components/ImgHeader";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Heading2 from "./components/Heading2";
import Heading3 from "./components/Heading3";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <div className="mx-2">
      <Nav/>
      <div className="bg-pink-200 justify-items-center grid grid-cols-1 lg:grid-cols-2">
        <Header />
      <ImgHeader/>
      </div>
      <Heading2/>
      <Categories/>
      <Heading3/>
      <Product/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
