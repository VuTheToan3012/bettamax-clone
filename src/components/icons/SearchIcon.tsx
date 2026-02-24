import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SearchIcon(props:SvgProps) {
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
        d="M7.333 2.667a4.667 4.667 0 100 9.333 4.667 4.667 0 000-9.333zm-6 4.667a6 6 0 1112 0 6 6 0 01-12 0z"
        fill="#C3CAD5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.133 10.19l3.81 3.81-.943.943-3.81-3.81.943-.942z"
        fill="#C3CAD5"
      />
    </Svg>
  )
}

export default SearchIcon
