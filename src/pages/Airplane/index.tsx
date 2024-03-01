import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import { airplaneSeatsDataMock, airplaneInformationDataMock } from 'data';
import Cart from 'components/Cart';
import AirplaneLegend from 'components/AirplaneLegend';

const AirplanePage: React.FC = () => {
  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10">  
      <AirplaneSeats data={airplaneInformationDataMock} sections={airplaneSeatsDataMock} />
      <div className='flex flex-col gap-10'>
        <AirplaneLegend />
        <Cart />
      </div>
    </div>
  );
};

export default AirplanePage;
