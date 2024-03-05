import React from 'react';
import Cart from 'components/Cart';
import TheaterSeats from 'components/TheaterSeats';
import { airplaneSeatsDataMock } from 'data';

const TheaterPage: React.FC = () => {
  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10">  
      <TheaterSeats name="Airbus A380" sections={airplaneSeatsDataMock} />
      <Cart />
    </div>
  );
};

export default TheaterPage;
