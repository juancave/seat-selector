import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import { airplaneSeatsDataMock, airplaneInformationDataMock, legendSeatsMockData } from 'data';
import Cart from 'components/Cart';
import AirplaneLegend from 'components/AirplaneLegend';
import FlightInformation from 'components/FlightInformation';
import useCartStore from 'store/cart';

const AirplanePage: React.FC = () => {
  const setSeatsLimit = useCartStore((state) => state.setSeatsLimit);

  React.useEffect(() => {
    setSeatsLimit(airplaneInformationDataMock.reservation.seats);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10">  
      <AirplaneSeats data={airplaneInformationDataMock} sections={airplaneSeatsDataMock} />
      <div className='flex flex-col gap-10'>
        <div className='py-28 hidden md:block'></div>
        <AirplaneLegend data={legendSeatsMockData} />
        <FlightInformation data={airplaneInformationDataMock} />
        <Cart />
      </div>
    </div>
  );
};

export default AirplanePage;
