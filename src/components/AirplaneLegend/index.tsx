import React from 'react';
import { ICONS } from 'components/Icons';
import { seatStyles } from 'components/Seat';
import { LegendSeat } from 'types';

interface Props {
  readonly data: LegendSeat[];
}

const AirplaneLegend: React.FC<Props> = (p: Props) => {
  return (
    <div className="flex flex-col w-72 gap-5 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {p.data.map((legend, index) => {
        const Icon = legend.icon ? ICONS[legend.icon] : null;
        return (
          <div key={index} className={`flex justify-between items-center pb-1 ${index === p.data.length - 1 ? '' : 'border-b-4'}`}>
            <div className='flex flex-row gap-1 items-center'>
              <div className={`${seatStyles.base} ${legend.styles}`}>
                {Icon && <Icon />}
              </div>
              <span className='text-sm'>{legend.text}</span>
            </div>
            <span className='text-sm font-bold'>{legend.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AirplaneLegend;
