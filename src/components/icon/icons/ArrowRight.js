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

export default function ArrowRight(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/arrow/right' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G
          id='arrow-left-(2)'
          stroke={props.color ?? '#000'}
          strokeWidth='2'
          transform='translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) translate(5.000000, 5.000000)'
        >
          <Line id='Path' x1='14' x2='0' y1='7' y2='7' />
          <Polyline id='Path' points='7 14 0 7 7 0' />
        </G>
      </G>
    </Svg>
  );
}
