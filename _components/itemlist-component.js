const style = {
    container: {
        backgroundColor: '#333333',
        padding: '15px',
        margin: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '400px',
        height: '200px',
    }
};

function ItemComponent({ item }) {
    const { name, quantity, category } = item;

    return (
        <div style={style.container}>
            <h2>Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}

export default ItemComponent;