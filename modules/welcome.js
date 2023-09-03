import figlet from "figlet";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
async function welcome() {
  figlet(`Calculator + - x ÷`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
  });
  await sleep(180);
  const rainbowTitle = chalkAnimation.rainbow(
    "\t\t\t🌟 Welcome to the CLI Calculator! 🌟 \n"
  );
  await sleep(200);
  rainbowTitle.stop();
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export { sleep, welcome };
