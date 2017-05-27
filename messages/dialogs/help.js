//Dialog for explaining what Unishield can do

let features = [
  function (session) {
    session.send("I can tell you more about the amenities nearby your home.");
    session.send("I can also recommend you services that's available in your district.");
    session.send("I can also notify you of happenings and events in your neighbourhood.");
    session.endDialog();
  },
]

module.exports.features = features;
