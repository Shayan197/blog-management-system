import chalk from 'chalk';
import { Sequelize } from 'sequelize';

import { dbUrl, nodeEnv } from './initial.config.js';

const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    define: { underscored: true },
    logging: nodeEnv !== 'production' ? (msg) => console.log(chalk.blue(msg)) : false,
    retry: {
        max: 3,
        match: [
            Sequelize.ConnectionError,
            Sequelize.ConnectionRefusedError,
            Sequelize.TimeoutError,
            Sequelize.ConnectionAcquireTimeoutError,
        ],
    },
    dialectOptions: {
        connectTimeout: 60000,
        timezone: 'Asia/Karachi',
    },
    pool: {
        max: 5,
        min: 1,
        acquire: 60000,
        idle: 10000,
    },
});

export default sequelize;

//Async function connect to teh Postgres database
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`${chalk.green.bold('Successfully connected to database')}`);
        console.log(
            `${chalk.green.bold('============================================================================')}`,
        );
        await sequelize.sync();
        console.log(`${chalk.green.bold('Models synced successfully')}`);
        console.log(
            `${chalk.green.bold('============================================================================')}`,
        );
    } catch (error) {
        console.log(`${chalk.red.bold('Error')} failed to connect to database`, error);
        console.log(
            `${chalk.red.bold('============================================================================')}`,
        );
        process.exit(1);
    }
};
