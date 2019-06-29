import {useState, useEffect} from 'react';

// @see: https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
const settings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const usePosition = (watch = false) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({coords, timestamp}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError(new Error('Geolocation is not supported'));
      return;
    }

    if (watch) {
      const watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }
    
    return () => watch ? geo.clearWatch(watcher) : null;
  }, [settings]);

  return {
    ...position,
    error,
  };
};
