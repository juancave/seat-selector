import React from 'react';
import { SeatState, Seat as SeatType } from 'types';

interface Props {
  readonly seat: SeatType;
  readonly rowName: string;
}

const Seat: React.FC<Props> = (p: Props) => {
  const [showInfo, setShowInfo] = React.useState<boolean>(false);
  const isDisabled = [SeatState.BUSY, SeatState.UNAVAILABLE].includes(p.seat.state);
  const showDetail = () => setShowInfo(true);
  const hideDetail = () => setShowInfo(false);
  return (
    <div className="relative">  
      {showInfo && (
        <div className='flex flex-col self-start absolute gap-1 w-fit h-fit p-2 z-10 bg-gray-300 rounded text-base left-12'>
          <div className='flex gap-1'>
            <span className="font-bold">Seat: </span><span>{p.rowName}{p.seat.name}</span>
          </div>
          <div className='flex gap-1'>
            <span className="font-bold">Price: </span><span>{p.seat.price}</span>
          </div>
          <div className='flex gap-1'>
            <span className="font-bold">State: </span><span>{p.seat.state}</span>
          </div>
        </div>
      )}
      <button
        className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
        onFocus={showDetail}
        onBlur={hideDetail}
        onMouseEnter={showDetail}
        onMouseLeave={hideDetail}
        disabled={p.seat.state === SeatState.BUSY}
        type='button' onClick={() => console.log('Seat', p.seat)}
      >
        <p>{p.seat.name}</p>
      </button>
    </div>
  );
};

export default Seat;
