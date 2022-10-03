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

export default function Wallet(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/wallet' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='primary'
          d='M2,5 C2,6.1045695 2.8954305,7 4,7 L20,7 C21.1045695,7 22,7.8954305 22,9 L22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,5 Z M18,12 C16.8954305,12 16,12.8954305 16,14 C16,15.1045695 16.8954305,16 18,16 C19.1045695,16 20,15.1045695 20,14 C20,12.8954305 19.1045695,12 18,12 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M4,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,7 L17,7 L4,7 C2.8954305,7 2,6.1045695 2,5 C2,3.8954305 2.8954305,3 4,3 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
