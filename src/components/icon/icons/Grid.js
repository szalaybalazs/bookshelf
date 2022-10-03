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

export default function Grid(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/grid' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='grid' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 3.000000)'>
          <Rect height='7' id='Rectangle' width='7' x='0' y='0' />
          <Rect height='7' id='Rectangle' width='7' x='11' y='0' />
          <Rect height='7' id='Rectangle' width='7' x='11' y='11' />
          <Rect height='7' id='Rectangle' width='7' x='0' y='11' />
        </G>
      </G>
    </Svg>
  );
}
