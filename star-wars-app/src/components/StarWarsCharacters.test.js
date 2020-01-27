import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';


test('renders the SW Characters with previous and next buttons', async () => {

  const { getByText } = render(<StarWarsCharacters/>);
  
  const previousButton = getByText(/previous/i);
  const nextButton = getByText(/next/i);
  
});

test('checks for previous and next buttons click', async () => {

  const { getByText } = render(<StarWarsCharacters/>);

  const previousButtonClick = { button: 0 };
  const nextButtonClick = { button: 0 }
  
  fireEvent.click(getByText('Previous'));
  fireEvent.click(getByText('Next'));

})