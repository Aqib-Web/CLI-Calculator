import chalk from "chalk";
import gradient from "gradient-string";

export const stylizeAnswer = function (result) {
  let concString = `${chalk.bold(
    gradient.cristal("✨  Result")
  )}  ${chalk.yellow("➤  ")} `;
  concString += chalk.white.bgGreen.bold(`   ${result}   `) + "\n";
  return concString;
};
