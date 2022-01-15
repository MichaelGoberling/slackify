let inquirer = require("inquirer");

const mainMenu = () => {
  return inquirer.prompt([
    {
      name: "actions",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "List channels",
        "Send a message to a channel",
        "Quit",
      ],
    }
  ]);
};

const selectChannelToSendMessageTo = (channels) => {
    return inquirer.prompt([
        {
            name: "channel",
            message: "Which channel would you like to send a message to?",
            type: "list",
            choices: channels
        }
    ]);
}

const requestMessageToSend = () => {
    return inquirer.prompt([
        {
            name: "message",
            message: "What would you like to send to the channel?",
            type: "input"
        }
    ]);
}

module.exports = {
    mainMenu,
    selectChannelToSendMessageTo,
    requestMessageToSend
};
