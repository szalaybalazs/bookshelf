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

export default function User(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/user' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='primary'
          d='M12,12 C9.23857625,12 7,9.76142375 7,7 C7,4.23857625 9.23857625,2 12,2 C14.7614237,2 17,4.23857625 17,7 C17,9.76142375 14.7614237,12 12,12 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M21,20 L21,19 L21,19 C21,16.2385763 18.7614237,14 16,14 L8,14 C5.23857625,14 3,16.2385763 3,19 L3,20 C3,21.1045695 3.8954305,22 5,22 L19,22 C20.1045695,22 21,21.1045695 21,20 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
