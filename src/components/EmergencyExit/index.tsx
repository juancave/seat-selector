import React from 'react';
import { EmergencyExit as EmergencyExitType } from '../../types';

interface Props {
  readonly data: EmergencyExitType;
}

const EmergencyExit: React.FC<Props> = (p: Props) => {
  return (
    <div className="w-full">
      <div className='flex justify-between items-center'>
        <div className={`w-0 h-0 border-l-8 border-t-8 border-b-8 border-y-transparent border-l-green-800 ${!p.data.left ? 'border-transparent' : ''}`}></div>
        <div className='w-14 h-1 bg-gray-400'></div>
        <p className='m-0'>Emergency Exit</p>
        <div className='w-14 h-1 bg-gray-400'></div>
        <div className={`w-0 h-0 border-r-8 border-t-8 border-b-8 border-y-transparent border-r-green-800 ${!p.data.right ? 'border-transparent': ''}`}></div>
      </div>
    </div>
  );
};

export default EmergencyExit;
