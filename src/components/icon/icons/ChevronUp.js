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

export default function ChevronUp(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/chvron/up' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G
          id='chevron-down-(1)'
          stroke={props.color ?? '#000'}
          strokeWidth='2'
          transform='translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) translate(6.000000, 9.000000)'
        >
          <Polyline id='Path' points='0 0 6 6 12 0' />
        </G>
      </G>
    </Svg>
  );
}
