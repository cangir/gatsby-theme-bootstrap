import React from "react";
import {Hero, Navbar} from "..";

interface Props {
	title?: string;
	breadcrumb?: boolean;
}

export const Header = ({title, breadcrumb}: Props) => {
	return (
		<header
			className="promo"
			style={{ background: "center url(./img/bg.jpg)" }}>
			<Navbar />
			<Hero title={title} breadcrumb={breadcrumb} />
		</header>
	);
};
