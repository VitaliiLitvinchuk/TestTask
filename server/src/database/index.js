import { Sequelize } from "sequelize";
import "dotenv/config";
import Rates from "./Rates.js";

export const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

export const rates = Rates(sequelize);