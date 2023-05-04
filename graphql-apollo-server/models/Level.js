module.exports = (sequelize, DataTypes) => {
	const Level = sequelize.define(
		"Level",
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
			description: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			tableName: "levels",
		}
	);

  Level.associate = models => {
		Level.belongsToMany(models.User, {
			through: models.UserLevel,
			foreignKey: "level_id",
			otherKey: "user_id",
			as: "users",
		});
  };

	return Level;
};
