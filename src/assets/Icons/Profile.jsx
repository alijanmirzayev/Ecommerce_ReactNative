import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ProfileSvg(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={11.579}
        cy={7.27803}
        r={4.77803}
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M4 18.701a2.215 2.215 0 01.22-.97c.457-.915 1.748-1.4 2.819-1.62a16.793 16.793 0 012.343-.33 25.059 25.059 0 014.385 0c.787.056 1.57.166 2.343.33 1.07.22 2.361.66 2.82 1.62a2.27 2.27 0 010 1.95c-.459.96-1.75 1.4-2.82 1.61a15.71 15.71 0 01-2.343.34c-1.188.1-2.38.119-3.57.054-.275 0-.54 0-.815-.054a15.43 15.43 0 01-2.334-.34c-1.08-.21-2.361-.65-2.828-1.61A2.279 2.279 0 014 18.7z"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileSvg
