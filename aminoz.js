window.botpressWebChat.init({
  botId: "d2038de9-8141-4e83-8ba9-52a07438048e",
  hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  messagingUrl: "https://messaging.botpress.cloud",
  clientId: "d2038de9-8141-4e83-8ba9-52a07438048e",
  botName: "Aminoz",
  //   disableAnimations: true,
  avatarUrl: "https://api.iconify.design/fluent-emoji/robot.svg",
  // "showBotInfoPage": true,
  enableConversationDeletion: false,
  showConversationsButton: false,
  enableTranscriptDownload: false,
  phoneNumber: "1300 264 669",
  emailAddress: "hello@aminoz.com.au",
  website: "https://www.aminoz.com.au/",
  stylesheet: "https://krisgodina.github.io/aminozstyle.css",
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
