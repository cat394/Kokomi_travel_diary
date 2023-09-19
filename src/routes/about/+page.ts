import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const myIntro = await import(`../../markdown/myIntro.md`);

		return {
			myIntro: myIntro.default
		};
	} catch (e) {
		throw error(404, `Could not find myIntro markdown file.`);
	}
};
