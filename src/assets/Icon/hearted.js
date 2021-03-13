import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={20.467}
      viewBox="0 0 25 20.467"
      {...props}>
      <Path
        data-name="Path 60"
        d="M18.2 0A6.833 6.833 0 0125 6.8c0 6.867-12.5 13.667-12.5 13.667S0 13.567 0 6.8A6.8 6.8 0 016.8 0a6.733 6.733 0 015.7 3.067A6.8 6.8 0 0118.2 0z"
        fill="#d7443e"
      />
    </Svg>
  );
}

export default SvgComponent;
