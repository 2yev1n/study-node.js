import { Sequelize } from "sequelize";
import { config } from "./index";

export const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: "mysql",
        define: {
            timestamps: false,
        },
        timezone: "+09:00",
        dialectOptions: {
            dataStrings: true,
            typeCast: true,
        },
        pool: {
            max: 30,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
          logging: false,
    }
)