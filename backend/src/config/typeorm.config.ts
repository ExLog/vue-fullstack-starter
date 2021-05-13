import { ConnectionOptions } from "typeorm"

const ormConfig: ConnectionOptions = {
	type: "postgres",
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [
		process.env.NODE_ENV === "production"
			? "dist/entity/*{.ts,.js}"
			: "src/entity/*{.ts,.js}",
	],
	migrations: [
		process.env.NODE_ENV === "production"
			? "dist/migration/*{.ts,.js}"
			: "src/migration/*{.ts,.js}",
	],
	subscribers: [
		process.env.NODE_ENV === "production"
			? "dist/subscriber/*{.ts,.js}"
			: "src/subscriber/*{.ts,.js}",
	],
	cli: {
		entitiesDir: "src/entity",
		migrationsDir: "src/migration",
		subscribersDir: "src/subscriber",
	},
}

export default ormConfig