import React from "react";
import clsx from "clsx";
import useScrollTop from "../../hooks/use-scroll-top";
import { IoIosArrowUp } from "react-icons/io"



export const ScrollToTop: React.FC = () => {
	function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

	const isTopOfPage = useScrollTop();
	return (
			<IoIosArrowUp 
				onClick={() => handleScroll()}
				className={clsx("scroll-to", !isTopOfPage && "show")} 
			/>
	);
};
