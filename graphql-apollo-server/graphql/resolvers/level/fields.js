const { Level } = require("../../../models");

const LevelFields = {
	async __resolveReference(object) {
		return await Level.findByPk(object.id);
	},
	users: async (level, args) => {
		const users = await level.getUsers();
		return users;
	},
};

module.exports = LevelFields;
