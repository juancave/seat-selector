import React from 'react';
import { BestSeat, BusySeat, PremiunSeat, SelectedSeat } from 'components/Icons';
import { seatStyles } from 'components/Seat';

const AirplaneLegend: React.FC = () => {
  return (
    <div className="flex flex-col w-72 gap-5 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-row gap-1 items-center'>
          <div className={`${seatStyles.base} ${seatStyles.disabled}`}>
            <BusySeat />
          </div>
          <span className='text-sm'>Unavailable</span>
        </div>
        <span className='text-sm font-bold'>$...</span>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-row gap-1 items-center'>
        <div className={`${seatStyles.base} ${seatStyles.selected}`}>
            <SelectedSeat />
          </div>
          <span className='text-sm'>Selected</span>
        </div>
        <span className='text-sm font-bold'>$...</span>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-row gap-1 items-center'>
        <div className={`${seatStyles.base} ${seatStyles.available}`}>
            <PremiunSeat />
          </div>
          <span className='text-sm'>First Class</span>
        </div>
        <span className='text-sm font-bold'>From $20000</span>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-row gap-1 items-center'>
        <div className={`${seatStyles.base} ${seatStyles.available}`}>
            <BestSeat />
          </div>
          <span className='text-sm'>Best View</span>
        </div>
        <span className='text-sm font-bold'>From $15000</span>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
        <div className={`${seatStyles.base} ${seatStyles.available}`}>
          </div>
          <span className='text-sm'>Standart Seat</span>
        </div>
        <span className='text-sm font-bold'>From $10000</span>
      </div>
    </div>
  );
};

export default AirplaneLegend;
