const { Level } = require("../../../models");

const levelQueries = {
	level: async (_, args, context) => {
		const level = await Level.findByPk(args.id);
		return level;
	},
};

module.exports = levelQueries;
