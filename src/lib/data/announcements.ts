type Announcement = {
	date: string;
	description: string;
};

const announcements: Announcement[] = [
	{ date: '2023/09/19', description: 'サイトを立ち上げた日！' },
	{ date: '2023/09/21', description: 'クレジットの一覧ページ(最下部にリンクがあるよ)を追加した！' },
	{ date: '2023/09/29', description: 'Kokomiのミニキャラが出現！'}
];

const sortedAnnouncements = announcements.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export type { Announcement };
export { sortedAnnouncements };
