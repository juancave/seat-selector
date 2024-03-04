import React from 'react';
import { SeatState, SeatType as SeatTypeEnum, SeatLocation, Seat as SeatType } from 'types';
import useCartStore from 'store/cart';
import classNames from 'classnames';
import { BestSeat, BusySeat, PremiunSeat, SelectedSeat } from 'components/Icons';

interface Props {
  readonly seat: SeatType;
}

export const seatStyles = {
  base: 'border rounded-md shadow w-10 h-10 flex items-center justify-center',
  selected: 'bg-fuchsia-600 border-fuchsia-700 hover:bg-fuchsia-700 hover:border-fuchsia-600',
  disabled: 'bg-gray-100 border-gray-300 hover:gray-200 hover:border-gray-400',
  available: 'bg-sky-500 border-sky-500 hover:bg-sky-700 hover:border-sky-400',
};

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
        <SeatInformation
          isDisabled={isDisabled}
          isSelected={isSelected}
          seat={p.seat}
        />
      )}
      <div
        className={classNames(seatStyles.base, {
          [seatStyles.disabled]: isDisabled,
          'cursor-not-allowed': isDisabled,
          [seatStyles.selected]: isSelected,
          [seatStyles.available]: !isDisabled && !isSelected,
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

const SeatInformation: React.FC<{
  readonly isSelected: boolean;
  readonly isDisabled: boolean;
  readonly seat: SeatType;
}> = ({
  isSelected,
  isDisabled,
  seat,
}) => {
  return (
    <div className='flex flex-col self-start absolute gap-1 w-fit h-fit p-3 z-10 bg-zinc-50 shadow-[0_3px_10px_rgb(0,0,0,0.5)] rounded left-12 text-sm'>
      <div className='flex gap-1'>
        <span className="font-bold">Status: </span><span>{isSelected ? 'Selected' : isDisabled ? 'Disabled' : 'Available'}</span>
      </div>
      <div className='flex gap-1'>
        <span className="font-bold">Seat: </span><span>{seat.row}{seat.name}</span>
      </div>
      <div className='flex gap-1'>
        <span className="font-bold">Price: </span><span>${seat.price}</span>
      </div>
    </div>
  );
};

export default Seat;
