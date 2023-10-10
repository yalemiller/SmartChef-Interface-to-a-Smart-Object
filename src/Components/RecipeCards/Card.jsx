function Card({ title, time, description }) {


/*
Card
Component for each recipe card 
*/

  const cardStyle = {
    textAlign: 'left',
    fontSize: '30px',
  };

  const cardheaderStyle = {
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div>
      <div style={cardStyle}>
        <div className="card">
          <div className="card-header">
            <div style={cardheaderStyle}>
              <p className="card-text large-text"><strong>{title}</strong></p>
              <p className="card-text large-text">{time}</p>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text large-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
