function RightButton({ onClick, title, color }) {

/*
RightButton Componenet
*/

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    textAlign: 'center',
    fontSize: '35px',
    border: 'none',
    borderRadius: '5px',
    right: '0',
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

export default RightButton;
