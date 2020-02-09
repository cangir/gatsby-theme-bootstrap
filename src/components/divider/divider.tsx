import React from "react";
import clsx from 'clsx';

interface Props {
	position?: string;
	variant?: string;
}

export const Divider = ({position, variant}: Props) => {
	return (
		<section className={
			clsx(
				"divider", 
				position && position == "top" ? "top-0" : "bottom-0", 
				variant && "divider-" + variant
				)}>
			<svg
      width={2560}
      height={100}
      preserveAspectRatio="none"
			viewBox="0 0 2560 100"
			className={position}
    >
			<path d="M2560 0v100H0z" fill="#fff" />
    </svg>
		</section>
	);
};
