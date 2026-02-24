import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function FilterIcon(props:SvgProps) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.125 1.875h5.625v1.25H8.125v-1.25zM1.25 1.875h5.625v1.25H1.25v-1.25zM6.875 6.875h6.875v1.25H6.875v-1.25zM1.25 6.875h4.375v1.25H1.25v-1.25zM9.375 11.875h4.375v1.25H9.375v-1.25zM1.25 11.875h6.875v1.25H1.25v-1.25z"
        fill="#546278"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.375.625v3.75h-1.25V.625h1.25zM5.625 5.625v3.75h-1.25v-3.75h1.25zM10.625 10.625v3.75h-1.25v-3.75h1.25z"
        fill="#546278"
      />
    </Svg>
  )
}

export default FilterIcon
