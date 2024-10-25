import React from 'react';

export default function Item({name, quantity, category}){
    return ( 
        <div className="flex-col mt-2 bg-slate-500 w-[400px]">
            <p className="text-3xl font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}