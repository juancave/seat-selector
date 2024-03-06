import React from 'react';
import SeatRow from 'components/SeatRow';
import { AirplaneData } from 'types';
import EmergencyExit from 'components/EmergencyExit';
import SectionHeaders from 'components/SectionHeaders';
import { SeatsContext, ContextType } from 'context';

interface Props {
  readonly data: AirplaneData;
}

const Section: React.FC<Props> = (p: Props) => {
  const seatsType = React.useContext(SeatsContext);

  return (
    <div
      className={`border-gray-300 ${seatsType === ContextType.AIRPLANE ? 'pt-4' : 'pt-2'}`}
    >
      <SectionHeaders data={p.data} />
      <div
        className={`flex flex-col items-center ${seatsType === ContextType.AIRPLANE ? 'gap-4' : 'gap-2'}`}
      >
        {p.data.rows.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.emergencyExit && <EmergencyExit data={row.emergencyExit} />}
              <SeatRow data={row} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
