import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const introRss = await import('../../markdown/introRss.md');

		const pcStep = await import('../../markdown/howToRss/pc.md');

		const mobileStep = await import('../../markdown/howToRss/mobile.md');

		return {
			introRss: introRss.default,
			pcStep: pcStep.default,
			mobileStep: mobileStep.default
		};
	} catch (e) {
		throw error(404, 'Could not find some md files.');
	}
};
