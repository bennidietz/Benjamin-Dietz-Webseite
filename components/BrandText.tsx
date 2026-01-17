import React from 'react';
import logo21 from '../assets/21_white.png';

interface BrandTextProps {
  text: string;
}

const BrandText: React.FC<BrandTextProps> = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/21vision/g);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <img 
              src={logo21} 
              alt="21vision" 
              className="inline-block h-[0.9em] w-auto mx-1 align-middle -mt-1" 
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default BrandText;
