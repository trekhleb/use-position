import React from 'react';
import { usePosition } from '../src/usePosition';

export const Demo = ({watch = false}) => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(watch);

  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy}m`}<br/>
      error: {error}
    </code>
  );
};
