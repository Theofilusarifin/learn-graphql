module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.BIGINT(11),
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			tableName: "users",
		}
	);

	User.associate = models => {
		User.belongsToMany(models.Level, {
			through: models.UserLevel,
			foreignKey: "user_id",
			otherKey: "level_id",
			as: "levels",
		});
	};

	return User;
};
