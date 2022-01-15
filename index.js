let prompts = require("./prompts");
let actions = require("./actions");
require("dotenv").config();

(async () => {
  console.clear();

  let channels;
  try {
    while (true) {
      let response = await prompts.mainMenu();
      switch (response.actions) {
        case "List channels":
          channels = await actions.getChannels();
          channels.forEach((channel) => console.log(channel));
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
  } catch (err) {
    console.error(err);
  }
})();
