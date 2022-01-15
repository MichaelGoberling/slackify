let axios = require('axios').default;

const listChannels = async () => {
    let response = await axios.get(`${process.env.SLACK_URL}/conversations.list`, {
        headers: { 
            'Authorization': `Bearer ${process.env.SLACK_ACCESS_TOKEN}`
        }
    });    

    if (!response.data.ok) {
        let errorStr = `Error listing channels in slack.js: ${response.data.error}`
        throw new Error(errorStr);
    }

    return response.data.channels.map(channel => channel.name);    
}

const sendMessageToChannel = async (channel, message) => {
    let response = await axios.post(`${process.env.SLACK_URL}/chat.postMessage`, {
        channel,
        text: message
    },
    {
        headers: { 
            'Authorization': `Bearer ${process.env.SLACK_ACCESS_TOKEN}`
        }
    });

    if (!response.data.ok) {
        let errorStr = `Error sending message to channel ${channel} in slack.js: ${response.data.error}`
        throw new Error(errorStr);
    }
}

module.exports = {
    listChannels,
    sendMessageToChannel
}