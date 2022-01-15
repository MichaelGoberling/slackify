const inquirer = require("inquirer");
const prompts = require("../prompts");
const assert = require('assert');

describe("Main menu selection prompt", () => {
  before(() => {
    inquirer.prompt = () => Promise.resolve({ action: "test" });
  });

  it("Should equal returned value", async () => {
    let { action } = await prompts.mainMenu();
    assert.equal(action, "test");
  });

  it("Should not return a null value", async () => {
    let { action } = await prompts.mainMenu();
    assert.notEqual(action, null);
  });
});

describe("Channel selection prompt", () => {
  before(() => {
    inquirer.prompt = () => Promise.resolve({ channel: "test" });
  });

  it("Should equal returned value", async () => {
    let { channel } = await prompts.selectChannelToSendMessageTo();
    assert.equal(channel, "test");
  });

  it("Should not return a null value", async () => {
    let { channel } = await prompts.selectChannelToSendMessageTo();
    assert.notEqual(channel, null);
  });
});

describe("Send message prompt", () => {
  before(() => {
    inquirer.prompt = () => Promise.resolve({ message: "test" });
  });

  it("Should equal returned value", async () => {
    let { message } = await prompts.requestMessageToSend();
    assert.equal(message, "test");
  });

  it("Should not return a null value", async () => {
    let { message } = await prompts.requestMessageToSend();
    assert.notEqual(message, null);
  });
});
