import React from 'react';
import { storiesOf } from '@storybook/react';
import { Demo } from '../demo/Demo';

const highAccuracySettings = {
  enableHighAccuracy: true,
};

storiesOf('usePosition', module)
  .add('fetching', () => <Demo/>)
  .add('watching', () => <Demo watch/>)
  .add('high accuracy watching', () => (
    <Demo watch settings={highAccuracySettings}/>
  ));
