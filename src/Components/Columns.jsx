import React, { useState } from 'react';
import Card from './RecipeCards/Card';
import RightButton from './Bumpers/RightButton';
import LeftButton from './Bumpers/LeftButton';
import CenterButton from './Bumpers/CenterButton';

/*
Columns
Combines header, button, and card components. Also defines button onClick behavior
*/

function Columns({ currentIndex, setCurrentIndex, stepNum, stepTime, stepInc, checkPoint, centerText, checkText, buttonFormat, checkAnswers}) {

  const [isCheckPoint, setIsCheckPoint] = useState(false);
  const [isActiveCheck, setIsActiveCheck] = useState(false);
  const [responseValue, setResponseValue] = useState(0);

  const columnContainer = {
    display: 'flex',
    justifyContent: 'center',
  };

  const bigColumn = {
    width: '60%',
    paddingTop: '10vh',
  };

  const smallColumn = {
    width: '20%',
  };

  const handleLeftButtonClick = () => {
    if (isActiveCheck) {
      setIsActiveCheck(false);
      setIsCheckPoint(false);
    } else if (isCheckPoint) {
      setIsCheckPoint(false);
      setResponseValue((prevResponseValue) => {
        const newValue = 0;
        checkAnswers[currentIndex][newValue] === "" ? setIsActiveCheck(false) : setIsActiveCheck(true);
        return newValue;
      });
    } else {
      currentIndex > 0 && setCurrentIndex((Index) => (Index - 1) % stepNum.length);
    }
  };
  
  const handleCenterButtonClick = () => {
    if (isActiveCheck) {
      setIsActiveCheck(false);
      setIsCheckPoint(false);
    } else if (isCheckPoint) {
      setIsCheckPoint(false);
      setResponseValue((prevResponseValue) => {
        const newValue = 1;
        checkAnswers[currentIndex][newValue] === "" ? setIsActiveCheck(false) : setIsActiveCheck(true);
        return newValue;
      });
    } else {
      if (checkPoint[currentIndex] === true) {
        setIsCheckPoint(true);
      }
    }
  };
  
  const handleRightButtonClick = () => {
    if (isActiveCheck) {
      setIsActiveCheck(false);
      setIsCheckPoint(false);
    } else if (isCheckPoint) {
      setIsCheckPoint(false);
      setResponseValue((prevResponseValue) => {
        const newValue = 2;
        checkAnswers[currentIndex][newValue] === "" ? setIsActiveCheck(false) : setIsActiveCheck(true);
        return newValue;
      });
    } else {
      currentIndex < stepNum.length - 1 &&
        setCurrentIndex((Index) => (Index + 1) % stepNum.length);
    }
  };

  if (isActiveCheck == true) {
      return (
        <div className="row" style={columnContainer}>
        <div style={smallColumn}></div>
        <LeftButton onClick={handleLeftButtonClick}
        title={"\u00A0"}
        color={"gray"}
        />
        <CenterButton
          onClick={handleCenterButtonClick}
          title={"\u00A0"}
          color={"gray"}
        />
        <RightButton onClick={handleRightButtonClick}
        title="Ok"
        color="blue" />
  
        <div style={bigColumn}>
          <Card
            title={"Check Point"}
            time={""}
            description={checkAnswers[currentIndex][responseValue]}
          />
        </div>
  
        <div style={smallColumn}></div>
      </div>
      );

    } else if (isCheckPoint){
      return (
        <div className="row" style={columnContainer}>
        <div style={smallColumn}></div>
        <LeftButton
        onClick={handleLeftButtonClick}
        title={buttonFormat[currentIndex][0][0] ? buttonFormat[currentIndex][0][0] : "\u00A0"}
        color={buttonFormat[currentIndex][0][1]}
        />
    
        <CenterButton
          onClick={handleCenterButtonClick}
          title={buttonFormat[currentIndex][1][0] ? buttonFormat[currentIndex][1][0] : "\u00A0"}
          color={buttonFormat[currentIndex][1][1]}
        />
        <RightButton
          onClick={handleRightButtonClick}
          title={buttonFormat[currentIndex][2][0] ? buttonFormat[currentIndex][2][0] : "\u00A0"}
          color={buttonFormat[currentIndex][2][1]}
          />
    
        <div style={bigColumn}>
          <Card
            title={"Check Point"}
            time={""}
            description={checkText[currentIndex]}
          />
        </div>
    
        <div style={smallColumn}></div>
      </div>
      );
    } else {
      return (
        <div className="row" style={columnContainer}>
          <div style={smallColumn}></div>
          <LeftButton onClick={handleLeftButtonClick} title="Previous" color="blue" />
          <CenterButton
            onClick={handleCenterButtonClick}
            title={centerText[currentIndex] ? centerText[currentIndex] : "\u00A0"}
            color={checkPoint[currentIndex] ? "red" : "gray"} // Conditionally set color
          />
          <RightButton onClick={handleRightButtonClick} title="Next" color="blue" />
    
          <div style={bigColumn}>
            <Card
              title={stepNum[currentIndex]}
              time={stepTime[currentIndex]}
              description={stepInc[currentIndex]}
            />
          </div>
    
          <div style={smallColumn}></div>
        </div>
      );
  }
}

export default Columns;
