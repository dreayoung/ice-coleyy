import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';

test('should render homepage component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const homepageElement = screen.getByTestId('hmpg-1');
  expect(homepageElement).toBeInTheDocument();
});

it('Learn more button scrolls down to about section after click', () => {

});