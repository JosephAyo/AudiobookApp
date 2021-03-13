import * as React from 'react';
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  G,
  Circle,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={95}
      height={95}
      viewBox="0 0 95 95"
      {...props}>
      <Defs>
        <RadialGradient
          id="prefix__b"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#f3f3f3" />
        </RadialGradient>
      </Defs>
      <G data-name="Group 65">
        <G filter="url(#prefix__a)">
          <Circle
            data-name="Ellipse 9"
            cx={25}
            cy={25}
            r={25}
            transform="translate(22.5 19.5)"
            fill="url(#prefix__b)"
          />
        </G>
        <G data-name="Group 6">
          <Path
            data-name="Path 50"
            d="M57.5 43.25H42.288l6.981-6.981L47.5 34.5l-10 10 10 10 1.769-1.769-6.981-6.981H57.5z"
            fill="#161515"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
