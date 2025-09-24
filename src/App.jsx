import "./App.css";
import navimg from "./assets/logo.png";
import dollar from "./assets/dollar 1.png";
import bannerimg from "./assets/banner-main.png";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";
const fetchPlayer = async () => {
  const res = await fetch("/public/player.json");
  return await res.json();
};
function App() {
  const playerPromise = fetchPlayer();
  const [toggle,setToggle]=useState(true);
 
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
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mt-8">
         <h3 className="text-3xl font-bold">Available Players</h3>
         <div className="flex  gap-6">
          <button className={`${toggle&&'bg-[#e7fe29]'} btn `} onClick={()=>setToggle(true)}>Available</button>
          <button className={`${!toggle&&'bg-[#e7fe29]'} btn `}  onClick={()=>setToggle(false)}>Selected (0)</button>
         </div>
         
      </div>
      {toggle===true?<Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>:<SelectedPlayers></SelectedPlayers>}
      
    </>
  );
}

export default App;
