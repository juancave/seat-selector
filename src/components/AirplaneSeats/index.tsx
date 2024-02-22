import React from 'react';
import './AirplaneSeats.css';
import { AirplaneData } from '../../types';
import Section from '../Section';

interface Props {
  readonly name: string;
  readonly sections: AirplaneData[];
}

const AirplaneSeats: React.FC<Props> = (p: Props) => {
  return (
    <div className="airplane-seats-container">
      <div className='airplane-nose'>{p.name}</div>
      <div className="airplane-seats-sections">
        {p.sections.map((section, index) => <Section key={index} data={section} />)}
      </div>
    </div>
  );
};

export default AirplaneSeats;
