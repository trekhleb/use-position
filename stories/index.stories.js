import React from 'react';
import { storiesOf } from '@storybook/react';
import { Demo } from '../demo/Demo';

storiesOf('usePosition', module)
  .add('Fetching once', () => <Demo />)
  .add('Watching', () => <Demo watch />);
