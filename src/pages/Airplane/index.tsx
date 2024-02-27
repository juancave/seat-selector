import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import { airplaneDataMock } from 'data';
import Cart from 'components/Cart';

const AirplanePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">  
      <AirplaneSeats name="Airbus A380" sections={airplaneDataMock} />
      <Cart />
    </div>
  );
};

export default AirplanePage;
