let prompts = require('./prompts');

const getChannels = async () => {
    return [
        'developer-tools'
    ]
};

const selectChannel = async (channels) => {
    return await prompts.selectChannelToSendMessageTo(channels);
};

const sendMessageToChannel = async (channel) => {
    let { message } = await prompts.requestMessageToSend();
    console.log(`Sending the following message to ${channel}:\n`);
    console.log(message, "\n");
};

module.exports = {
    getChannels, 
    selectChannel,
    sendMessageToChannel
}