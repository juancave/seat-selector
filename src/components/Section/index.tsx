import React from 'react';
import SeatRow from 'components/SeatRow';
import { AirplaneData, isSeatType } from 'types';
import EmergencyExit from 'components/EmergencyExit';
import SectionHeaders from 'components/SectionHeaders';

interface Props {
  readonly data: AirplaneData;
}

const Section: React.FC<Props> = (p: Props) => {
  return (
    <div className="border-gray-300 py-4">
      <SectionHeaders data={p.data} />
      <div className='flex flex-col items-center gap-4'>
        {p.data.rows.map((row, index) => (isSeatType(row) ? <SeatRow key={index} data={row} /> : <EmergencyExit key={index} data={row} />))}
      </div>
    </div>
  );
};

export default Section;
