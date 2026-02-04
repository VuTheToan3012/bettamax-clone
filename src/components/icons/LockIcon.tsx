import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LockIcon(props: SvgProps) {
  return (
    <Svg

      width={14}
      height={10}
      viewBox="0 0 14 10"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.875 1.25A6.094 6.094 0 001.25 5 6.094 6.094 0 0012.5 5a6.094 6.094 0 00-5.625-3.75zm-4.084-.01a7.344 7.344 0 0110.881 3.325 1.25 1.25 0 01-.008.89 7.344 7.344 0 01-13.586-.02 1.25 1.25 0 01.008-.891A7.344 7.344 0 012.791 1.24z"
        fill="#546278"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.875 3.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM4.375 5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
        fill="#546278"
      />
    </Svg>
  )
}

export default LockIcon
