# React hook `usePosition()` for following a browser geolocation

## Installation

Using `npm`:

```bash
npm i use-position --save
```

Using `yarn`:

```bash
yarn add use-position
```

## Usage

Import hook:

```javascript
import { usePosition } from 'use-position';
```

Fetch location from the hook:

```javascript
const { latitude, longitude, timestamp, accuracy, error } = usePosition(watch);
```
