import React from 'react';

const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `translate3d(0, 0, 0)`
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
