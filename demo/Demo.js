import React from 'react';
import PropTypes from 'prop-types';
import {usePosition} from '../src/usePosition';

export const Demo = ({watch, settings}) => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    speed,
    error,
  } = usePosition(watch, settings);

  const loader = !latitude && !error ? (
    <>
      <div>Trying to fetch location...</div>
      <br/>
    </>
  ) : null;

  return (
    <>
      {loader}
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        speed: {speed}<br/>
        error: {error}
      </code>
    </>
  );
};

Demo.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};
