/**
 * Calls the Natural Language Understanding service and returns a location type and disambiguation.
 * @param {Object} params The parameters
 * @param {String} params.TONE_ANALYZER_USERNAME The username for the Tone Analyzer service.
 * @param {String} params.TONE_ANALYZER_PASSWORD The password for the Tone Analyzer service.
 */

const assert = require('assert');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3.js');

function main(params) {
  return new Promise(function(resolve, reject) {
    assert(params, 'params can not be null');
    assert(params.TONE_ANALYZER_USERNAME, 'params.TONE_ANALYZER_USERNAME can not be null');
    assert(params.TONE_ANALYZER_PASSWORD, 'params.TONE_ANALYZER_PASSWORD can not be null');
    assert(params.input, 'params.input can not be null');
    
    const toneAnalyzer = new ToneAnalyzerV3({username: params.TONE_ANALYZER_USERNAME, password: params.TONE_ANALYZER_PASSWORD, version_date: '2017-09-21'});
    
    var parameters = {
      'text': params.input,
    };
    toneAnalyzer.tone(parameters, function(err, response) {
      if (err) {
        return reject(err);
      } else {
        return resolve(response); 
      }
    });
  });
}

module.exports.main = main;
