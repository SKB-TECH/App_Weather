import React from 'react';

const TimeLocation = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {new Date().toDateString()}|Local Time: 12H36 PM 
                </p>
            </div>

            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-bold'>
                    Kinshasa DRC
                </p>
            </div>
        </div>
    );
};

export default TimeLocation;