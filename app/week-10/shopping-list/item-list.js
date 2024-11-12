import React, { useState } from 'react';


const Item = ({ name, quantity, category, handleClick }) => {
    return (
        <div className="m-2 bg-slate-500 min-w-[400px] rounded-md p-4">
            <button className="w-full" onClick={() => handleClick(name)}>
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold text-center mb-2">{name}</p>
                    <p className="text-center">Buy {quantity} in {category}</p>
                </div>
            </button>
        </div>
    );
}


export default function ItemList({ items, sortBy, setSortBy, handleClick }){

    const sortedItems = [...items].sort((a, b) => {
        if (a[sortBy] < b[sortBy]){
            return -1;
        }else if (a[sortBy] > b[sortBy]){
            return 1;
        }
        return 0;
    })

    return (
        <div style={{alignItems: 'center', alignContent: 'center'}}>
            <p>Sort By: </p>
            <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy('name')}>Name</button>
            <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy('category')}>Category</button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'darkgray', width: '450px', borderRadius: '10px'}}>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} handleClick={handleClick} category={item.category} />
                ))}
            </div>
        </div>
    )
}