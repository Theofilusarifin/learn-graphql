import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id : Int,
    name: String!,
    email: [String],
    password: String,
    progress : Level
  }

  type Level{
    id : Int,
    name : String,
    description : String,
  }

  type Query{
    users : User,
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
	users: () => {
		return {
			id: 1,
			name: "Arifin",
			email: ["Arifin@a.com", "Arifin@b.com"],
			progress: { id: 1, name: "Level 1", description: "Ini Level 1" },
		};
	},
};

var app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);
app.listen(5000);
console.log("Running a GraphQL API server at http://localhost:5000/graphql");
