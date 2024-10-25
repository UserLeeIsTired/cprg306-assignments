"use client"
import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page(){
    //new item part
    const [itemName, setItemName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = () => {
        if (itemName.trim() === "") {
            alert("Item name cannot be empty!");
            return;
        }
        
        alert(`Added item: ${itemName}, Amount: ${quantity}, Category: ${selectedCategory}`)

        const item = {
            "id": Date.now().toString(26) + Math.random().toString(26).slice(2),
            "name": itemName,
            "quantity": quantity,
            "category": selectedCategory
        } ;
        setItems([...items, item ]);
        setItemName("");
        setSelectedCategory("produce");
        setQuantity(1);
    };

    //item list
    const [items, setItems] = useState(JSON.parse(JSON.stringify(itemsData)));
    const [sortBy, setSortBy] = useState('name');

    return (
        <main className="flex-row ml-4">
            <h1 style={{fontSize: '36px'}}>Shopping List</h1>
            <NewItem itemName={itemName} setItemName={setItemName} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
            quantity={quantity} setQuantity={setQuantity} handleSubmit={handleSubmit}/>
            <ItemList items={items}m setItems={setItems} sortBy={sortBy} setSortBy={setSortBy}/>
        </main>
    )
}