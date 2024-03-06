import React from 'react';
import { SeatsSectionData } from 'types';
import Section from 'components/Section';
import { ContextType, SeatsContext } from 'context';

interface Props {
  readonly sections: SeatsSectionData[];
}

const TheaterSeats: React.FC<Props> = (p: Props) => {
  return (
    <SeatsContext.Provider value={ContextType.THEATER}>
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="flex justify-center items-center font-bold py-6 rounded-sm bg-zinc-50 border mb-8">
            Scenery
          </div>
          <div className="border rounded-sm border-gray-300 px-4 bg-zinc-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-4">
            {p.sections.map((section, index) => (
              <Section key={index} data={section} />
            ))}
          </div>
        </div>
      </div>
    </SeatsContext.Provider>
  );
};

export default TheaterSeats;
