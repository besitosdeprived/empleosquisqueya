import { reset, seed } from "drizzle-seed";
import { db } from "../db";
import * as jobsSchema from "./schema/jobs.schema";
import * as usersSchema from "./schema/users.schema";
import { sql } from "drizzle-orm";
export async function seedThis() {
	const locations = await db.query.LocationTable.findMany();
	console.log(locations);
	if (locations.length === 0) {
		await db.execute(sql`INSERT INTO location (name, slug) VALUES
('Remoto','remoto'),
('Azua', 'azua'),
('Bahoruco', 'bahoruco'),
('Barahona', 'barahona'),
('Dajabón', 'dajabon'),
('Distrito Nacional', 'distrito-nacional'),
('Duarte', 'duarte'),
('El Seibo', 'el-seibo'),
('Elias Piña', 'elias-pina'),
('Espaillat', 'espaillat'),
('Hato Mayor', 'hato-mayor'),
('Hermanas Mirabal', 'hermanas-mirabal'),
('Independencia', 'independencia'),
('La Altagracia', 'la-altagracia'),
('La Romana', 'la-romana'),
('La Vega', 'la-vega'),
('María Trinidad Sanchez', 'maria-trinidad-sanchez'),
('Monseñor Nouel', 'monsenor-nouel'),
('Monte Plata', 'monte-plata'),
('Montecristi', 'montecristi'),
('Pedernale', 'pedernale'),
('Peravia', 'peravia'),
('Puerto Plata', 'puerto-plata'),
('Samana', 'samana'),
('San Cristobal', 'san-cristobal'),
('San Jose de Ocoa', 'san-jose-de-ocoa'),
('San Juan', 'san-juan'),
('San Pedro de Macoris', 'san-pedro-de-macorís'),
('Sanchez Ramirez', 'sanchez-ramirez'),
('Santiago', 'santiago'),
('Santiago Rodriguez', 'santiago-rodriguez'),
('Santo Domingo', 'santo-domingo'),
('Valverde', 'valverde');`);
	}
	await seed(db, {
		user: usersSchema.userTable,
		job: jobsSchema.jobTable,
		jobInfo: jobsSchema.jobPostInfoTable,
	}).refine((f) => ({
		user: {
			count: 20,
			columns: {
				name: f.firstName(),
				email: f.email(),
			},
		},
		job: {
			count: 50,
			columns: {
				content: f.loremIpsum({ sentencesCount: 50 }),
				title: f.city(),
				salary: f.int({ minValue: 1000, maxValue: 25000 }),
			},
		},
		jobInfo: {
			count: 50,
			columns: {
				jobId: f.int({ minValue: 1, maxValue: 50, isUnique: true }),
				slug: f.uuid(),
			},
		},
	}));
}
