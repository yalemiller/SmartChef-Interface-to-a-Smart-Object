import React, { useState } from 'react';
import Columns from './Columns';
import Header from './Headers/Header';
import { useMenu } from './MenuContext';

/*
CookingMode
Parent component for cooking mode page. Brings in props from global context using context API
*/


function CookingMode() {
  const { clickedMenuItem } = useMenu();

  if (!clickedMenuItem) {
    return (
      <div>
      <Header currIndex={0} listLength={0} name={"No Item Selected"} />
      <Columns
      currentIndex={[]} 
      setCurrentIndex={0}
      stepNum={[]}
      stepTime={[]}
      stepInc={[]}
      checkPoint={[]}
      centerText={[]}
      checkText={[]}
      buttonFormat={[]}
      checkAnswers={[]}
      />
    </div>
    );
    }


  const { name, stepNum, stepTime, stepInc, checkPoint, centerText, buttonFormat, checkText, checkAnswers } = clickedMenuItem;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Header currIndex={currentIndex} listLength={stepNum.length} name={name} />
      <Columns
      currentIndex={currentIndex} 
      setCurrentIndex={setCurrentIndex}
      stepNum={stepNum}
      stepTime={stepTime}
      stepInc={stepInc}
      checkPoint={checkPoint}
      centerText={centerText}
      checkText={checkText}
      buttonFormat={buttonFormat}
      checkAnswers={checkAnswers}
      />
    </div>
  );
}

export default CookingMode;
