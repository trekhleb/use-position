import React from 'react';
import { usePosition } from '../src/usePosition';

export const Demo = ({watch = false}) => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error
  } = usePosition(watch);

  return (
    <ul>
      <li><code>latitude: {latitude}</code></li>
      <li><code>longitude: {longitude}</code></li>
      <li><code>timestamp: {timestamp}</code></li>
      <li><code>accuracy: {accuracy}{accuracy && 'm'}</code></li>
      <li><code>error: {error}</code></li>
    </ul>
  );
};
