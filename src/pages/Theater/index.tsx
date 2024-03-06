import React from 'react';
import Cart from 'components/Cart';
import TheaterSeats from 'components/TheaterSeats';
import { legendSeatsMockData, theaterSeatsDataMock } from 'data/theater';
import useCartStore from 'store/cart';
import SeatsLegend from 'components/shared/SeatsLegend';

const TheaterPage: React.FC = () => {
  const setSeatsLimit = useCartStore((state) => state.setSeatsLimit);
  const setDefaultSeats = useCartStore((state) => state.setDefaultSeats);
  const discardSeats = useCartStore((state) => state.discardSeats);

  React.useEffect(() => {
    setSeatsLimit(10);
    setDefaultSeats([]);
    discardSeats();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10 mb-32">
      <TheaterSeats sections={theaterSeatsDataMock} />
      <div className="flex flex-row gap-10 justify-center md:flex-col flex-wrap md:flex-nowrap md:justify-normal">
        <SeatsLegend data={legendSeatsMockData} />
        <Cart />
      </div>
    </div>
  );
};

export default TheaterPage;
