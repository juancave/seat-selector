import React from 'react';
import { AirplaneData } from 'types';
import { SeatsContext, ContextType } from 'context';

interface Props {
  readonly data: AirplaneData;
}

const SectionHeader: React.FC<{
  readonly headers: string[];
}> = ({ headers }) => {
  return (
    <div className="flex items-center justify-around gap-4 w-2/4">
      {headers.map((header, index) => (
        <h2 className="font-bold" key={index}>
          {header}
        </h2>
      ))}
    </div>
  );
};

const SectionHeaders: React.FC<Props> = (p: Props) => {
  const seatsType = React.useContext(SeatsContext);

  return (
    <>
      <h1
        className={`text-center font-bold ${seatsType === ContextType.AIRPLANE ? 'text-xl mb-3' : 'text-sm mb-1'}`}
      >
        {p.data.title}
      </h1>
      {p.data.leftHeaders && p.data.rightHeaders && (
        <div className="flex items-center gap-4 w-full mb-3">
          <div className="w-6"></div>
          <div className="flex gap-12 w-full">
            <SectionHeader headers={p.data.leftHeaders} />
            <SectionHeader headers={p.data.rightHeaders} />
          </div>
          <div className="w-6"></div>
        </div>
      )}
    </>
  );
};

export default SectionHeaders;
