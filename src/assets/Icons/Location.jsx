import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Location(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M4.24 10.391a7.678 7.678 0 1115.356.053v.086c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 01-3.59 2.957.93.93 0 01-1.218 0 19.819 19.819 0 01-5.052-4.73 9.826 9.826 0 01-2.018-5.636v-.026z"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={11.9174}
        cy={10.5391}
        r={2.46087}
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Location
