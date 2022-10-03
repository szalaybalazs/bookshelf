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

export default function Scan(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/scan' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='grid' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 3.000000)'>
          <Polyline
            id='Rectangle-Copy'
            points='6 12 6 18 8.1680694e-16 18'
            transform='translate(3.000000, 15.000000) scale(-1, 1) translate(-3.000000, -15.000000) '
          />
          <Line
            id='Rectangle-Copy-5'
            transform='translate(9.500000, 9.000000) scale(-1, 1) translate(-9.500000, -9.000000) '
            x1='13'
            x2='6'
            y1='9'
            y2='9'
          />
          <Polyline
            id='Rectangle-Copy-3'
            points='6 -3.33780622e-14 6 6 8.1680694e-16 6'
            transform='translate(3.000000, 3.000000) scale(-1, -1) translate(-3.000000, -3.000000) '
          />
          <Polyline id='Rectangle-Copy-2' points='18 12 18 18 12 18' />
          <Polyline
            id='Rectangle-Copy-4'
            points='18 -3.33780622e-14 18 6 12 6'
            transform='translate(15.000000, 3.000000) scale(1, -1) translate(-15.000000, -3.000000) '
          />
        </G>
      </G>
    </Svg>
  );
}
