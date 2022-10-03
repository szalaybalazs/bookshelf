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

export default function Download(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/download' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='download-(1)' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 3.000000)'>
          <Path
            id='Path'
            d='M18,12 L18,16 C18,17.1045695 17.1045695,18 16,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,12'
          />
          <Polyline id='Path' points='4 7 9 12 14 7' />
          <Line id='Path' x1='9' x2='9' y1='12' y2='0' />
        </G>
      </G>
    </Svg>
  );
}
