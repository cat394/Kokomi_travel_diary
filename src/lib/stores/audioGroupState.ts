import { writable } from 'svelte/store';

export type AudioGroupState = {
	title: string;
	author: string;
	thumbImage: string;
	isPlaying: boolean;
	loop: boolean;
	currentTime: number;
	currentSrc: string;
};

export const audioGroupState = writable<AudioGroupState>({
	title: '',
	author: '',
	thumbImage: '',
	isPlaying: false,
	loop: true,
	currentTime: 0,
	currentSrc: ''
});
