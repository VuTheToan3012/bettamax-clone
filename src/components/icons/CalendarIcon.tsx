import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CalendarIcon(props: SvgProps) {
	return (
		<Svg
			width={13}
			height={14}
			viewBox="0 0 13 14"
			fill="none"

			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.375 0v3.75h-1.25V0h1.25zM9.375 0v3.75h-1.25V0h1.25z"
				fill="#546278"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.875 2.5a.625.625 0 00-.625.625v8.75c0 .345.28.625.625.625h8.75c.345 0 .625-.28.625-.625v-8.75a.625.625 0 00-.625-.625h-8.75zM0 3.125C0 2.089.84 1.25 1.875 1.25h8.75c1.036 0 1.875.84 1.875 1.875v8.75c0 1.036-.84 1.875-1.875 1.875h-8.75A1.875 1.875 0 010 11.875v-8.75z"
				fill="#546278"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 5h12.5v1.25H0V5z"
				fill="#546278"
			/>
		</Svg>
	)
}

export default CalendarIcon
