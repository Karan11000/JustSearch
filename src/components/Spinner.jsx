import React from 'react';
import spinner from './spinner.gif';

const Spinner =  () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
        className="dark:bg-gray-900 bg-gray-100 dark:text-gray"
      />
    </div>
  );
};

export default Spinner