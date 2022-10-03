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

export default function Bell(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/bell' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='bell' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(3.000000, 2.000000)'>
          <Path
            id='Path'
            d='M15,6 C15,2.6862915 12.3137085,0 9,0 C5.6862915,0 3,2.6862915 3,6 C3,13 0,15 0,15 L18,15 C18,15 15,13 15,6'
          />
          <Path
            id='Path'
            d='M10.73,19 C10.3722022,19.6168043 9.71306861,19.9964563 9,19.9964563 C8.28693139,19.9964563 7.62779776,19.6168043 7.27,19'
          />
        </G>
      </G>
    </Svg>
  );
}
