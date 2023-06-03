import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BasketSvg(props) {
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
        d="M7.422 19.82a.766.766 0 010 1.53.764.764 0 110-1.53zM18.675 19.82a.766.766 0 11-.002 1.532.766.766 0 01.002-1.532z"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.75 3.25l2.08.36.963 11.473a1.802 1.802 0 001.797 1.653h10.912c.896 0 1.656-.658 1.785-1.546l.949-6.558a1.34 1.34 0 00-1.327-1.533H5.164M14.125 10.795h2.773"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BasketSvg
