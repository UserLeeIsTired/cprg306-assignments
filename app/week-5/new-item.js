"use client"

import React, { useState } from "react";
import AmountValue from "./amount";
import CategoryMenu from "./category-list";

export default function ProductList() {
    const [itemName, setItemName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = () => {
        if (itemName.trim() === "") {
            alert("Item name cannot be empty!");
            return;
        }
        
        alert(`Added item: ${itemName}, Amount: ${quantity}, Category: ${selectedCategory}`)

        setItemName("");
        setSelectedCategory("produce");
        setQuantity(1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", width: 600, height: 300, backgroundColor: 'gray' }}>
            <input type='text' name='itemName' value={itemName} placeholder="Item name" onChange={handleItemNameChange} style={{ width: 234, margin: 20, color: 'black' }} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                <AmountValue value={quantity} setValue={setQuantity} />
                <CategoryMenu selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
            </div>
            <button onClick={handleSubmit} style={{ margin: 10, width: 234, backgroundColor: 'green'}}>+</button>
        </div>
    );
}