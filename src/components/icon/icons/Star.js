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

export default function Star(props) {
  return (
    <Svg height='24px' width='24px' version='1.1' viewBox='0 0 24 24'>
      <G id='icon/star' fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <Circle id='primary' x='12' y='12' fill={props.color || '#0D2B3E'} opacity='0.400000006' r='10' />
        <Path
          id='secondary'
          d='M9.52641487,16.9302164 C8.79278748,17.3159071 7.93535505,16.692946 8.07546541,15.8760399 L8.54787814,13.1216624 L6.54670573,11.1710014 C5.95318871,10.5924653 6.28069875,9.58449301 7.1009191,9.46530801 L9.86647136,9.06344975 L11.1032639,6.55743429 C11.4700776,5.81418857 12.5299224,5.81418857 12.8967361,6.55743429 L14.1335286,9.06344975 L16.8990809,9.46530801 C17.7193012,9.58449301 18.0468113,10.5924653 17.4532943,11.1710014 L15.4521219,13.1216624 L15.9245346,15.8760399 C16.0646449,16.692946 15.2072125,17.3159071 14.4735851,16.9302164 L12,15.6297757 L9.52641487,16.9302164 Z'
          fill={props.color || '#0D2B3E'}
        />
      </G>
    </Svg>
  );
}
