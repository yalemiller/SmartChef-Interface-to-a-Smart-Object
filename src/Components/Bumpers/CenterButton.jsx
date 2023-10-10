function CenterButton({ onClick, title, color }) {

/*
CenterButton Componenet
*/

    const buttonStyle = {
      backgroundColor: color,
    color: 'white',
    textAlign: 'center',
    fontSize: '35px',
    border: 'none',
    borderRadius: '5px',
    center: '0',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    float: 'left',
    width: '33%',
    bottom: '-5px',
    };
  
    return (
      <button style={buttonStyle} onClick={onClick}>
        <div>
          <p>{title}</p>
        </div>
      </button>
    );
  }
  
  export default CenterButton;
  
  
  