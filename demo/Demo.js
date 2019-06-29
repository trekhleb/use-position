import React from 'react';
import PropTypes from 'prop-types';
import {usePosition} from '../src/usePosition';

export const Demo = ({watch}) => {
  const {latitude, longitude, timestamp, accuracy, error} = usePosition(watch);

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

Demo.propTypes = {
  watch: PropTypes.bool,
};
