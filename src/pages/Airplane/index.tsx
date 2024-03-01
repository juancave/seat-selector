import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import { airplaneDataMock } from 'data';
import Cart from 'components/Cart';
import AirplaneLegend from 'components/AirplaneLegend';
import { FlightInformation } from 'types';

const airplaneInformation: FlightInformation = {
  origin: {
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    code: 'MDE',
  },
  destiny: {
    city: 'Miami',
    state: 'Florida',
    country: 'United States of America',
    code: 'MIA',
  },
  plane: {
    model: 'Airbus',
    reference: '380',
    capacity: 80,
  }
};

const AirplanePage: React.FC = () => {
  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10">  
      <AirplaneSeats data={airplaneInformation} sections={airplaneDataMock} />
      <div className='flex flex-col gap-10'>
        <AirplaneLegend />
        <Cart />
      </div>
    </div>
  );
};

export default AirplanePage;
