import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

import BalanceRow from '..';
import {Props} from '../types';

describe('BalanceRow Component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      currency: 'EUR',
      balance: '1000',
    };
  });

  it('should render successfully', () => {
    expect(render(<BalanceRow {...props} />).toJSON()).toBeTruthy();
  });

  it('should match the previous snapshot', () => {
    expect(renderer.create(<BalanceRow {...props} />)).toMatchSnapshot();
  });
});
