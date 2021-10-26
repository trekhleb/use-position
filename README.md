# React hook for following a browser geolocation

[![npm version](https://badge.fury.io/js/use-position.svg)](https://badge.fury.io/js/use-position)
[![codecov](https://codecov.io/gh/trekhleb/use-position/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/use-position)

React hook `usePosition()` allows you to fetch a client's browser geolocation and/or subscribe to all further geolocation changes.

▶︎ [Storybook demo](https://trekhleb.github.io/use-position/) of `usePosition()` hook.

![](https://repository-images.githubusercontent.com/194388894/00bf0e80-9a90-11e9-917f-aeaa68667edf)

## Installation

Using `yarn`:

```bash
yarn add use-position
```

Using `npm`:

```bash
npm i use-position --save
```

## Usage

Import the hook:

```javascript
import { usePosition } from 'use-position';
```

### Fetching client location

```javascript
const {
  latitude,
  longitude,
  speed,
  timestamp,
  accuracy,
  heading,
  error,
} = usePosition();
```

### Following client location

In this case if browser detects geolocation change the `latitude`, `longitude` and `timestamp` values will be updated.

```javascript
const watch = true;
const {
  latitude,
  longitude,
  speed,
  timestamp,
  accuracy,
  heading,
  error,
} = usePosition(watch);
```

### Following client location with the highest accuracy

The second parameter of `usePosition()` hook is [position options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).

```javascript
const watch = true;
const {
  latitude,
  longitude,
  speed,
  timestamp,
  accuracy,
  heading,
  error,
} = usePosition(watch, { enableHighAccuracy: true });
```

### Full example

```javascript
import React from 'react';
import { usePosition } from 'use-position';

export const Demo = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    heading,
    error,
  } = usePosition(watch);

  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      speed: {speed}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy} meters`}<br/>
      heading: {heading && `${heading} degrees`}<br/>
      error: {error}
    </code>
  );
};
```

## Specification

### `usePosition()` input

- `watch: boolean` - set it to `true` to follow the location.
- `settings: object` - [position options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)
  - `settings.enableHighAccuracy` - indicates the application would like to receive the most accurate results (default `false`),
  - `settings.timeout` - maximum length of time (in milliseconds) the device is allowed to take in order to return a position (default `Infinity`),
  - `settings.maximumAge` - the maximum age in milliseconds of a possible cached position that is acceptable to return (default `0`).

### `usePosition()` output

- `latitude: number` - latitude (i.e. `52.3172414`),
- `longitude: number` - longitude (i.e. `4.8717809`),
- `speed: number | null` - velocity of the device in meters per second (i.e. `2.5`),
- `timestamp: number` - timestamp when location was detected (i.e. `1561815013194`),
- `accuracy: number` - location accuracy in meters (i.e. `24`),
- `heading: number | null` - direction in which the device is traveling, in degrees (`0` degrees - north, `90` degrees - east, `270` degrees - west, and so on),
- `error: string` - error message or `null` (i.e. `User denied Geolocation`)
