# openwhisk-tone-analysis
This is an extremely simple serverless implementation of Tone Analysis.
The serverless framework used is [Apache Openwhisk](https://console.bluemix.net/openwhisk/).
The tone analysis tool used is [Watson Tone Analyzer](https://console.bluemix.net/catalog/services/tone-analyzer).

This project was originally created to to provide tone analysis capability for a [Watson Assistant](https://console.bluemix.net/catalog/services/watson-assistant-formerly-conversation) application. Details on [Watson Assistant integration capabilities with Openwhisk](https://console.bluemix.net/docs/services/conversation/dialog-actions.html#dialog-actions).

This action expects 3 parameters:
1. String input, representing the text you want to run tone analysis on.
2. TONE_ANALYZER_USERNAME, username credential for your Watson Tone Analyzer service instance
3. TONE_ANALYZER_PASSWORD, password credential for your Watson Tone Analyzer service instance

This function returns the entire Watson Tone Analyzer response, which is described in detail in the [Watson Tone Analyzer Docs](https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/node.html?node#tone)
