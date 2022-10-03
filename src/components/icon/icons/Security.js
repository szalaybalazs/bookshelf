import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';

export default function Security(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/security' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='primary'
          d='M4,4 L12,2 L20,4 L20,13.0557281 C20,16.0859046 18.287981,18.8560095 15.5777088,20.2111456 L12,22 L12,22 L8.42229124,20.2111456 C5.71201901,18.8560095 4,16.0859046 4,13.0557281 L4,4 L4,4 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M6,12 L6,5.56155281 L12,4.06155281 L12,12 L6,12 Z M12,19.763932 L12,12 L18,12 L18,13.0557281 C18,15.3283604 16.7159857,17.4059392 14.6832816,18.4222912 L12,19.763932 L12,19.763932 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
