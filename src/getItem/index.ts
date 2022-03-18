/**
 * @name getItem
 * @private
 * @param {string} name name key for localstorage
 * @description function for get data in localstorage
 * @example setItem() // 		getItem('data') // [{ visa: 2 }]
 * @returns data from localstorage
 */

const getItem = (name: string): unknown | null => {
	const itemStr = localStorage.getItem(name);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);

	if (item.expiry < new Date().getTime()) {
		localStorage.removeItem(name);
		return null;
	}
	return item.value;
};

export default getItem;
