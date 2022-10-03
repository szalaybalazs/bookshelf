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
    <Svg
      width={props.width ?? 62}
      height={props.height ?? 62}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#00FF7F'
        strokeWidth={2}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M61 28.259v2.76a30 30 0 11-17.79-27.42' />
        <Path d='M61 7.019l-30 30.03-9-9' />
      </G>
    </Svg>
  );
}
