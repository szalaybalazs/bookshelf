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

export default function Share(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/share' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='share' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(4.000000, 2.000000)'>
          <Path
            id='Path'
            d='M0,10 L0,18 C0,19.1045695 0.8954305,20 2,20 L14,20 C15.1045695,20 16,19.1045695 16,18 L16,10'
          />
          <Polyline id='Path' points='12 4 8 0 4 4' />
          <Line id='Path' x1='8' x2='8' y1='0' y2='13' />
        </G>
      </G>
    </Svg>
  );
}
