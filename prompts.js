let inquirer = require("inquirer");

/**
 * Asks the user for an action to take with the CLI.
 * @returns {object}
 */
const mainMenu = () => {
  return inquirer.prompt([
    {
      name: "actions",
      message: "What would you like to do?",
      type: "list",
      choices: ["List channels", "Send a message to a channel", "Quit"],
    },
  ]);
};

/**
 * Asks the user to select a channel from a list of provided channels.
 * @param {string[]} channels 
 * @returns 
 */
const selectChannelToSendMessageTo = (channels) => {
  return inquirer.prompt([
    {
      name: "channel",
      message: "Which channel would you like to send a message to?",
      type: "list",
      choices: channels,
    },
  ]);
};

/**
 * Asks the user for a message to send to a Slack channel.
 * @returns {string}
 */
const requestMessageToSend = async () => {
  let message = '';
  while(message === '') {
    response = await inquirer.prompt([
      {
        name: "message",
        message: "What would you like to send to the channel?",
        type: "input"
      },
    ]);
    message = response.message;
  }
  return { message };
};

module.exports = {
  mainMenu,
  selectChannelToSendMessageTo,
  requestMessageToSend,
};
