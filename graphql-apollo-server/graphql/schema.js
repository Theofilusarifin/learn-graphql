const { join } = require("path");
const { readdirSync, readFileSync } = require("fs");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { gql } = require("apollo-server-express");

const resolvers = require("./resolvers/register_resolvers");

const gqlFiles = readdirSync(join(__dirname, "./typedefs"));

let typeDefs = "";

gqlFiles.forEach(file => {
	typeDefs += readFileSync(join(__dirname, "./typedefs", file), {
		encoding: "utf8",
	});
});

typeDefs = gql`
	${typeDefs}
`;

const schema = buildSubgraphSchema({
	typeDefs,
	resolvers,
});

module.exports = schema;
