import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import ImgBanner from "./components/ImgBanner";
import ImgBanner2 from "./components/ImgBanner2";
import Init from "./components/Init";
import Shopping from "./components/Shopping";
import TextShop from "./components/TextShop";


export default function Home() {
  return (
    <div>
      <Init />
      <div className="justify-items-center grid grid-cols-1 lg:grid-cols-2">
        <Banner />
      <ImgBanner/>
      </div>
      <Banner2/>
      <ImgBanner2/>
      <TextShop/>
      <Shopping/>
    </div>
  );
}
