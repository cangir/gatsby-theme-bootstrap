import React from "react";
import { Breadcrumb } from "..";

interface Props {
	title?: string;
	breadcrumb?: boolean;
}

export const Hero = ({ title, breadcrumb }: Props) => {
	return (
		<div className="align-self-end justify-content-center text-center p-5">
			<h1 className="page-title pb-2">{title}</h1>
			{breadcrumb && <Breadcrumb />}
		</div>
	);
};
