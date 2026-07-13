import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import i18n from '../i18n';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Yatra data
export const yatras = [
	{
		id: 1,
		nameKey: "yatras.yatra1.name",
		locationKey: "yatras.yatra1.location",
		datesKey: "yatras.yatra1.dates",
		durationKey: "yatras.yatra1.duration",
		descriptionKey: "yatras.yatra1.description",
		imageAltKey: "yatras.yatra1.imageAlt",
		image: "/Hero1.jpeg",
		pdf: "/purikonark.pdf",
	},
	{
		id: 2,
		nameKey: "yatras.yatra2.name",
		locationKey: "yatras.yatra2.location",
		datesKey: "yatras.yatra2.dates",
		durationKey: "yatras.yatra2.duration",
		descriptionKey: "yatras.yatra2.description",
		imageAltKey: "yatras.yatra2.imageAlt",
		image: "/Hero2.jpeg",
		pdf: "/chardham.pdf",
	},
	{
		id: 3,
		nameKey: "yatras.yatra3.name",
		locationKey: "yatras.yatra3.location",
		datesKey: "yatras.yatra3.dates",
		durationKey: "yatras.yatra3.duration",
		descriptionKey: "yatras.yatra3.description",
		imageAltKey: "yatras.yatra3.imageAlt",
		image: "/Hero5.jpeg",
		pdf: "/khatushyam.pdf",
	},
	{
		id: 4,
		nameKey: "yatras.yatra4.name",
		locationKey: "yatras.yatra4.location",
		datesKey: "yatras.yatra4.dates",
		durationKey: "yatras.yatra4.duration",
		descriptionKey: "yatras.yatra4.description",
		imageAltKey: "yatras.yatra4.imageAlt",
		image: "/Hero4.jpeg",
		pdf: "/jyotirling.pdf",
	},
	{
		id: 5,
		nameKey: "yatras.yatra5.name",
		locationKey: "yatras.yatra5.location",
		datesKey: "yatras.yatra5.dates",
		durationKey: "yatras.yatra5.duration",
		descriptionKey: "yatras.yatra5.description",
		imageAltKey: "yatras.yatra5.imageAlt",
		image: "/Hero3.jpeg",
		pdf: "/narmada.pdf",
	},
	{
		id: 6,
		nameKey: "yatras.yatra6.name",
		locationKey: "yatras.yatra6.location",
		datesKey: "yatras.yatra6.dates",
		durationKey: "yatras.yatra6.duration",
		descriptionKey: "yatras.yatra6.description",
		imageAltKey: "yatras.yatra6.imageAlt",
		image: "/Hero6.jpeg",
		pdf: "/tirupati.pdf",
	},
	{
		id: 7,
		nameKey: "yatras.yatra7.name",
		locationKey: "yatras.yatra7.location",
		datesKey: "yatras.yatra7.dates",
		durationKey: "yatras.yatra7.duration",
		descriptionKey: "yatras.yatra7.description",
		imageAltKey: "yatras.yatra7.imageAlt",
		image: "/Hero7.jpeg",
		pdf: "/jagannath.pdf",
	},
];

// Parse date range from English date text
export const parseEnglishDateRange = (dateKey) => {
	const englishDateText =
		i18n.getResource("en", "translation", dateKey) || i18n.t(dateKey) || "";
	const dateRegex = /\b(\d{1,2})\s+([A-Za-z]+),\s*(\d{4})\b/g;
	const monthMap = {
		january: 0,
		february: 1,
		march: 2,
		april: 3,
		may: 4,
		june: 5,
		july: 6,
		august: 7,
		september: 8,
		october: 9,
		november: 10,
		december: 11,
	};

	const matches = [];
	let match;

	while ((match = dateRegex.exec(englishDateText)) !== null) {
		const day = Number(match[1]);
		const month = monthMap[match[2].toLowerCase()];
		const year = Number(match[3]);

		if (month !== undefined && day > 0 && day <= 31) {
			matches.push(new Date(year, month, day));
		}
	}

	if (!matches.length) {
		return null;
	}

	matches.sort((a, b) => a - b);
	return {
		startDate: matches[0],
		endDate: matches[matches.length - 1],
	};
};

// Get yatra status (upcoming, ongoing, completed)
export const getYatraStatus = (yatra) => {
	const now = new Date();
	const range = parseEnglishDateRange(yatra.datesKey);

	if (!range) {
		return "completed";
	}

	if (now < range.startDate) {
		return "upcoming";
	}

	if (now > range.endDate) {
		return "completed";
	}

	return "ongoing";
};

// Get only upcoming yatras
export const getUpcomingYatras = () => {
	return yatras.filter((yatra) => getYatraStatus(yatra) === "upcoming");
};

// Get upcoming yatras, or most recent one if none are upcoming
export const getUpcomingOrMostRecentYatras = () => {
	const upcomingYatras = getUpcomingYatras();
	
	if (upcomingYatras.length > 0) {
		return upcomingYatras;
	}

	// If no upcoming yatras, get the most recent one
	const yatraWithDates = yatras
		.map((yatra) => ({
			yatra,
			range: parseEnglishDateRange(yatra.datesKey),
		}))
		.filter((item) => item.range !== null)
		.sort((a, b) => b.range.endDate - a.range.endDate);

	if (yatraWithDates.length > 0) {
		return [yatraWithDates[0].yatra];
	}

	// Fallback: return first yatra if all else fails
	return yatras.slice(0, 1);
};

// Sort yatras for display: upcoming first, then most recent
export const getSortedYatrasForDisplay = () => {
	const yatraWithDates = yatras.map((yatra) => ({
		yatra,
		status: getYatraStatus(yatra),
		range: parseEnglishDateRange(yatra.datesKey),
	}));

	// Separate by status
	const upcoming = yatraWithDates.filter((item) => item.status === "upcoming");
	const ongoing = yatraWithDates.filter((item) => item.status === "ongoing");
	const completed = yatraWithDates.filter((item) => item.status === "completed");

	// Sort upcoming by start date (earliest first)
	upcoming.sort((a, b) => {
		if (!a.range || !b.range) return 0;
		return a.range.startDate - b.range.startDate;
	});

	// Sort completed by end date (most recent first)
	completed.sort((a, b) => {
		if (!a.range || !b.range) return 0;
		return b.range.endDate - a.range.endDate;
	});

	// Combine: upcoming + ongoing + completed
	return [...upcoming, ...ongoing, ...completed].map((item) => item.yatra);
};
