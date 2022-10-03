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

export default function Clipboard(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/clipboard' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='clipboard' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(4.000000, 2.000000)'>
          <Path
            id='Path'
            d='M12,2 L14,2 C15.1045695,2 16,2.8954305 16,4 L16,18 C16,19.1045695 15.1045695,20 14,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,4 C0,2.8954305 0.8954305,2 2,2 L4,2'
          />
          <Rect height='4' id='Rectangle' width='8' rx='1' x='4' y='0' />
        </G>
      </G>
    </Svg>
  );
}
