import React from 'react';
import './Section.css';
import SeatRow from '../SeatRow';
import { AirplaneData } from '../../types';
import EmergencyExit from '../EmergencyExit';

interface Props {
  readonly data: AirplaneData;
}

const Section: React.FC<Props> = (p: Props) => {
  return (
    <div className="section-container">
      <h1>{p.data.title}</h1>
      <div className='section-seats'>
        {p.data.rows.map((row, index) => ('title' in row ? <SeatRow key={index} data={row} /> : <EmergencyExit data={row} />))}
      </div>
    </div>
  );
};

export default Section;
