//ourTeam variable is done as requested
const ourTeam = {
    name: "",
    members: [{
        name: "Judit Kiss",
        birthday: {
            year: 1962,
            month: 08,
            day: 22,
        },
        location: {
            country: "Hungary",
            city: "Budapest",
        },
        codingLevel: 3
    },
    {
        name: "Dorian Dudas",
        birthday: {
            year: 1962,
            month: 08,
            day: 22,
        },
        location: {
            country: "Hungary",
            city: "Budapest",
        },
        codingLevel: 3
    },
    {
        name: "Viktor Nemesi",
        birthday: {
            year: 1984,
            month: 10,
            day: 30,
        },
        location: {
            country: "Hungary",
            city: "Miskolc",
        },
        codingLevel: 1
    }
],
}










// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" },
		/* { name: "moreStats", content: moreStats, type: "object" } // remove the block comment from this line if you want to make the last optional task */
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };