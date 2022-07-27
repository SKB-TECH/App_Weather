import React from 'react';

const Forcast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white uppercase font-bold'>{title}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-10 my-1' />
                    <p className='font-medium'>22°</p>
                </div>
{/* II */}
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-10 my-1' />
                    <p className='font-medium'>22°</p>
                </div>

                {/* iii */}

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-10 my-1' />
                    <p className='font-medium'>22°</p>
                </div>
                
                {/* IV */}

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-10 my-1' />
                    <p className='font-medium'>22°</p>
                </div>

                {/* V */}

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-10 my-1' />
                    <p className='font-medium'>22°</p>
                </div>
            </div>
        </div>
    );
};

export default Forcast;