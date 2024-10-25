"use client"

import React, { useState } from 'react';

export default function NewItem(){
    const [value, setValue] = useState(1);

    let minusDisable = true;
    let addDisable = false;

    if (value >= 20){
        addDisable = true;
    }else{
        addDisable = false;
    }

    if (value <= 1){
        minusDisable = true;
    }else{
        minusDisable = false;
    }

    const handleIncrement = () => {
        if (value < 20){
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > 1){
            setValue(value - 1);
        }
    };

    const styles = {
        addButton: {
            width: '25px',
            height: '25px',
            borderRadius: '20%',
            fontSize: '20px',
            backgroundColor: 'green',
            color: 'white',
            cursor: 'pointer',
            marginRight: '2px',
            marginLeft: '10px'
        },
        minusButton: {
            width: '25px',
            height: '25px',
            borderRadius: '20%',
            fontSize: '20px',
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer'
        },
        disabledButton: {
            backgroundColor: 'gray',
            color: 'white',
            cursor: 'not-allowed'
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', width: '100px', height: '50px'}}>
            <p style={{marginLeft: '20px', color: 'black'}}>{value}</p>
            <button style={addDisable ? { ...styles.addButton, ...styles.disabledButton } : styles.addButton} onClick={handleIncrement} disabled={addDisable}>+</button>
            <button style={minusDisable ? { ...styles.minusButton, ...styles.disabledButton } : styles.minusButton} onClick={handleDecrement} disabled={minusDisable}>-</button>
        </div>
    );
}