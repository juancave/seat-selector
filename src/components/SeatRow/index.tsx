import React from 'react';
import { SeatPosition, SeatsRow, Seat as SeatType } from 'types';
import Seat from 'components/Seat';
import { SeatsContext, ContextType } from 'context';

interface Props {
  readonly data: SeatsRow;
}

const SeatRow: React.FC<Props> = (p: Props) => {
  const seatsType = React.useContext(SeatsContext);
  const sections = p.data.sectionsLocations.map(
    (sectionLocation: SeatPosition) =>
      p.data.seats.filter((seat) => seat.position === sectionLocation),
  );

  return (
    <div className="flex items-center gap-4 w-full">
      <h2 className="w-6">{p.data.title}</h2>
      <div
        className={`flex w-full ${seatsType === ContextType.AIRPLANE ? 'gap-12' : 'gap-7'}`}
      >
        {sections.map((section, index) => (
          <SeatsGroup key={index} seats={section} />
        ))}
      </div>
      <h2 className="w-6">{p.data.title}</h2>
    </div>
  );
};

const SeatsGroup: React.FC<{
  seats: SeatType[];
}> = ({ seats }) => {
  const seatsType = React.useContext(SeatsContext);

  return (
    <div
      className={`flex items-center justify-around w-2/4 ${seatsType === ContextType.AIRPLANE ? 'gap-4' : 'gap-2'}`}
    >
      {seats.map((seat, index) => (
        <Seat key={index} seat={seat} />
      ))}
    </div>
  );
};

export default SeatRow;
