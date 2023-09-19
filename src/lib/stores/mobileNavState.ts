import { writable } from 'svelte/store';

const createIsMobileNavOpen = () => {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggleOpen: () => update((prevState) => !prevState)
	};
};

export const isMobileNavOpen = createIsMobileNavOpen();
