import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22.787}
      viewBox="0 0 22 22.787"
      {...props}>
      <Path
        d="M21.666 20.755l-5.423-5.641A9.2 9.2 0 109.2 18.4a9.1 9.1 0 005.271-1.665l5.465 5.683a1.2 1.2 0 101.73-1.664zM9.2 2.4a6.8 6.8 0 11-6.8 6.8 6.808 6.808 0 016.8-6.8z"
        fill="#191818"
      />
    </Svg>
  );
}

export default SvgComponent;
