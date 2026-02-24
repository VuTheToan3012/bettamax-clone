import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CancelIcon(props:SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.943 8l4-4L12 3.057l-4 4-4-4L3.057 4l4 4-4 4 .943.943 4-4 4 4 .943-.943-4-4z"
        fill="#546278"
      />
    </Svg>
  )
}

export default CancelIcon
