let prompts = require('./prompts');
let actions = require('./actions');

(async () => {
    console.clear();

    while(true) {
        let response = await prompts.mainMenu();
        let channels; 
        switch(response.actions) {
            case "List channels":
                channels = await actions.getChannels();
                channels.forEach(channel => console.log(channel));
                break;
            case "Send a message to a channel":
                channels = await actions.getChannels();
                let { channel } = await actions.selectChannel(channels);
                await actions.sendMessageToChannel(channel);
                break;
            case "Quit": 
                process.exit();
            default: 
                break;
        }
    }
})();
