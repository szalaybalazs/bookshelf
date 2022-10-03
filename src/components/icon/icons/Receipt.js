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

export default function Receipt(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/receipt' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='primary'
          d='M9,18.4142136 L6.70710678,20.7071068 C6.31658249,21.0976311 5.68341751,21.0976311 5.29289322,20.7071068 L3.29289322,18.7071068 C3.10535684,18.5195704 3,18.2652165 3,18 L3,5 C3,3.8954305 3.8954305,3 5,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,18 C21,18.2652165 20.8946432,18.5195704 20.7071068,18.7071068 L18.7071068,20.7071068 C18.3165825,21.0976311 17.6834175,21.0976311 17.2928932,20.7071068 L15,18.4142136 L12.7071068,20.7071068 C12.3165825,21.0976311 11.6834175,21.0976311 11.2928932,20.7071068 L9,18.4142136 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L17,11 Z M17,7 C17.5522847,7 18,7.44771525 18,8 C18,8.55228475 17.5522847,9 17,9 L7,9 C6.44771525,9 6,8.55228475 6,8 C6,7.44771525 6.44771525,7 7,7 L17,7 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
