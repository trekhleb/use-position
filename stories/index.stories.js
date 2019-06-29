import React from 'react';
import { storiesOf } from '@storybook/react';
import { Demo } from '../demo/Demo';

storiesOf('usePosition', module)
  .add('fetching', () => <Demo />)
  .add('watching', () => <Demo watch />);
