import React from 'react';
import { SeatsRow } from '../../types';
import Seat from '../Seat';

interface Props {
  readonly data: SeatsRow;
}

const SeatRow: React.FC<Props> = (p: Props) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className='w-5'>{p.data.title}</h2>
      <div className='flex gap-12'>
        <div className='flex items-center gap-4'>
          {p.data.leftSeats.map((seat, index) => (<Seat rowName={p.data.title} key={index} seat={seat} />))}
        </div>
        <div className='flex items-center gap-4'>
          {p.data.rightSeats.map((seat, index) => (<Seat rowName={p.data.title} key={index} seat={seat} />))}
        </div>
      </div>
    </div>
  );
};

export default SeatRow;
