type FakeJobType = "remote" | "hybrid" | "onsite";
type FakeLocation = "remoto" | "san-juan" | "santo-domingo" | "la-romana";
export type FakeJob = {
	title: string;
	content: string;
	salary: number;
	jobType: FakeJobType;
	locations: FakeLocation[];
	createdAt: number;
};

export const fakeJobsDatabase: FakeJob[] = [
	{
		title: "Paseador de perros",
		content:
			"Como paseador de perros deberas pasear pearros siempre qe yo diga",
		jobType: "hybrid",
		salary: 20000,
		locations: ["la-romana", "remoto"],
		createdAt: 1740414500154,
	},
	{
		title: "Paseador de vacas",
		content:
			"Como paseador de perros deberas pasear pearros siempre qe yo diga",
		jobType: "remote",
		salary: 15000,
		locations: ["san-juan", "remoto"],
		createdAt: 1700414530154,
	},
	{
		title: "Paseador de vacas",
		content:
			"Como paseador de perros deberas pasear pearros siempre qe yo diga",
		jobType: "remote",
		salary: 15000,
		locations: ["la-romana", "santo-domingo"],
		createdAt: 1740515500155,
	},
];
