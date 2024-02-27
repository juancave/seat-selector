import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import { airplaneDataMock } from 'data';
import Cart from 'components/Cart';

const AirplanePage: React.FC = () => {
  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10">  
      <AirplaneSeats name="Airbus A380" sections={airplaneDataMock} />
      <Cart />
    </div>
  );
};

export default AirplanePage;
