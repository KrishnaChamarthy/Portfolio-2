import React, { useMemo } from 'react';

const ContinuousBackground = ({ mousePosition }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: -(Math.random() * 20)
    }));
  }, []);

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

      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-[200vh] bg-gradient-to-b from-purple-900/15 via-transparent to-blue-900/15 opacity-30"
          style={{
            animation: 'moveUp 20s linear infinite',
            left: '10%',
            width: '30%'
          }}
        />
        
        <div 
          className="absolute w-full h-[200vh] bg-gradient-to-b from-blue-900/15 via-transparent to-purple-900/15 opacity-25"
          style={{
            animation: 'moveUp 25s linear infinite',
            left: '40%',
            width: '25%',
            animationDelay: '-5s'
          }}
        />
        
        <div 
          className="absolute w-full h-[200vh] bg-gradient-to-b from-indigo-900/15 via-transparent to-pink-900/15 opacity-20"
          style={{
            animation: 'moveUp 30s linear infinite',
            left: '70%',
            width: '35%',
            animationDelay: '-10s'
          }}
        />
      </div>

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-purple-400/15 rounded-full"
            style={{
              left: `${particle.left}%`,
              animation: `floatUp ${particle.animationDuration}s linear infinite`,
              animationDelay: `${particle.animationDelay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinuousBackground;
