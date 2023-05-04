const userFields = require("./user/fields");
const levelFields = require("./level/fields");

const userQueries = require("./user/queries");
const levelQueries = require("./level/queries");


const resolvers = {
	Query: {
		...userQueries,
		...levelQueries,
	},
	User: {
		...userFields,
	},
	Level: {
		...levelFields,
	},
};

module.exports = resolvers;
