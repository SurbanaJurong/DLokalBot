/* Dialog for profiling user's preferences using five questions
 * User's input is saved under session.userData
 */

var builder = require("botbuilder");

let questions = [
    function (session) {
      //session.send("Hi there! I’m Sir Banner, your iTown Assistant!");
      builder.Prompts.number(session, "To get started, I would need your postal code.");
    },
    function (session, results) {
      session.userData.choice1 = results.response;
      session.send("Thank you! Here's some of the things I can do.");
      session.beginDialog('/features');
    },
]

module.exports.questions = questions;
