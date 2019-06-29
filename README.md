# React hook `usePosition()` for following a browser geolocation

## Installation

```bash
npm i use-position --save
```

or

```bash
yarn add use-position
```

## Usage

Import package:

```javascript
import { usePosition } from 'use-position';
```

Fetch location from the hook:

```javascript
const { latitude, longitude, timestamp, accuracy, error } = usePosition(watch);
```
