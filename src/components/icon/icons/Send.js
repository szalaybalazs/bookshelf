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

export default function Send(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/send' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='Group' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(2.000000, 2.000000)'>
          <Line id='Path' x1='20' x2='9' y1='0' y2='11' />
          <Polygon id='Path' points='20 0 13 20 9 11 0 7' />
        </G>
      </G>
    </Svg>
  );
}
