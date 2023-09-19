type Announcement = {
	date: string;
	description: string;
};

const announcements: Announcement[] = [
	{ date: '2023/09/20', description: 'サイトを立ち上げた日！' },
];

const sortedAnnouncements = announcements.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export type { Announcement };
export { sortedAnnouncements };
