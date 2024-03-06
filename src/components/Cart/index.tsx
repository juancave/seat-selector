import React from 'react';
import useCartStore from 'store/cart';
import { SeatLocationName, SeatTypeName } from 'types';

const Cart: React.FC = () => {
  const seats = useCartStore((state) => state.seats);
  const total = useCartStore((state) => state.total());
  const discardSeats = useCartStore((state) => state.discardSeats);
  const removeSeat = useCartStore((state) => state.removeSeat);
  const syncSoldSeats = useCartStore((state) => state.syncSoldSeats);

  return (
    <div className="flex flex-col w-72 gap-5 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2 className="border-b-4 pb-2 font-bold">Selected seats:</h2>
      <div className="flex flex-col gap-1">
        {seats.map((seat, index) => (
          <div
            key={index}
            className="text-sm flex justify-between items-center border p-1 rounded-md shadow-[0_1px_5px_rgb(0,0,0,0.1)]"
          >
            <div className="flex justify-around flex-col">
              <div className="flex gap-1">
                <span className="font-bold">Seat:</span>
                <span>
                  {seat.row}
                  {seat.name}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Section:</span>
                <span>{SeatTypeName[seat.type]}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Location:</span>
                <span>{SeatLocationName[seat.location]}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Price:</span>
                {seat.selectedByDefault ? (
                  <span>$0 - Included</span>
                ) : (
                  <span>${seat.price}</span>
                )}
              </div>
            </div>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-1 py-0 border border-gray-400 rounded shadow h-8 w-8"
              onClick={() => removeSeat(seat)}
            >
              X
            </button>
          </div>
        ))}
        {!seats.length && (
          <div className="text-center italic font-bold">Empty cart</div>
        )}
      </div>
      <div className="flex justify-between font-bold border-t-4 border-b-4 py-2">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        disabled={!seats.length}
        onClick={() => syncSoldSeats()}
        type="button"
      >
        Confirm seats
      </button>
      {!!seats.length && (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => discardSeats()}
          type="button"
        >
          Discard seats
        </button>
      )}
    </div>
  );
};

export default Cart;
