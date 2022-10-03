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

export default function Edit(props) {
  return (
    <Svg height={props.height ?? 24} width={props.width ?? 24} version='1.1' viewBox='0 0 24 24'>
      <G id='icon/edit' fill='none' fillRule='evenodd' stroke='none' strokeLinecap='round' strokeWidth='1'>
        <G id='edit-2' stroke={props.color ?? '#000'} strokeWidth='2' transform='translate(2.000000, 2.000000)'>
          <Path
            id='Path'
            d='M15,0.828491576 C15.7145312,0.113960379 16.7559831,-0.165095826 17.7320508,0.0964407352 C18.7081186,0.357977297 19.4705143,1.120373 19.7320508,2.09644075 C19.9935874,3.07250851 19.7145312,4.1139604 19,4.82849158 L5.5,18.3284916 L0,19.8284916 L1.5,14.3284916 L15,0.828491576 Z'
          />
        </G>
      </G>
    </Svg>
  );
}
