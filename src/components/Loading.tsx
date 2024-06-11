import React from 'react';
const Loading = ({translation}:{translation:string}) => {
  return (
    <div className="
fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100 z-50 flex-col">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        <span className='text-center'>{translation}</span>
    </div>
  );
};
export default Loading;