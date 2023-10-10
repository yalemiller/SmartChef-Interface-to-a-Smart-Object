function Body(props) {

/*
Body
Wraps each component so that the screen sized is reduced in order to overlay over the smartChef image
code adapted from Kaleb Bishop's implementation that he shared with me
*/


    let height = window.innerHeight - 10;
    let width = window.innerWidth;
    const SCREEN_RATIO = 1080 / 810;
    const screenWidth = 1080;
    const screenHeight = 810;
    const newRatio = 0.8;
  
    if (width * SCREEN_RATIO > height) {
      width = height / SCREEN_RATIO;
    } else {
      height = width * SCREEN_RATIO;
    }
  
    const bodyStyle = {
      position: 'absolute',
      top: '46.2%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: screenHeight * newRatio,
      width: screenWidth * newRatio,
      backgroundColor: 'white',
      overflow: 'auto'
    };
  
    return (
      <div style={bodyStyle}>
        {props.children}
      </div>
    );
  }
  
  export default Body;
  