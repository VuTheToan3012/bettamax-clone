import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  fill?: string;
}

const PayoutIcon: React.FC<Props> = ({
  fill = "#8B99B1",
  ...props
}) => {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.167 1.667a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM0 9.167a9.167 9.167 0 1118.333 0A9.167 9.167 0 010 9.167z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.732 5.732A2.5 2.5 0 017.5 5h5.833v1.667H7.5a.833.833 0 100 1.666h3.333a2.5 2.5 0 110 5H5v-1.666h5.833a.833.833 0 000-1.667H7.5a2.5 2.5 0 01-1.768-4.268z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.333V15H8.333V3.333H10z"
        fill={fill}
      />
    </Svg>
  )
}

export default PayoutIcon
