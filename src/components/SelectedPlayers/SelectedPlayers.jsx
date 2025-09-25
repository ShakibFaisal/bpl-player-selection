
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({selectedPlayers,removeplayer}) => {
    
    return (
          <> 
          <div className='max-w-[1200px] mx-auto mt-8 mb-8'>
             {selectedPlayers.map(player=><SelectedPlayerCard removeplayer={removeplayer} selectedPlayers={selectedPlayers} player={player}></SelectedPlayerCard>)}
          </div>
          
          
          
          </>
    );
};

export default SelectedPlayers;