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

export default function Camera(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/camera' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='camera' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(1.000000, 3.000000)'>
          <Path
            id='Path'
            d='M22,16 C22,17.1045695 21.1045695,18 20,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,5 C0,3.8954305 0.8954305,3 2,3 L6,3 L8,0 L14,0 L16,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,16 Z'
          />
          <Circle id='Oval' x='11' y='10' r='4' />
        </G>
      </G>
    </Svg>
  );
}
