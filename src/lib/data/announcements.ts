type Announcement = {
	date: string;
	description: string;
};

const announcements: Announcement[] = [
	{ date: '2020/12/9', description: 'Hello' },
	{ date: '2001/4/3', description: 'テーマを変えたよ' },
	{ date: '1990/5/9', description: 'サイトを立ち上げた日！' }
];

const sortedAnnouncements = announcements.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export type { Announcement };
export { sortedAnnouncements };
