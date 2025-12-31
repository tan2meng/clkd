import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="w-full bg-secondary/5 h-4 rounded-full mt-4 overflow-hidden border border-white/20">
        <div 
          className="bg-gradient-to-r from-primarySoft to-accentPink h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;