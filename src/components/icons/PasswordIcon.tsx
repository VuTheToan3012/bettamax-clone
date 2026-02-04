import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function PasswordIcon(props: SvgProps ) {
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
        d="M3.333 7.333A.667.667 0 002.667 8v5.333c0 .368.298.667.667.667h9.333a.667.667 0 00.667-.667V8a.667.667 0 00-.667-.667H3.333zm-2 .667a2 2 0 012-2h9.334a2 2 0 012 2v5.333a2 2 0 01-2 2H3.333a2 2 0 01-2-2V8z"
        fill="#C3CAD5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.02 2.203a2.667 2.667 0 00-3.686 2.463v2.667H4V4.666a4 4 0 017.464-2l.333.578-1.154.666-.334-.577a2.667 2.667 0 00-1.288-1.13zM3.333 7.333A.667.667 0 002.667 8v5.333c0 .368.298.667.667.667h9.333a.667.667 0 00.667-.667V8a.667.667 0 00-.667-.667H3.333zm4.667 2A1.333 1.333 0 108 12a1.333 1.333 0 000-2.667z"
        fill="#C3CAD5"
      />
    </Svg>
  )
}

export default PasswordIcon
