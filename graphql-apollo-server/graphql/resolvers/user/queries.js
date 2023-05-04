const { User } = require("../../../models");

const UserQueries = {
	user: async (_, args, context) => {
		const user = await User.findByPk(args.id);
		return user;
	},
};

module.exports = UserQueries;
