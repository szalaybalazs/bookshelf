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

export default function ArrowBottom(props) {
  return (
    <Svg width={62} height={62} xmlns='http://www.w3.org/2000/svg' {...props}>
      <G
        transform='translate(1 1)'
        stroke='#FF0065'
        strokeWidth={2}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Circle cx={30} cy={30} r={30} />
        <Path d='M39 21L21 39M21 21l18 18' />
      </G>
    </Svg>
  );
}
