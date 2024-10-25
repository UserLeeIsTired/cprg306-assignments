import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, sortBy, setSortBy }){

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
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </div>
        </div>
    )
}