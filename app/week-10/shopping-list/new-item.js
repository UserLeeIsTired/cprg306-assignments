import React, { useState } from "react";
import AmountValue from "./amount";
import CategoryMenu from "./category-list";

export default function NewItem( {itemName, selectedCategory, quantity, setItemName, setSelectedCategory, setQuantity, handleSubmit} ) {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", width: 400, height: 200, backgroundColor: 'gray', borderRadius:'10px'}}>
            <input type='text' name='itemName' value={itemName} placeholder="Item name" onChange={(e) => {setItemName(e.target.value)}}  style={{ width: 234, margin: 20, color: 'black' }} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                <AmountValue value={quantity} setValue={setQuantity} />
                <CategoryMenu selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
            </div>
            <button onClick={handleSubmit} style={{ margin: 10, width: 234, backgroundColor: 'green'}}>+</button>
        </div>
    );
}