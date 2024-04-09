#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let list = [];
let todo_item = true;
console.log(chalk.bgMagenta("\n *x*x*x*x*x* 🤱AMMI KY SAMAN KI LIST🤱 *x*x*x*x*x* "));
console.log("___________________________________________________");
while (todo_item) {
    let OptionSelection_list = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: chalk.bgRedBright("\n\n List Options Selection : \n\n"),
            choices: ["Add todo_list  \t(*** 💁‍♀️Ya saman lana hy beta***)", "Delete from_list  \t(*** 🙅‍♀️Ya nhi lany hain beta***)", "Show items  \t\t(*** 📑 Kia kia likha hy saman main dekhou beta***)", "Exit \t\t\t(** Sigh!😮‍💨 beta ya tankha jab aai gi tab milyga.**)"]
        },
    ]);
    //_________________________________________Add todo_list ________________________________
    if (OptionSelection_list.todo === "Add todo_list  \t(*** 💁‍♀️Ya saman lana hy beta***)") {
        let Option_add = await inquirer.prompt([
            {
                name: "additems",
                type: "string",
                message: chalk.magenta("🤱 Ammi saman bool dain: "),
            },
        ]);
        list.push(Option_add.additems);
        console.log(list);
        console.log(chalk.bgGray("🤱 Ammi ya to kam ✍️ hy kuch or nhi lana phir main ny nhi lounga,PUBG 👨‍💻 khailna hy."));
    }
    //_________________________________________Delete todo_list __________________________________
    else if (OptionSelection_list.todo === "Delete from_list  \t(*** 🙅‍♀️Ya nhi lany hain beta***)") {
        if (list.length > 0) {
            let Option_delete = await inquirer.prompt([
                {
                    name: "Delete",
                    type: "list",
                    message: chalk.bgYellow("🤱😤Ammi kia hatana hy saman 💸:"),
                    choices: list,
                },
            ]);
            const remove = list.indexOf(Option_delete.Delete);
            list.splice(remove, 1);
            console.log(list);
        }
        else {
            console.log("🤱😒 Ammi kuch likha hy nhi abi tk phly likh wa dain phir main update kr deta hoon📜.\n");
        }
    }
    //_________________________________________Show todo_list __________________________________
    else if (OptionSelection_list.todo === "Show items  \t\t(*** 📑 Kia kia likha hy saman main dekhou beta***)") {
        console.log("🤱🤓 (Show Items) 📜 Ammi Final hy ya ab .");
        list.forEach((add) => {
            console.log(`🤱_Saman: ${add}`);
        });
    }
    //_________________________________________Exit todo_list __________________________________
    else if (OptionSelection_list.todo === "Exit \t\t\t(** Sigh!😮‍💨 beta ya tankha jab aai gi tab milyga.**)") {
        todo_item = false;
    }
    //_________________________________________option_list end __________________________________
    else {
        console.log(chalk.yellowBright("🤱😒 Ammi Jo bnaya hy isi main sy option select krain warna meri list kisi kam ki nhi hy📜."));
    }
}
console.log(chalk.magenta("-x-x-x-x-x- 👩‍💻 BushraJan 👩‍💻 -x-x-x-x-x- \n"));
