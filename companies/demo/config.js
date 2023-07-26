window.botpressWebChat.init({
  botId: "73206e10-4715-4c44-ae1d-d29be9d5c810",
  hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  messagingUrl: "https://messaging.botpress.cloud",
  clientId: "73206e10-4715-4c44-ae1d-d29be9d5c810",
  botName: "Customer Support",
  //   disableAnimations: true,
  avatarUrl: "https://api.iconify.design/fluent-emoji/robot.svg",
  // "showBotInfoPage": true,
  enableConversationDeletion: false,
  showConversationsButton: false,
  enableTranscriptDownload: false,
  phoneNumber: "1300 000 000",
  emailAddress: "support@example.com",
  website: "https://www.example.com./",
  stylesheet: "https://krisgodina.github.io/companies/demo/style.css",
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
