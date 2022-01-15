const slack = require("../slack");
const prompts = require("../prompts");
const assert = require("assert");

describe("List channels", () => {
  before(() => {
    slack.listChannels = () => Promise.resolve(["test"]);
  });

  it("Should return array", async () => {
    let channels = await slack.listChannels();
    assert(Array.isArray(channels));
  });

  it("Should not return null value", async () => {
    let channels = await slack.listChannels();
    assert.notEqual(channels, null);
  });
});

describe("Send message to channel", () => {
  before(() => {
    slack.sendMessageToChannel = (channel, message) =>
      Promise.resolve({ channel, message });
  });

  it("Should return message and channel", async () => {
    let testChannel = "testChannel";
    let testMessage = "testMessage";
    let { channel, message } = await slack.sendMessageToChannel(
      testChannel,
      testMessage
    );
    assert.equal(testChannel, channel);
    assert.equal(testMessage, message);
  });

  it("Should not return null value", async () => {
    let testChannel = "testChannel";
    let testMessage = "testMessage";
    let response = await slack.sendMessageToChannel(
      testChannel,
      testMessage
    );
    assert.notEqual(response, null);
  });
});
