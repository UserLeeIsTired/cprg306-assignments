"use client"
import React, { useState } from 'react';
import Item from './item';

export default function ItemList(){
    const data = require('./items.json')
    const items = JSON.parse(JSON.stringify(data));
    const [sortBy, setSortBy] = useState('name');

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
            <div style={{display:'flex', flexDirection: 'column'}}>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
            </div>
        </div>
    )
}