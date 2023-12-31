window.botpressWebChat.init({
  botId: "8a61f8a1-ccb7-476c-b16a-ea8531173e6d",
  hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  messagingUrl: "https://messaging.botpress.cloud",
  clientId: "8a61f8a1-ccb7-476c-b16a-ea8531173e6d",
  botName: "Kris Godina",
  //   disableAnimations: true,
  avatarUrl: "https://api.iconify.design/fluent-emoji/robot.svg",
  // "showBotInfoPage": true,
  enableConversationDeletion: false,
  showConversationsButton: false,
  enableTranscriptDownload: false,
  useSessionStorage: true,
  phoneNumber: "0408 494 785",
  emailAddress: "kris.godina@outlook.com",
  website: "https://www.krisgodina.com",
  stylesheet: "https://krisgodina.github.io/krisgodinastyle.css",
});

window.botpressWebChat.onEvent(
  function (ev) {
    window.botpressWebChat.sendEvent({
      type: "loadConversation",
    });
  },
  ["LIFECYCLE.LOADED"]
);
window.addEventListener("message", function (event) {
  // console.log(event.data.type);
  if (event.data.type == "LIFECYCLE.READY") {
    window.botpressWebChat.sendEvent({
      type: "trigger",
      channel: "web",
      payload: {
        text: "",
      },
    });
  }
});
