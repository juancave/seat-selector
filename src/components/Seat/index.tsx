import React from 'react';
import { SeatState, SeatType as SeatTypeEnum, SeatLocation, Seat as SeatType } from 'types';
import useCartStore from 'store/cart';
import classNames from 'classnames';
import { BestSeat, BusySeat, PremiunSeat, SelectedSeat } from 'components/Icons';

interface Props {
  readonly seat: SeatType;
}

const Seat: React.FC<Props> = (p: Props) => {
  const [showInfo, setShowInfo] = React.useState<boolean>(false);
  const addSeat = useCartStore((state) => state.addSeat);
  const removeSeat = useCartStore((state) => state.removeSeat);
  const cartSeats = useCartStore((state) => state.seats);
  const soldSeats = useCartStore((state) => state.soldSeats);
  const isDisabled = [SeatState.BUSY, SeatState.UNAVAILABLE].includes(p.seat.state)
    || soldSeats.some((seat) => seat.name === p.seat.name && seat.row === p.seat.row);
  const isSelected = cartSeats.some((seat) => seat.name === p.seat.name && seat.row === p.seat.row);

  const showDetail = () => setShowInfo(true);
  const hideDetail = () => setShowInfo(false);
  const onButtonClick = () => {
    if (isDisabled) {
      return;
    }

    if (isSelected) {
      removeSeat(p.seat);
      return;
    }

    addSeat(p.seat);
  };

  return (
    <div className="relative">  
      {showInfo && (
        <div className='flex flex-col self-start absolute gap-1 w-fit h-fit p-3 z-10 bg-gray-300 rounded text-base left-12'>
          <div className='flex gap-1'>
            <span className="font-bold">Seat: </span><span>{p.seat.row}{p.seat.name}</span>
          </div>
          <div className='flex gap-1'>
            <span className="font-bold">Price: </span><span>${p.seat.price}</span>
          </div>
        </div>
      )}
      <div
        className={classNames('border rounded-md shadow w-10 h-10 flex items-center justify-center', {
          'bg-gray-100 border-gray-300 hover:gray-200 hover:border-gray-400 cursor-not-allowed': isDisabled,
          'bg-fuchsia-600 border-fuchsia-700 hover:bg-fuchsia-700 hover:border-fuchsia-600': isSelected,
          'bg-sky-500 border-sky-500 hover:bg-sky-700 hover:border-sky-400': !isDisabled && !isSelected,
        })}
        role='button'
        onFocus={showDetail}
        onBlur={hideDetail}
        onMouseEnter={showDetail}
        onMouseLeave={hideDetail}
        onClick={onButtonClick}
      >
        {p.seat.type === SeatTypeEnum.FIRST_CLASS && !isDisabled && !isSelected && (
          <PremiunSeat />
        )}
        {p.seat.type !== SeatTypeEnum.FIRST_CLASS && p.seat.location === SeatLocation.WINDOW && !isDisabled && !isSelected && (
          <BestSeat />
        )}
        {isDisabled && <BusySeat />}
        {isSelected && <SelectedSeat />}
      </div>
    </div>
  );
};

export default Seat;
