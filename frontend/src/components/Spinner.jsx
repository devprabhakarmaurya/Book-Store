import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center m-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-sky-600 border-solid"></div>
    </div>
  );
};

export default Spinner;
