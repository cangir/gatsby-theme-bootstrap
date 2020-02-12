import React from "react";
import { Hero } from "..";

interface Props {
	title?: string;
	breadcrumb?: boolean;
}

export const Header = ({ title, breadcrumb }: Props) => {
	return (
		<header 
			className="header overlay overlay-dark"
			style={{ background: "center url(./img/bg.jpg)" }}>
			<div className="d-flex justify-content-center header-container overlay-inner">
				<Hero title={title} breadcrumb={breadcrumb} />
			</div>
		</header>
	);
};
