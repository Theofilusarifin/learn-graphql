// const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	const UserLevel = sequelize.define(
		"UserLevel",
		{
			user_id: {
				type: DataTypes.BIGINT(11),
				references: {
					model: "User",
					key: "id",
				},
			},
			level_id: {
				type: DataTypes.BIGINT(11),
				references: {
					model: "Level",
					key: "id",
				},
			},
			progress: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: "user_level",
		}
	);

	UserLevel.removeAttribute("id");

	UserLevel.associate = models => {
		UserLevel.belongsTo(models.User, {
			as: "User",
			foreignKey: {
				name: "user_id",
			},
		});
		UserLevel.belongsTo(models.Level, {
			as: "Level",
			foreignKey: {
				name: "level_id",
			},
		});
	};

	return UserLevel;
};
