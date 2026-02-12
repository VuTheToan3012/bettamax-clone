import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  fill?: string;
}

const OrderIcon: React.FC<Props> = ({
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
        d="M4.125 16.625a1.667 1.667 0 113.333 0 1.667 1.667 0 01-3.333 0zM13.292 16.625a1.667 1.667 0 113.333 0 1.667 1.667 0 01-3.333 0zM0 0h2.5c.393 0 .733.275.815.659l.751 3.508h13.467a.833.833 0 01.814 1.014l-1.375 6.19a2.501 2.501 0 01-2.437 1.962H6.392a2.5 2.5 0 01-2.49-1.975L1.826 1.667H0V0zm4.423 5.833l1.108 5.175a.834.834 0 00.834.659h8.167a.834.834 0 00.813-.655l1.15-5.179H4.423z"
        fill={fill}
      />
    </Svg>
  )
}

export default OrderIcon
