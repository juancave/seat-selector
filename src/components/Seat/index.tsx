import React from 'react';
import './Seat.css';
import { SeatState, Seat as SeatType } from '../../types';

interface Props {
  readonly seat: SeatType;
  readonly rowName: string;
}

const Seat: React.FC<Props> = (p: Props) => {
  const [showInfo, setShowInfo] = React.useState<boolean>(false);
  return (
    <div className="seat-container">  
      {showInfo && (
        <div className='seat-information'>
          <div className='seat-information-element'>
            <b>Seat: </b><span>{p.rowName}{p.seat.name}</span>
          </div>
          <div className='seat-information-element'>
            <b>Price: </b><span>{p.seat.price}</span>
          </div>
          <div className='seat-information-element'>
            <b>State: </b><span>{p.seat.state}</span>
          </div>
        </div>
      )}
      <button
        className="seat-button"
        onFocus={() => setShowInfo(true)}
        onBlur={() => setShowInfo(false)}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        disabled={p.seat.state === SeatState.BUSY}
        type='button' onClick={() => console.log('Seat', p.seat)}
      >
        <p>{p.seat.name}</p>
      </button>
    </div>
  );
};

export default Seat;
