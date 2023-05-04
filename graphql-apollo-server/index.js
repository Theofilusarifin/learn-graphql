const { ApolloServer } = require("apollo-server");
const { sequelize } = require("./models");
const schema = require("./graphql/schema");

const server = new ApolloServer({
	schema
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected.");
		server.listen({ port: 4000 }).then(({ url }) => console.log(`Server started at ${url}`));
	})
	.catch(err => console.log("Error connecting to database: ", err));
