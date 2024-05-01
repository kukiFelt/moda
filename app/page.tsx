import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Finish from "./components/Finish";
import ImgBanner from "./components/ImgBanner";
import ImgBanner2 from "./components/ImgBanner2";
import Init from "./components/Init";
import Shopping from "./components/Shopping";
import TextShop from "./components/TextShop";


export default function Home() {
  return (
    <div className="mx-2">
      <Init />
      <div className="justify-items-center grid grid-cols-1 lg:grid-cols-2">
        <Banner />
      <ImgBanner/>
      </div>
      <Banner2/>
      <ImgBanner2/>
      <TextShop/>
      <Shopping/>
      <Blog/>
      <Contact/>
      <Finish/>
    </div>
  );
}
