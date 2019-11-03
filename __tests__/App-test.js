import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
  it('renders the root without loading screen', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
