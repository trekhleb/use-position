import {useState, useEffect} from 'react';

const settings = {
  enableHighAccuracy: false,
};

export const usePosition = (watch = false) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      timestamp: position.timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setErr(new Error('Geolocation is not supported by this browser'));
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
