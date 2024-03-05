import React from 'react';
import AirplaneSeats from 'components/AirplaneSeats';
import {
  airplaneSeatsDataMock,
  airplaneInformationDataMock,
  legendSeatsMockData,
} from 'data';
import Cart from 'components/Cart';
import AirplaneLegend from 'components/AirplaneLegend';
import FlightInformation from 'components/FlightInformation';
import useCartStore from 'store/cart';
import { AirplaneData, Seat, SeatsRow } from 'types';

const AirplanePage: React.FC = () => {
  const setSeatsLimit = useCartStore((state) => state.setSeatsLimit);
  const setDefaultSeats = useCartStore((state) => state.setDefaultSeats);
  const addSeat = useCartStore((state) => state.addSeat);

  React.useEffect(() => {
    setSeatsLimit(airplaneInformationDataMock.reservation.seats);
    setDefaultSeats(airplaneInformationDataMock.reservation.defaultSeats);

    const seats = airplaneSeatsDataMock.reduce(
      (seats: Seat[], currentSeat: AirplaneData) => {
        const seatsPerRow = currentSeat.rows.reduce(
          (seatsPerRow: Seat[], currentSeatRow: SeatsRow) => {
            seatsPerRow = [...seatsPerRow, ...currentSeatRow.seats];

            return seatsPerRow;
          },
          [] as Seat[],
        );

        return [...seats, ...seatsPerRow];
      },
      [] as Seat[],
    );

    airplaneInformationDataMock.reservation.defaultSeats.forEach(
      (defaultSeat: string) => {
        const selectedSeat = seats.find(
          (seat) => `${seat.row}${seat.name}` === defaultSeat,
        );

        if (selectedSeat) {
          addSeat({
            ...selectedSeat,
            selectedByDefault: true,
          });
        }
      },
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex md:flex-row md:items-start flex-col items-center justify-center gap-10 mt-10 mb-10">
      <AirplaneSeats
        data={airplaneInformationDataMock}
        sections={airplaneSeatsDataMock}
      />
      <div className="flex flex-row gap-10 justify-center md:flex-col flex-wrap md:flex-nowrap md:justify-normal">
        <div className="py-28 hidden md:block"></div>
        <AirplaneLegend data={legendSeatsMockData} />
        <FlightInformation data={airplaneInformationDataMock} />
        <Cart />
      </div>
    </div>
  );
};

export default AirplanePage;
