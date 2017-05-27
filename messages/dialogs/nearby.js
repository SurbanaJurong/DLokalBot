//Dialog for explaining what SirBanner can do
let amenities = [
  function (session) {
    session.send("Here's are some amenities nearby:");
    session.send("There's a coffee shop nearby at Blk 75 famous for Nasi Lemak.");
    session.send("If you are looking for a childcare centre, there's one 250m from your house near the Potong Pasir MRT.");
    session.send("I can send you directions if you would like to visit the recommended amenities.")
    session.endDialog();
  },
]

let services = [
  function (session) {
    session.send("Here's are some servies available nearby:");
    session.send("For $40, John Pereira can repair your antique VCRs for you.");
    session.send("Beyblad expert Zhu Xin Chen will fix all your old beyblades for $55.");
    session.send("If you're interested, I will link you up with them!")
    session.endDialog();
  },
]

let events = [
  function (session) {
    session.send("Be prepared for a happening week in your neighbourhood!");
    session.send("Upcoming events include a Meet The People Session at Blk 79");
    session.send("There's also a community run at the nearby Potong Pasir CC.");
    session.send("Sign up for these events - by confirming your attendance with me. :)");
    session.endDialog();
  },
]

module.exports.services = services;
module.exports.amenities = amenities;
module.exports.events = events;
