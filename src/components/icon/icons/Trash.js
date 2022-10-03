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

export default function Trash(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/trash' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='trash' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 2.000000)'>
          <Polyline id='Path' points='0 4 2 4 18 4' />
          <Path
            id='Shape'
            d='M16,4 L16,18 C16,19.1045695 15.1045695,20 14,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,4 M5,4 L5,2 C5,0.8954305 5.8954305,0 7,0 L11,0 C12.1045695,0 13,0.8954305 13,2 L13,4'
          />
        </G>
      </G>
    </Svg>
  );
}
