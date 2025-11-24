import {useState, useEffect} from 'react';

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const usePosition = (watch = false, userSettings = {}, skip = false) => {
  const settings = {
    ...defaultSettings,
    ...userSettings,
  };

  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({coords, timestamp}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      heading: coords.heading,
      timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (skip) {
      return;
    }

    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    if (watch) {
      const watcher =
        navigator.geolocation.watchPosition(onChange, onError, settings);
      return () => navigator.geolocation.clearWatch(watcher);
    }

    navigator.geolocation.getCurrentPosition(onChange, onError, settings);
  }, [
    watch,
    settings.enableHighAccuracy,
    settings.timeout,
    settings.maximumAge,
    skip,
  ]);

  return {...position, error};
};
