import React from 'react';

interface TooltipProps {
  weekStart: string;
  count: number;
  position: { x: number; y: number };
}

const Tooltip: React.FC<TooltipProps> = ({ weekStart, count, position }) => {
  const date = new Date(weekStart);
  const currentYear = new Date().getFullYear();
  const weekNumber = Math.ceil((date.getDate() - date.getDay() + 1) / 7);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  let dateString;
  if (year === currentYear) {
    dateString = `${month}, ${weekNumber}주차`;
  } else {
    dateString = `${year}년 ${month}, ${weekNumber}주차`;
  }

  return (
    <div
      className="tooltip absolute z-10 whitespace-nowrap rounded-lg border border-gray-200 bg-white p-3 text-center text-sm shadow-lg"
      style={{
        left: `${position.x}px`,
        top: `${position.y - 15}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <div className="relative">
        <div className="font-semibold text-gray-800">{dateString}</div>
        <div className="mt-1 text-blue-600">{`${count}개의 글 등록`}</div>
      </div>
      <style jsx>{`
        .tooltip::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid white;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </div>
  );
};

export default Tooltip;
