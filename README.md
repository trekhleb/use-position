# React hook for following a browser geolocation

[![Build Status](https://travis-ci.org/trekhleb/use-position.svg?branch=master)](https://travis-ci.org/trekhleb/use-position)
[![npm version](https://badge.fury.io/js/use-position.svg)](https://badge.fury.io/js/use-position)
[![codecov](https://codecov.io/gh/trekhleb/use-position/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/use-position)

React hook `usePosition()` allows you to fetch client's browser geolocation and/or subscribe to all further geolocation changes.

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
const { latitude, longitude, timestamp, accuracy, error } = usePosition();
```

### Following client location

In this case if browser detects geolocation change the `latitude`, `longitude` and `timestamp` values will be updated.

```javascript
const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);
```

### Full example

```javascript
import React from 'react';
import { usePosition } from '../src/usePosition';

export const Demo = () => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

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

## Specification

### `usePosition()` input

- `watch: boolean` - set it to `true` to follow the location.

### `usePosition()` output

- `latitude: number` - latitude (i.e. `52.3172414`),
- `longitude: number` - longitude (i.e. `4.8717809`),
- `timestamp: number` - timestamp when location was detected (i.e. `1561815013194`),
- `accuracy: number` - location accuracy in meters (i.e. `24`),
- `error: string` - error message or `null` (i.e. `User denied Geolocation`)
