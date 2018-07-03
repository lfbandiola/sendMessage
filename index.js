var Slack = require('slack-node');
 
webhookUri = "https://hooks.slack.com/services/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";

exports.sendMessage = (req, res) => {

  if (req.body.text === undefined){
    res.status(400).send('No message defined!')
  } else {
    var msg = req.body.text;
    slack = new Slack();
    slack.setWebhook(webhookUri);

    slack.webhook({
      channel: "#general",
      username: "message",
      icon_emoji: ":envelope:",
      text: msg
    }, function(err, response) {
      console.log(response);
    });
  }
};
