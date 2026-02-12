import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function AccountIcon1(props:SvgProps) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05 14.05a7 7 0 019.9 0C17.183 15.283 18 16.55 18 18.5v1h-2v-1c0-1.232-.447-2.018-1.464-3.036a5 5 0 00-7.072 0C6.447 16.482 6 17.268 6 18.5v1H4v-1c0-1.951.817-3.217 2.05-4.45z"
        fill="#546278"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6a3 3 0 100 6 3 3 0 000-6zM6 9a5 5 0 1110 0A5 5 0 016 9z"
        fill="#546278"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a9 9 0 100 18 9 9 0 000-18zM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11z"
        fill="#546278"
      />
    </Svg>
  )
}

export default AccountIcon1
