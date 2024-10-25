import React from 'react';
import ItemList from './item-list';

export default function Page(){
    return (
        <main className="flex-row ml-4">
            <h1 style={{fontSize: '36px'}}>Shopping List</h1>
            <ItemList/>

        </main>
    )
}