import React from 'react';
import { AirplaneData } from '../../types';
import Section from '../Section';

interface Props {
  readonly name: string;
  readonly sections: AirplaneData[];
}

const AirplaneSeats: React.FC<Props> = (p: Props) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="h-20">
        <div className='py-24 rounded-t-full font-bold text-4xl	bg-gray-400'>{p.name}</div>
        <div className='border-x border-gray-300 px-4'>
          {p.sections.map((section, index) => <Section key={index} data={section} />)}
        </div>
      </div>
    </div>
  );
};

export default AirplaneSeats;
