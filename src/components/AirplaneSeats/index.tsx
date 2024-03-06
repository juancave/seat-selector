import React from 'react';
import { AirplaneData, FlightInformation } from 'types';
import Section from 'components/Section';
import { ContextType, SeatsContext } from 'context';

interface Props {
  readonly data: FlightInformation;
  readonly sections: AirplaneData[];
}

const AirplaneSeats: React.FC<Props> = (p: Props) => {
  return (
    <SeatsContext.Provider value={ContextType.AIRPLANE}>
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="py-32 rounded-t-full bg-zinc-50 border"></div>
          <div className="border-x border-gray-300 px-4 bg-zinc-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-4">
            {p.sections.map((section, index) => (
              <Section key={index} data={section} />
            ))}
          </div>
        </div>
      </div>
    </SeatsContext.Provider>
  );
};

export default AirplaneSeats;
