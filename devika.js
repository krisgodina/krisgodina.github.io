window.botpressWebChat.init({
  botId: "abdb972d-47a6-4495-8437-c6276d15dcf0",
  hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  messagingUrl: "https://messaging.botpress.cloud",
  clientId: "abdb972d-47a6-4495-8437-c6276d15dcf0",
  botName: "Devika",
  //   disableAnimations: true,
  avatarUrl: "https://api.iconify.design/fluent-emoji/robot.svg",
  // "showBotInfoPage": true,
  useSessionStorage: true,
  enableConversationDeletion: false,
  showConversationsButton: false,
  enableTranscriptDownload: false,
  phoneNumber: "",
  emailAddress: "support@devika.com",
  website: "https://devika.com/",
  stylesheet: "https://krisgodina.github.io/standard.css",
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
