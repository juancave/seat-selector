import React from 'react';
import useCartStore from 'store/cart';

const Cart: React.FC = () => {
  const seats = useCartStore((state) => state.seats);
  const total = useCartStore((state) => state.total());
  const removeSeat = useCartStore((state) => state.removeSeat);
  const syncSoldSeats = useCartStore((state) => state.syncSoldSeats);

  return (
    <div className="flex flex-col w-72 gap-5 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2>Selected seats:</h2>
      <div className='flex flex-col gap-1'>
        {seats.map((seat, index) => (
          <div key={index} className='flex justify-between'>
            <span>
              <span className='font-bold'>
                {seat.row}{seat.name}
              </span> - <span>${seat.price}</span>
            </span>
            <button
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold px-1 py-0 border border-gray-400 rounded shadow'
              onClick={() => removeSeat(seat)}
            >
              X
            </button>
          </div>
        ))}
        {!seats.length && (
          <div className='text-center italic font-bold'>
            Empty cart
          </div>
        )}
      </div>
      <span className='text-green-600 font-bold'>Total: ${total}</span>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => syncSoldSeats()}
        type='button'
      >
        Confirm seats
      </button>
    </div>
  );
};

export default Cart;
