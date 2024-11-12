import React from 'react';

export default function AmountValue({ value, setValue }) {
    let minusDisable = value <= 1;
    let addDisable = value >= 20;

    const handleIncrement = () => {
        if (value < 20) {
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value - 1);
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