import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSvg(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.157 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V8.838a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L2.462 6.943A2.42 2.42 0 001.5 8.847v8.715C1.5 19.46 3.055 21 4.973 21h1.924c.685 0 1.241-.55 1.241-1.229"
            />
            <Path
                d="M8.157 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L2.462 6.943A2.42 2.42 0 001.5 8.847v8.715C1.5 19.46 3.055 21 4.973 21h1.924c.685 0 1.241-.55 1.241-1.229v0"
                stroke="none"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HomeSvg