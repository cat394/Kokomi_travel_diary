type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

const formatDate = (date: string, dateStyle: DateStyle = 'medium', locales = 'ja') => {
	const dateToFormat = new Date(date);
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
};

export { formatDate };
