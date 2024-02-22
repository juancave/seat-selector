import React from 'react';
import './Seat.css';
import { SeatState, Seat as SeatType } from '../../types';

interface Props {
  readonly seat: SeatType;
}

const Seat: React.FC<Props> = (p: Props) => {
  return (
    <button disabled={p.seat.state === SeatState.BUSY} type='button' onClick={() => console.log('Seat', p.seat)} className="seat-container">
      <p>{p.seat.name}</p>
    </button>
  );
};

export default Seat;
