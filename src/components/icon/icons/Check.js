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

export default function Check(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/check' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='check' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(4.000000, 7.000000)'>
          <Polyline id='Path' points='16 0 5 11 0 6' />
        </G>
      </G>
    </Svg>
  );
}
