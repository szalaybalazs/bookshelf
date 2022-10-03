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

export default function Questionmark(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/questionmark' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='help-circle' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(2.000000, 2.000000)'>
          <Circle id='Oval' x='10' y='10' r='10' />
          <Path
            id='Path'
            d='M7.09,7 C7.57543688,5.62004444 8.98538362,4.79140632 10.4271763,5.0387121 C11.868969,5.28601788 12.9221794,6.53715293 12.9200034,8 C12.9200034,10 9.92,11 9.92,11'
          />
          <Line id='Path' x1='10' x2='10.01' y1='15' y2='15' />
        </G>
      </G>
    </Svg>
  );
}
