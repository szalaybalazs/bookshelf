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

export default function EditNew(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/edit-new' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='edit' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(2.000000, 2.000000)'>
          <Path
            id='Path'
            d='M9,2.12132031 L2,2.12132031 C0.8954305,2.12132031 0,3.01675081 0,4.12132031 L0,18.1213203 C0,19.2258898 0.8954305,20.1213203 2,20.1213203 L16,20.1213203 C17.1045695,20.1213203 18,19.2258898 18,18.1213203 L18,11.1213203'
          />
          <Path
            id='Path'
            d='M16.5,0.621320312 C17.3284271,-0.207106783 18.6715729,-0.207106769 19.5,0.621320344 C20.3284271,1.44974746 20.3284271,2.79289318 19.5,3.62132031 L10,13.1213203 L6,14.1213203 L7,10.1213203 L16.5,0.621320312 Z'
          />
        </G>
      </G>
    </Svg>
  );
}
