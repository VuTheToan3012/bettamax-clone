import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LogOutIcon(props:SvgProps) {
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
        d="M2.5 1.667a.833.833 0 00-.833.833v11.667A.833.833 0 002.5 15h4.167v1.667H2.5a2.5 2.5 0 01-2.5-2.5V2.5A2.5 2.5 0 012.5 0h4.167v1.667H2.5zM11.667 2.988l4.756 4.756a.833.833 0 010 1.179l-4.756 4.755-1.179-1.178 4.167-4.167-4.167-4.166 1.179-1.179z"
        fill="#EB403C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7.5h10.833v1.667H5V7.5z"
        fill="#EB403C"
      />
    </Svg>
  )
}

export default LogOutIcon
