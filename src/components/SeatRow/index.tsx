import React from 'react';
import { SeatPosition, SeatsRow, Seat as SeatType } from 'types';
import Seat from 'components/Seat';

interface Props {
  readonly data: SeatsRow;
}

const SeatRow: React.FC<Props> = (p: Props) => {
  const leftSeats = p.data.seats.filter((seat) => seat.position === SeatPosition.LEFT);
  const rightSeats = p.data.seats.filter((seat) => seat.position === SeatPosition.RIGHT);

  return (
    <div className="flex items-center gap-4 w-full">
      <h2 className='w-6'>{p.data.title}</h2>
      <div className='flex gap-12 w-full'>
        <SeatsGroup seats={leftSeats} />
        <SeatsGroup seats={rightSeats} />
      </div>
      <h2 className='w-6'>{p.data.title}</h2>
    </div>
  );
};

const SeatsGroup: React.FC<{
  seats: SeatType[],
}> = ({ seats }) => {
  return (
    <div className='flex items-center justify-around gap-4 w-2/4'>
      {seats.map((seat, index) => (<Seat key={index} seat={seat} />))}
    </div>
  );
};

export default SeatRow;
