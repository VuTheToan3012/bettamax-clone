import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function UpIcon(props:SvgProps) {
  return (
    <Svg
      width={9}
      height={5}
      viewBox="0 0 9 5"
      fill="none"
      {...props}
    >
      <Path
        d="M8.19 4.558L4.342.096a.293.293 0 00-.434 0L.06 4.558c-.143.167-.014.41.217.41h7.697c.23 0 .36-.243.216-.41z"
        fill="#4B56F3"
      />
    </Svg>
  )
}

export default UpIcon
