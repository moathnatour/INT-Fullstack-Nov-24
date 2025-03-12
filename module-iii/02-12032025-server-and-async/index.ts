import chalk from "chalk";

console.log(chalk.blue`hello`, add(5, 10));

function add(a: number, b: number) {
    return a + b;
}
