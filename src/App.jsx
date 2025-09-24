import "./App.css";
import navimg from "./assets/logo.png";
import dollar from "./assets/dollar 1.png";
import bannerimg from "./assets/banner-main.png";

function App() {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navimg} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn">
            <span>600000</span>Coin{" "}
            <img src={dollar} className="" alt="dollar" />
          </button>
        </div>
      </div>
      {/* banner section */}
      <section className="max-w-[1200px] mx-auto mt-10 rounded-3xl py-16  bg-[url(./assets/bg-shadow.png)] bg-[#131313]  flex gap-5 flex-col  items-center">
        <img src={bannerimg} alt="" />
        <h3 className="text-white text-3xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className="text-white opacity-50">Beyond Boundaries Beyond Limits</p>
        <div className="p-2 border border-amber-300 rounded-[15px]">
          <button className="btn bg-[#e7fe29] border-amber-300  font-bold rounded-[10px] hover:bg-amber-500  transition duration-600">
            Claim Free Credit
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
