import React from "react";

export const SvgBottom: React.FC = () => {
	return (
		<svg className="position-absolute bottom-0 left-0" viewBox="0 0 1920 400">
			<path fill="#fff" fillOpacity={0.1} d="M0 400L0 200 400 318z" />
			<path fill="#fff" fillOpacity={0.3} d="M0 400L1920 500 2420 -100z" />
		</svg>
	);
};
