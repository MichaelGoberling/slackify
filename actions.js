let prompts = require("./prompts");
let slack = require("./slack");

/**
 * List channels in the workspace the current access token is associated with.
 * @returns {string[]}
 */
const getChannels = async () => {
  try {
    return await slack.listChannels();
  } catch (err) {
    console.error(err);
  }
};

/**
 * Prompt the user to select a channel out of a list of provided channels. 
 * @param {string[]} channels 
 * @returns {string}
 */
const selectChannel = async (channels) => {
  try {
    return await prompts.selectChannelToSendMessageTo(channels);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Prompt the user for a message to send to a channel. Send the message to a channel.
 * @param {string} channel 
 */
const sendMessageToChannel = async (channel) => {
  try {
    let { message } = await prompts.requestMessageToSend();
    console.log(`Sending the following message to ${channel}:\n`);
    console.log(message, "\n");
    await slack.sendMessageToChannel(channel, message);
    console.log("Message sent.\n");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getChannels,
  selectChannel,
  sendMessageToChannel,
};
