import React from 'react';
import { Demo } from '../demo/Demo';
import renderer, { act } from 'react-test-renderer';

const mockPosition = {
  coords: {
    latitude: 52.3172414,
    longitude: 4.8717809,
    accuracy: 24,
    heading: 90,
    speed: 0,
  },
  timestamp: 1561815013194,
};

const mockWatcherId = 1;

const mockGeolocation = {
  watchPosition: onChange => {
    onChange(mockPosition);
    return mockWatcherId;
  },
  getCurrentPosition: onChange => onChange(mockPosition),
  clearWatch: jest.fn(),
};

const mockGeolocationError = {
  watchPosition: (onChange, onError) => onError(new Error('User denied Geolocation')),
  getCurrentPosition: (onChange, onError) => onError(new Error('User denied Geolocation')),
  clearWatch: jest.fn(),
};

describe('usePosition', () => {
  it('should return empty values by default', () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return empty values by default in watching mode', () => {
    const tree = renderer.create(<Demo watch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return latitude and longitude while watching', () => {
    global.navigator.geolocation = mockGeolocation;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return latitude and longitude while fetching', () => {
    global.navigator.geolocation = mockGeolocation;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while watching', () => {
    global.navigator.geolocation = mockGeolocationError;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while fetching', () => {
    global.navigator.geolocation = mockGeolocationError;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error if navigator is not supported', () => {
    global.navigator.geolocation = null;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should clear watcher on component unmount', () => {
    global.navigator.geolocation = mockGeolocation;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch />);
    });
    act(() => {
      testRenderer.unmount();
    });
    expect(global.navigator.geolocation.clearWatch).toHaveBeenCalledWith(mockWatcherId);
  });

  it('should not clear watcher on component unmount', () => {
    global.navigator.geolocation = mockGeolocation;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo />);
    });
    act(() => {
      testRenderer.unmount();
    });
    expect(global.navigator.geolocation.clearWatch).not.toHaveBeenCalled();
  });

  it('should return latitude and longitude even if watch is undefined', () => {
    global.navigator.geolocation = mockGeolocation;
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch={undefined} />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
