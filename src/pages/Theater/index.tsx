import React from 'react';
import Cart from 'components/Cart';
import TheaterSeats from 'components/TheaterSeats';
import {
  eventInformationDataMock,
  legendSeatsMockData,
  theaterSeatsDataMock,
} from 'data/theater';
import useCartStore from 'store/cart';
import SeatsLegend from 'components/shared/SeatsLegend';
import EventInformation from 'components/EventInformation';

const TheaterPage: React.FC = () => {
  const setSeatsLimit = useCartStore((state) => state.setSeatsLimit);
  const setDefaultSeats = useCartStore((state) => state.setDefaultSeats);
  const discardSeats = useCartStore((state) => state.discardSeats);

  React.useEffect(() => {
    setSeatsLimit(eventInformationDataMock.seats);
    setDefaultSeats([]);
    discardSeats();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex lg:flex-row lg:items-start flex-col items-center justify-center gap-10 mt-10 mb-32">
      <TheaterSeats sections={theaterSeatsDataMock} />
      <div className="flex flex-row gap-10 justify-center lg:flex-col flex-wrap lg:flex-nowrap lg:justify-normal">
        <SeatsLegend data={legendSeatsMockData} />
        <EventInformation data={eventInformationDataMock} />
        <Cart />
      </div>
    </div>
  );
};

export default TheaterPage;
