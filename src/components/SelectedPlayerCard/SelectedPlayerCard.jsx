
const SelectedPlayerCard = ({player,removeplayer}) => {
    const handlePlayers=()=>{
         removeplayer(player)
    }
    return (
        <div className='flex  justify-between items-center mt-8 p-6 border border-[#1313131a] rounded-2xl shadow-2xl shadow-black'>
            <div className='flex gap-5'>
                <img className='h-[80px] w-[80px] rounded-2xl' src={player.playerImg} alt="img" />
                <div>
                    <h3 className='text-2xl font-bold'>{player.playerName}</h3>
                    <h3 className='opacity-50'>{player.playerType}</h3>
                </div>
            </div>
            <img onClick={handlePlayers} className='w-[24px] h-[24px] cursor-pointer' src="https://i.ibb.co.com/7drPRW2x/Frame.png" alt="" />
        </div>
    );
};

export default SelectedPlayerCard;