import {useState, useEffect} from 'react';

const watcherSettings = {
  enableHighAccuracy: false,
};

export const usePosition = (settings = watcherSettings) => {
  const [pos, setPos] = useState({});
  const [err, setErr] = useState(null);

  const onChange = ({coords}) => {
    setPos({
      lat: coords.latitude,
      lon: coords.longitude,
    });
  };

  const onError = (error) => {
    setErr(error);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setErr(new Error('Geolocation is not supported by this browser'));
      return;
    }

    const watcher = geo.watchPosition(onChange, onError, settings);

    return () => geo.clearWatch(watcher);
  }, [settings]);

  return {
    lat: pos.lat,
    lon: pos.lon,
    err,
  };
};
