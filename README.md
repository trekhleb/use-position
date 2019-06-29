# React hook for following a browser location

## Installation

```bash
npm i --save
```

or

```bash
yarn add use-position
```

## Usage

Import package:

```javascript
import { usePosition } from 'use-position';

export const Demo = () => {
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
```

Fetch location from the hook:

```javascript
const {latitude, longitude, timestamp, accuracy, error } = usePosition(watch);
```
