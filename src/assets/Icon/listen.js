import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      data-name="Group 34"
      viewBox="0 0 25 25"
      {...props}>
      <G fill="#fff" data-name="Group 33">
        <Path
          d="M22.878 14.969a.977.977 0 00-1.811.732l1.15 2.845-3.417-1.505a.977.977 0 00-.777 0 9.416 9.416 0 01-3.717.751c-5.228 0-8.74-4.093-8.74-7.917 0-4.365 3.921-7.917 8.74-7.917s8.74 3.551 8.74 7.917a7.964 7.964 0 01-.087 1.119.977.977 0 001.932.288A9.855 9.855 0 0025 9.87a9.439 9.439 0 00-3.163-7.009A11.1 11.1 0 0014.307 0a11.1 11.1 0 00-7.53 2.861A9.491 9.491 0 003.652 9.03 7.894 7.894 0 000 15.6a7.577 7.577 0 001.5 4.527l-1.428 3.53a.977.977 0 001.3 1.26L5.484 23.1a9.294 9.294 0 003.257.58h.072a9.243 9.243 0 004.595-1.245 8.407 8.407 0 002.954-2.877 11.238 11.238 0 002.029-.564L23.63 21.3a.977.977 0 001.3-1.26zM8.741 21.728h-.04a7.324 7.324 0 01-2.853-.583.976.976 0 00-.777 0L2.784 22.16l.738-1.825a.977.977 0 00-.162-1A5.7 5.7 0 011.953 15.6a5.81 5.81 0 011.805-4.16 9.858 9.858 0 002.889 5.279 10.916 10.916 0 007.1 3.006 7.177 7.177 0 01-5.006 2.003z"
          data-name="Path 55"
        />
        <Circle
          cx={0.977}
          cy={0.977}
          r={0.977}
          data-name="Ellipse 11"
          transform="translate(13.281 8.936)"
        />
        <Circle
          cx={0.977}
          cy={0.977}
          r={0.977}
          data-name="Ellipse 12"
          transform="translate(17.187 8.936)"
        />
        <Circle
          cx={0.977}
          cy={0.977}
          r={0.977}
          data-name="Ellipse 13"
          transform="translate(9.375 8.936)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
