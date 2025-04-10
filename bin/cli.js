#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import boxen from "boxen";

// Sleep function
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Hello Saurabh here!\nNice to meet you!"
  );

  await sleep(3000);
  rainbowTitle.stop();

  const dibba = boxen(
    `
      ${chalk.bgBlue("\nHere is some information about me:-\n")}
      👉 ${chalk.bold("My_Portfolio")} : https://saurabh-portfolio-zeta.vercel.app/
      👉 ${chalk.bold("My_Github_Profile")} : https://github.com/saurabhpandey33301
      👉 ${chalk.bold("My_LeetCode_Account")} : https://leetcode.com/u/saurabh3301/
      👉 ${chalk.bold("My_LinkedIn_Profile")} : https://www.linkedin.com/in/saurabh3301/ \n
      
      ${chalk.italic(
        "I am currently looking for new opportunities, my inbox is always open. Whether you have a"
      )}

      ${chalk.italic(
        "        question or just want to say hi, I will try my best to get back to you!"
      )},

      ${"\n"}💡 ${chalk.bgGray.bold(" Tips:-")}
      ${chalk.green("👉 To open a link, hold")} ${chalk.yellowBright("Ctrl")} ${chalk.green("and")} ${chalk.yellowBright("click")} ${chalk.green("on it with your mouse.")}
      `,
    {
      padding: 1,
      margin: 2,
      borderStyle: "double",
      title: "My-Portfolio",
      titleAlignment: "center",
      borderColor: "green"
    }
  );

  console.log(dibba);
}

// Top-level await wrapper (optional fallback)
(async () => {
  await welcome();
})();
