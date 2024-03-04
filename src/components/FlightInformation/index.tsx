import React from 'react';
import { Calendar, RightArrow } from 'components/Icons';
import { FlightInformation as FlightInformationType } from 'types';

interface Props {
  readonly data: FlightInformationType;
}

const FlightInformation: React.FC<Props> = (p: Props) => {
  return (
    <div className="flex flex-col w-72 gap-3 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>Reservation:</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.reservation.code}</span>
        </div>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-3'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>Seats:</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.reservation.seats}</span>
        </div>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.origin.city}</span>
          <span className='text-sm font-bold'>{p.data.origin.code}</span>
        </div>
        <RightArrow />
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.destination.city}</span>
          <span className='text-sm font-bold text-right'>{p.data.destination.code}</span>
        </div>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-2'>
        <Calendar />
        <span className='text-sm font-bold'>{p.data.schedule.date}</span>
      </div>
      <div className='flex justify-between items-center border-b-4 pb-1'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.schedule.departure}</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{p.data.schedule.arrival}</span>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-sm font-bold'>{p.data.schedule.timeInMinutes} minutes</span>
      </div>
    </div>
  );
};

export default FlightInformation;
