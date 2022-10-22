import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

import TransactionItem from '..';
import {Props} from '../types';

describe('TransactionItem Component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      currency: 'EUR',
      amount: '1000',
      timestamp: '10000',
    };
  });

  it('should render successfully', () => {
    expect(render(<TransactionItem {...props} />).toJSON()).toBeTruthy();
  });

  it('should match the previous snapshot', () => {
    expect(renderer.create(<TransactionItem {...props} />)).toMatchSnapshot();
  });
});
