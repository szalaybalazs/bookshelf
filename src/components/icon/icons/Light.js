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

export default function Light(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/light' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Path
          id='primary'
          d='M12,1 C15.8659932,1 19,4.13400675 19,8 C19,10.4855686 17.6924639,12.7388012 15.6214874,13.9915826 L14.9805807,17.1961161 C14.8870958,17.6635403 14.476681,18 14,18 L10,18 C9.52331898,18 9.11290416,17.6635403 9.01941932,17.1961161 L8.37851262,13.9915826 C6.30753613,12.7388012 5,10.4855686 5,8 C5,4.13400675 8.13400675,1 12,1 Z M12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 C13.6568542,5 15,6.34314575 15,8 C15,8.55228475 15.4477153,9 16,9 C16.5522847,9 17,8.55228475 17,8 C17,5.23857625 14.7614237,3 12,3 Z'
          fill={props.color || '#0D2B3E'}
          opacity='0.400000006'
        />
        <Path
          id='secondary'
          d='M15,21 C15,22.1045695 14.1045695,23 13,23 L11,23 C9.8954305,23 9,22.1045695 9,21 C8.44771525,21 8,20.5522847 8,20 C8,19.4477153 8.44771525,19 9,19 L15,19 C15.5522847,19 16,19.4477153 16,20 C16,20.5522847 15.5522847,21 15,21 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
