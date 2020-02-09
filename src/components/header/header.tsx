import React from "react";
import {Hero, Navbar} from "..";

export const Header: React.FC = () => {
	return (
		<header>
			<Navbar />
			<Hero />
		</header>
	);
};
