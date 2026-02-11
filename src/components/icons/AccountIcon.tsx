import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function AccountIcon(props : SvgProps) {
  return (
    <Svg
      width={19}
      height={17}
      viewBox="0 0 19 17"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.197 10.53A7.5 7.5 0 0115 15.833v.834h-1.667v-.834a5.833 5.833 0 10-11.666 0v.834H0v-.834a7.5 7.5 0 012.197-5.303z"
        fill="#8B99B1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 1.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM2.5 5a5 5 0 1110 0 5 5 0 01-10 0zM13.5.275l.717.425a5 5 0 011.197 7.61c1.56 1.519 2.92 4.005 2.92 6.69v.833h-1.667V15c0-2.509-1.512-4.884-3-6a.833.833 0 010-1.333 3.334 3.334 0 00-.3-5.534l-.717-.425.85-1.433z"
        fill="#8B99B1"
      />
    </Svg>
  )
}

export default AccountIcon
