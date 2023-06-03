import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
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
        d="M3.5 13.787v-.219a3.6 3.6 0 01.602-1.818 4.87 4.87 0 001.194-2.314c0-.666 0-1.342.058-2.009C5.654 4.218 8.827 2 11.96 2h.078c3.133 0 6.306 2.218 6.617 5.427.058.667 0 1.343.048 2.009a4.955 4.955 0 001.193 2.323c.365.538.573 1.164.602 1.81v.209c.022.87-.278 1.719-.844 2.39a4.505 4.505 0 01-2.853 1.37c-3.195.343-6.419.343-9.614 0a4.554 4.554 0 01-2.853-1.37 3.604 3.604 0 01-.834-2.38z"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.555 20.852a3.088 3.088 0 004.288.505c.196-.146.372-.316.524-.505"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Notification
