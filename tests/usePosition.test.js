import React from 'react';
import { Demo } from '../demo/Demo';
import renderer, { act } from 'react-test-renderer';

const mockPosition = {
  coords: {
    latitude: 52.3172414,
    longitude: 4.8717809,
    accuracy: 24,
  },
  timestamp: 1561815013194,
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
    global.navigator.geolocation = {
      watchPosition: (onChange, onError) => {
        onChange(mockPosition);
      },
    };
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return latitude and longitude while fetching', () => {    
    global.navigator.geolocation = {
      getCurrentPosition: (onChange, onError) => {
        onChange(mockPosition);
      },
    };
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while watching', () => {    
    global.navigator.geolocation = {
      watchPosition: (onChange, onError) => {
        onError(new Error('User denied Geolocation'));
      },
    };
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<Demo watch />);
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while fetching', () => {    
    global.navigator.geolocation = {
      getCurrentPosition: (onChange, onError) => {
        onError(new Error('User denied Geolocation'));
      },
    };
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
});
