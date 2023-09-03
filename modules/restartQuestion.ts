import chalk from "chalk";
import inquirer from "inquirer";

async function restartQuestion() {
  const answer = await inquirer.prompt([
    {
      name: "restart",
      type: "input",
      message: `🔄 ${chalk.magenta(
        "Do you want to continue? (Y/N)"
      )} ${chalk.yellow("➤")} `,
      validate: (input) =>
        /^(y|n|yes|no)$/i.test(input) ||
        `${chalk.red.italic("❌ Please enter Y or N | Yes or No!")}`,
    },
  ]);
  console.log("\n");
  return (
    answer.restart.toLowerCase() === "y" ||
    answer.restart.toLowerCase() === "yes"
  );
}

export { restartQuestion };
