import React from 'react';

const TopButtons = () => {
    const citiers=[
        {
            id:1,
            title:"London"
        },
        {
            id:2,
            title:"Sydney"
        },
        {
            id:3,
            title:"Tokyo"
        },
        {
            id:4,
            title:"Torronto"
        },
        {
            id:5,
            title:"Paris"
        }
    ];
    return <div className='flex items-center justify-around my-6'>
        {
            citiers.map((city)=>(
                <button className='text-white font-bold text-lg' key={city.id}>{city.title}</button>
            ))
        }
    </div>
        
}

export default TopButtons;
