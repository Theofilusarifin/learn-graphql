const { UserLevel } = require("../../../models");

const UserLevelFields = {
	async __resolveReference(object) {
		return await UserLevel.findByPk(object.id);
	},
};

module.exports = UserLevelFields;
