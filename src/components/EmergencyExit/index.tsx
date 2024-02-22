import React from 'react';
import './EmergencyExit.css';
import { EmergencyExit as EmergencyExitType } from '../../types';

interface Props {
  readonly data: EmergencyExitType;
}

const EmergencyExit: React.FC<Props> = (p: Props) => {
  return (
    <div className="emergency-row-container">
      <div className='emergency-exits'>
        <div className={`left-exit ${!p.data.left ? 'hidden' : ''}`}></div>
        <div className='emergency-separator'></div>
        <p className='emergency-title'>Emergency Exit</p>
        <div className='emergency-separator'></div>
        <div className={`right-exit ${!p.data.right ? 'hidden': ''}`}></div>
      </div>
    </div>
  );
};

export default EmergencyExit;
