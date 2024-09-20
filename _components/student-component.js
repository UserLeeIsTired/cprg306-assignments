function StudentComponent({ student }) {
    const {id, name, age} = student;

    const style = {
        container: {
            backgroundColor: 'lightblue',
            padding: '10px',
            borderRadius: '5px',
        },
        text: {
            color: 'black',
            fontSize: '16px',
        }
    };

    return (
        <div style={style.container}>
            <p style={style.text}>Student id: {id}</p>
            <p style={style.text}>Student name: {name}</p>
            <p style={style.text}>Student age: {age}</p>
        </div>
    );
}

export default StudentComponent;