import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  fill?: string;
}

const PerformanceIcon: React.FC<Props> = ({
  fill = "#8B99B1",
  ...props
}) => {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.667 0v14.167A.833.833 0 002.5 15h14.167v1.667H2.5a2.5 2.5 0 01-2.5-2.5V0h1.667z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.394 1.49l1.617.404-.202.808c-.225.899-.773 2.433-1.547 3.76-.388.663-.854 1.314-1.395 1.81-.538.49-1.224.895-2.034.895-1.287 0-1.936-.982-2.31-1.548l-.05-.073c-.467-.701-.651-.88-.973-.88-.21 0-.446.097-.724.404-.286.315-.554.79-.798 1.376-.414.99-.687 2.123-.894 2.978l-.109.445-.202.808-1.617-.404.202-.808.098-.402c.204-.847.514-2.132.983-3.259.277-.663.633-1.335 1.102-1.853C6.02 5.424 6.67 5 7.5 5c1.287 0 1.937.982 2.311 1.548l.049.073c.467.7.652.879.973.879.233 0 .535-.117.91-.459.37-.338.737-.833 1.079-1.42.684-1.172 1.178-2.555 1.37-3.323l.202-.809z"
        fill={fill}
      />
    </Svg>
  );
};

export default PerformanceIcon;
