"use client"
import React, {useEffect, useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function ShoppingList(){
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

    const [searchName, setSearchName] = useState('');
    const [filteredSearchName, setFilteredSearchName] = useState('');

    useEffect(() => {
        let name = searchName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        let index = name.indexOf(',');
        if (index !== -1){
            name = name.substring(0, index);
        }
        name = name.trim();
        setFilteredSearchName(name);
    }, [searchName, setSearchName]);

    return (
    <div>
        <div className='flex flex-row'>
            <div>
                <h1 style={{fontSize: '36px'}}>Shopping List</h1>
                <NewItem 
                    itemName={itemName} 
                    setItemName={setItemName} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                    quantity={quantity} 
                    setQuantity={setQuantity} 
                    handleSubmit={handleSubmit}
                />
                <ItemList items={items} setItems={setItems} sortBy={sortBy} setSortBy={setSortBy} handleClick={setSearchName}/>
            </div>
            <div>
                <MealIdeas ingredient={filteredSearchName}/>
            </div>
        </div>
    </div>
    )
}