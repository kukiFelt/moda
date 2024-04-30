import Banner from "./components/Banner";
import ImgBanner from "./components/ImgBanner";
import Init from "./components/Init";


export default function Home() {
  return (
    <div>
      <Init />
      <div className="justify-items-center grid grid-cols-2">
        <Banner />
      <ImgBanner/>
      </div>
      
    </div>
  );
}
