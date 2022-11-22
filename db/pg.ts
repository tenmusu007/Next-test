import { Pool } from "pg";

export const pg = new Pool({
	user: process.env.PGSQL_USER,
	password: process.env.PGSQL_PASSWORD,
	host: process.env.PGSQL_HOST,
	port: parseInt(process.env.DB_PORT || "5432"),
	database: process.env.PGSQL_DATABASE,
});

export default pg;
