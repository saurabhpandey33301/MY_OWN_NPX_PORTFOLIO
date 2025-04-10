#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// Sleep function
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Hello Saurabh here!\nNice to meet you!'
  );

  await sleep(); // You need to await this to let the animation play

  rainbowTitle.stop();

  console.log(
    chalk.bgBlue('\nHere is some information about me:-\n')
  );
  console.log(`👉 ${chalk.bold('My_Portfolio')} : https://saurabh-portfolio-zeta.vercel.app/`);
  console.log(`👉 ${chalk.bold('My_Github_Profile')} : https://github.com/saurabhpandey33301`);
  console.log(`👉 ${chalk.bold('My_LeetCode_Account')} : https://leetcode.com/u/saurabh3301/`);
  console.log(`👉 ${chalk.bold('My_LinkedIn_Profile')} : https://www.linkedin.com/in/saurabh3301/ \n`);

  console.log(`\n💡 ${chalk.bgGray.bold(' Tips:-')}`);
  console.log(
    `${chalk.green('👉 To open a link, hold')} ${chalk.yellowBright('Ctrl')} ${chalk.green('and')} ${chalk.yellowBright('click')} ${chalk.green('on it with your mouse.')}`
  );
  
  
}
await welcome();
