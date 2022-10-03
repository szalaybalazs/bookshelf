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

export default function Bolt(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/bolt' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Circle id='primary' x='12' y='12' fill={props.color || '#0D2B3E'} opacity='0.400000006' r='10' />
        <Path
          id='secondary'
          d='M14,10 L16,10 C16.8133726,10 17.2864967,10.9193697 16.8137335,11.5812382 L11.8137335,18.5812382 C11.2482824,19.3728697 10,18.9728389 10,18 L10,14 L8,14 C7.18662744,14 6.71350333,13.0806303 7.18626653,12.4187618 L12.1862665,5.41876181 C12.7517176,4.62713025 14,5.02716112 14,6 L14,10 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
