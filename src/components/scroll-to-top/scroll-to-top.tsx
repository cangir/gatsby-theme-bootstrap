import React from "react";
import clsx from "clsx";
import useScrollTop from "../../hooks/use-scroll-top";

export const ScrollToTop: React.FC = () => {
	const isTopOfPage = useScrollTop();
	return (
		<a className={clsx("btn btn-primary scroll-to justify-content-center align-items-center", !isTopOfPage && "show")}>
			<span className=""></span>
		</a>
	);
};
