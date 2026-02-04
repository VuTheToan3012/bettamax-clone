import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function EmailIcon(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={12}
      viewBox="0 0 15 12"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 1.333A.667.667 0 001.333 2v8c0 .368.299.667.667.667h10.667a.667.667 0 00.666-.667V2a.667.667 0 00-.666-.667H2zM0 2a2 2 0 012-2h10.667a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
        fill="#C3CAD5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.78 2.083L7 5.902a.627.627 0 00.666 0l.005-.003 6.215-3.816.698 1.136-1.25.768L8.37 7.033a1.96 1.96 0 01-2.075 0L1.333 3.987l-1.25-.768.698-1.136z"
        fill="#C3CAD5"
      />
      <Path
        d="M1.333 3.987V10c0 .368.299.667.667.667h10.667a.667.667 0 00.666-.667V3.987L8.371 7.033a1.96 1.96 0 01-2.075 0L1.333 3.987z"
        fill="#C3CAD5"
      />
    </Svg>
  )
}

export default EmailIcon
