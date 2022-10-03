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

export default function Repeat(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/repeat' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='repeat-(1)' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 1.000000)'>
          <Polyline id='Path' points='14 0 18 4 14 8' />
          <Path id='Path' d='M0,10 L0,8 C0,5.790861 1.790861,4 4,4 L18,4' />
          <Polyline id='Path' points='4 22 0 18 4 14' />
          <Path id='Path' d='M18,12 L18,14 C18,16.209139 16.209139,18 14,18 L0,18' />
        </G>
      </G>
    </Svg>
  );
}
