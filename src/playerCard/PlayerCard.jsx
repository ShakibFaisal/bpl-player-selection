import React, { useState } from "react";
import logo from "../assets/user 1.png";
import report from "../assets/report-1.png";
import { toast } from "react-toastify";

const PlayerCard = ({ player,setCoin,coin,selectedPlayers,setSelectedPlayers }) => {
    const [isSelected,setisSelected]=useState(false);
    const handleCoin=()=>{
       if (coin<player.price) {
         toast("Not Enough Coin")
       }else{
           setCoin(coin-player.price);
       }
    }
    const handleAvailable=()=>{
         if (selectedPlayers.length<=5) {
             const newPlayer=[...selectedPlayers, player];
             setSelectedPlayers(newPlayer)
         }
         else{
          toast("Already Selected maximum players");
          setisSelected(false)
         }
    }
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img className="w-full  h-[240px]" src={player.playerImg} alt="" />
      </figure>
      <div className="">
        <div className="flex mt-2.5">
          <img className="w-[28px] mr-2" src={logo} alt="" />
          <h2 className="card-title">{player.playerName}</h2>
        </div>

        <div className="flex justify-between mt-2.5">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px] mr-2" src={report} alt="" />
            <h3 className="opacity-50">{player.country}</h3>
          </div>
          <button className="btn btn-soft">{player.playerType}</button>
        </div>
        <h3 className="font-bold">
          Rating <span>{player.rating}</span>
        </h3>
        <div className="flex justify-between items-center mt-2.5">
          <p className="font-bold">{player.battingType}</p>
          <p className="opacity-50">{player.bowlingType}</p>
        </div>
        <div className="card-actions  flex justify-between mt-2.5  ">
          <h3 className="font-bold">
            Price: $<span>{player.price}</span>
          </h3>
          <button disabled={isSelected} onClick={()=>{setisSelected(true); handleCoin(); handleAvailable()} }  className="btn btn-">{isSelected===true?"Selected":"Choose Player"}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
