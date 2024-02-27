import React from 'react';
import { SeatsRow } from 'types';
import Seat from 'components/Seat';

interface Props {
  readonly data: SeatsRow;
}

const SeatRow: React.FC<Props> = (p: Props) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <h2 className='w-5'>{p.data.title}</h2>
      <div className='flex gap-12 w-full'>
        <div className='flex items-center justify-around gap-4 w-2/4'>
          {p.data.leftSeats.map((seat, index) => (<Seat key={index} seat={seat} />))}
        </div>
        <div className='flex items-center justify-around gap-4 w-2/4'>
          {p.data.rightSeats.map((seat, index) => (<Seat key={index} seat={seat} />))}
        </div>
      </div>
      <h2 className='w-5'>{p.data.title}</h2>
    </div>
  );
};

export default SeatRow;
