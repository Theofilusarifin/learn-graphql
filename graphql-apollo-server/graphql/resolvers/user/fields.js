const { User, UserLevel } = require("../../../models");

const UserFields = {
	async __resolveReference(object) {
		return await User.findByPk(object.id);
	},
	levels: async (user, args) => {
		const levels = await user.getLevels({
			include: [
				{
					model: UserLevel,
					as: "UserLevel",
					attributes: ["progress"],
				},
			],
		});
		return levels.map(level => ({
			id: level.id,
			name: level.name,
			UserLevel: {
				progress: level.UserLevel.progress,
			},
		}));
	},
};

module.exports = UserFields;
