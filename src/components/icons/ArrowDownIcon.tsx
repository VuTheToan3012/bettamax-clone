import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function ArrowDownIcon(props: SvgProps) {
  return (
    <Svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.943 0l6.943 6.943-.943.943L0 .943.943 0z"
        fill="#EB403C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.276.276V7.61a.667.667 0 01-.667.667H.276V6.943h6.667V.276h1.333z"
        fill="#EB403C"
      />
    </Svg>
  )
}

export default ArrowDownIcon
