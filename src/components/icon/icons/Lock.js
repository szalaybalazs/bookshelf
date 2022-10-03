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

export default function Lock(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/lock' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='Path'
          d='M12,10 L12,13 C10.8954305,13 10,13.8954305 10,15 C10,15.7402824 10.4021986,16.3866262 11,16.7324356 L11,18 C11,18.5522847 11.4477153,19 12,19 L12,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,12 C3,10.8954305 3.8954305,10 5,10 L12,10 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M12,19 C12.5522847,19 13,18.5522847 13,18 L13,16.7324356 C13.5978014,16.3866262 14,15.7402824 14,15 C14,13.8954305 13.1045695,13 12,13 L12,10 L15,10 L15,7 C15,5.34314575 13.6568542,4 12,4 C10.3431458,4 9,5.34314575 9,7 L9,10 L7,10 L7,7 C7,4.23857625 9.23857625,2 12,2 C14.7614237,2 17,4.23857625 17,7 L17,10 L19,10 C20.1045695,10 21,10.8954305 21,12 L21,20 C21,21.1045695 20.1045695,22 19,22 L12,22 L12,19 Z'
          fill={props.color || '#0D2B3E'}
          fillRule='nonzero'
        />
      </G>
    </Svg>
  );
}
