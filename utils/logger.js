const chalk = require("chalk");

const timestamp = () => chalk.gray(`[${new Date().toLocaleString("pt-BR")}]`);

const log = {
    info: (...args) => {
        const [msg, ...rest] = args;
        console.log(timestamp(), chalk.blue(`ℹ️  INFO: ${msg}`), ...rest);
    },
    success: (...args) => {
        const [msg, ...rest] = args;
        console.log(timestamp(), chalk.green(`✅ SUCCESS: ${msg}`), ...rest);
    },
    warn: (...args) => {
        const [msg, ...rest] = args;
        console.log(timestamp(), chalk.yellow(`⚠️  WARNING: ${msg}`), ...rest);
    },
    error: (...args) => {
        const [msg, ...rest] = args;
        console.log(timestamp(), chalk.red(`❌ ERROR: ${msg}`), ...rest);
    },
};

module.exports = log;
