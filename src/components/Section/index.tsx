import React from 'react';
import SeatRow from '../SeatRow';
import { AirplaneData } from '../../types';
import EmergencyExit from '../EmergencyExit';

interface Props {
  readonly data: AirplaneData;
}

const Section: React.FC<Props> = (p: Props) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <h1 className='m-0'>{p.data.title}</h1>
      <div className='flex flex-col items-center'>
        {p.data.rows.map((row, index) => ('title' in row ? <SeatRow key={index} data={row} /> : <EmergencyExit key={index} data={row} />))}
      </div>
    </div>
  );
};

export default Section;
