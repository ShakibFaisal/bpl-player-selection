import React, { use } from "react";
import logo from "../../assets/user 1.png";
import report from '../../assets/report-1.png'

const AvailablePlayers = ({ playerPromise }) => {
  const playerdata = use(playerPromise);
  

  return (
    <div className="max-w-[1200px] mx-auto mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 ">
        {playerdata.map(palyer => <div className="card bg-base-100  shadow-sm p-4">
        <figure>
          <img className="w-full  h-[240px]"
            src={palyer.playerImg}
            alt=""
          />
        </figure>
        <div className="">
          <div className="flex mt-2.5">
            <img className="w-[28px] mr-2" src={logo} alt="" />
            <h2 className="card-title">{palyer.playerName}</h2>
          </div>

           <div className="flex justify-between mt-2.5">
              <div className="flex items-center">
                 <img className="w-[20px] h-[20px] mr-2" src={report} alt="" />
                 <h3 className="opacity-50">{palyer.country}</h3>
              </div>
              <button className="btn btn-soft">{palyer.playerType}</button>
           </div>
           <h3 className="font-bold">Rating <span>{palyer.rating}</span></h3>
           <div className="flex justify-between items-center mt-2.5">
             <p className="font-bold">{palyer.battingType}</p>
             <p className="opacity-50">{palyer.bowlingType}</p>
           </div>
          <div className="card-actions  flex justify-between mt-2.5  ">
            <h3 className="font-bold">Price: $<span>{palyer.price}</span></h3>
            <button className="btn btn-">Choose Player</button>
          </div>
        </div>
      </div>)}
      
    </div>
  );
};

export default AvailablePlayers;
