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

export default function Plus(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/plus' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='plus-(2)' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(5.000000, 5.000000)'>
          <Line id='Path' x1='7' x2='7' y1='0' y2='14' />
          <Line id='Path' x1='0' x2='14' y1='7' y2='7' />
        </G>
      </G>
    </Svg>
  );
}
