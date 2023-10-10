import React from 'react';
import SelectionContent from './SelectionContent';
import SelectionHeader from './SelectionHeader';
import { useMenu } from './MenuContext';

/*
SelectionPage
Builds the content of the selection page
*/

function SelectionPage() {
  const { clickedMenuItem } = useMenu();

  if (!clickedMenuItem) {
    return (
      <div>
              <SelectionHeader picture={""} title={"No Item Selected"} time={""} />
              <SelectionContent description={""} ingredients={[]} />
      </div>
    );
  }

  const { name, image, time, description, ingredients } = clickedMenuItem;

  return (
    <div>
      <SelectionHeader title={name} time={time} />
      <SelectionContent description={description} ingredients={ingredients} image={image} />
    </div>
  );
}

export default SelectionPage;
