import React, { use } from "react";


import PlayerCard from "../../playerCard/PlayerCard";

const AvailablePlayers = ({ playerPromise,setCoin ,coin,selectedPlayers,setSelectedPlayers}) => {
  const playerdata = use(playerPromise);
  

  return (
    <div className="max-w-[1200px] mx-auto mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 ">
      {playerdata.map(player => <PlayerCard setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} player={player}></PlayerCard> )}
    </div>
        )
      }
export default AvailablePlayers;
