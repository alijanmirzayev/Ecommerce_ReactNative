import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Heart(props) {
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
        d="M11.761 20.854a34.845 34.845 0 01-6.022-4.689 11.99 11.99 0 01-2.866-4.57c-1.076-3.345.18-7.174 3.698-8.307a5.978 5.978 0 015.425.913 5.987 5.987 0 015.425-.913c3.517 1.133 4.783 4.962 3.707 8.307a11.99 11.99 0 01-2.866 4.57 34.844 34.844 0 01-6.022 4.689l-.235.146-.244-.146z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.74 7.053a2.782 2.782 0 011.916 2.422"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Heart
