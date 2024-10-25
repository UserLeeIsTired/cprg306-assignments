import React from "react";


const CategoryMenu = ({ selectedCategory, onCategoryChange }) => {
    const handleSelectChange = (e) => {
        onCategoryChange(e.target.value);
    };

    return (
        <div>
            <select value={selectedCategory} onChange={handleSelectChange} style={{ height: 50, marginLeft: 5, color: 'black'}}>
                <option value="" disabled>Category</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
        </div>
    );
};

export default CategoryMenu;