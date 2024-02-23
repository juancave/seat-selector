import React from 'react';
import './SeatRow.css';
import { SeatsRow } from '../../types';
import Seat from '../Seat';

interface Props {
  readonly data: SeatsRow;
}

const SeatRow: React.FC<Props> = (p: Props) => {
  return (
    <div className="seat-row-container">
      <h2>{p.data.title}</h2>
      <div className='seats-container'>
        <div className='seats-section'>
          {p.data.leftSeats.map((seat, index) => (<Seat rowName={p.data.title} key={index} seat={seat} />))}
        </div>
        <div className='seats-section'>
          {p.data.rightSeats.map((seat, index) => (<Seat rowName={p.data.title} key={index} seat={seat} />))}
        </div>
      </div>
    </div>
  );
};

export default SeatRow;
