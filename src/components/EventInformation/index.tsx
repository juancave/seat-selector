import React from 'react';
import { Calendar, Briefcase, Markdown } from 'components/Icons';
import { EventInformation as EventInformationType } from 'types/theater';

interface Props {
  readonly data: EventInformationType;
}

const EventInformation: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col w-72 gap-3 rounded overflow-hidden p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex justify-center items-center border-b-4 pb-3">
        <span className="text-sm font-bold">{data.title}</span>
      </div>
      <div className="flex justify-between items-center">
        <Calendar />
        <span className="text-sm font-bold">{data.date}</span>
      </div>
      <div className="flex justify-end items-center border-b-4 pb-2">
        <span className="text-sm font-bold">{data.time}</span>
      </div>
      <div className="flex justify-between items-center">
        <Briefcase />
        <span className="text-sm font-bold">
          {data.theater.city}, {data.theater.state}, {data.theater.country}
        </span>
      </div>
      <div className="flex justify-end items-center border-b-4 pb-2">
        <div className="flex flex-col">
          <span className="text-sm font-bold">{data.theater.name}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Markdown />
        <span className="text-sm font-bold">{data.theater.address}</span>
      </div>
    </div>
  );
};

export default EventInformation;
