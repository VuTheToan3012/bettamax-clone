import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function DownIcon(props:SvgProps) {
  return (
    <Svg
      width={9}
      height={5}
      viewBox="0 0 9 5"
      fill="none"
    
      {...props}
    >
      <Path
        d="M7.974 0H.277C.046 0-.083.244.06.41l3.848 4.463c.11.127.323.127.434 0L8.19.41C8.333.244 8.204 0 7.974 0z"
        fill="#8B99B1"
      />
    </Svg>
  )
}

export default DownIcon
