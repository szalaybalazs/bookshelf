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

export default function Info(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/info' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='info' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(2.000000, 2.000000)'>
          <Circle id='Oval' x='10' y='10' r='10' />
          <Line id='Path' x1='10' x2='10' y1='14' y2='10' />
          <Line id='Path' x1='10' x2='10.01' y1='6' y2='6' />
        </G>
      </G>
    </Svg>
  );
}
