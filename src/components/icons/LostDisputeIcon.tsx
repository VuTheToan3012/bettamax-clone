import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent(props:SvgProps) {
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
        d="M2.5 1.667a.833.833 0 00-.833.833v11.322l1.91-1.911a.834.834 0 01.59-.244h10a.833.833 0 00.833-.834V2.5a.833.833 0 00-.833-.833H2.5zM.732.732A2.5 2.5 0 012.5 0h11.667a2.5 2.5 0 012.5 2.5v8.333a2.5 2.5 0 01-2.5 2.5H4.512l-3.09 3.09A.833.833 0 010 15.833V2.5A2.5 2.5 0 01.732.732z"
        fill="#8B99B1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.595 4.583L6.25 9.93 5.072 8.75l5.345-5.345 1.178 1.178z"
        fill="#8B99B1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 3.405l5.345 5.345-1.178 1.179-5.345-5.346L6.25 3.405z"
        fill="#8B99B1"
      />
    </Svg>
  )
}

export default SvgComponent
