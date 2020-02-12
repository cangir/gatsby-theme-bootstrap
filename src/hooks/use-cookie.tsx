import { useState } from "react";
import Cookies from "universal-cookie";

/**
 * useCookie - React Hook for Cookies based on universal-cookie
 * @param {string} key Cookie name
 * @param {Object|string} [initialValue]  Value will be assign if cookie doesn't exist.
 * @returns {Array} Returns cookie value, and the function to update it.
 */
export const useCookie = (
	key: string,
	defaultValue?: any,
): [any, (value: any, options?: object) => void, () => void] => {
	const cookies = new Cookies();
	const [item, setItemValue] = useState(() => {
		if (cookies.get(key)) {
			return cookies.get(key);
		}
		return null;
	});

	/**
	 * Set value of cookie
	 * @param {Object|string} value
	 * @param {Cookies.CookieAttributes} [options]
	 */
	const setValue = (value: any, options?: object): void => {
		setItemValue(value);
		cookies.set(key, value, options);
	};

	const removeItem = (): void => {
		cookies.remove(key);
	};

	return [item, setValue, removeItem];
};

export default useCookie;
