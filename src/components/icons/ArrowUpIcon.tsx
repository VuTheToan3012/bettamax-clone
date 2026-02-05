import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function ArrowUpIcon(props: SvgProps) {
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
        d="M4 4h7.333c.368 0 .667.298.667.667V12h-1.333V5.333H4V4z"
        fill="#2EB26C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.61 5.333l-6.943 6.943-.943-.943 6.943-6.942.943.942z"
        fill="#2EB26C"
      />
    </Svg>
  )
}

export default ArrowUpIcon
