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

export default function Auth(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/auth' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='lock' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 2.000000)'>
          <Rect height='11' id='Rectangle' width='18' rx='2' x='0' y='9' />
          <Path
            id='Path'
            d='M4,9 L4,5 C4,2.23857625 6.23857625,8.8817842e-16 9,8.8817842e-16 C11.7614237,8.8817842e-16 14,2.23857625 14,5 L14,9'
          />
        </G>
      </G>
    </Svg>
  );
}
