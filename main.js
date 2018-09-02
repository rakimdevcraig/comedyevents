// const request = require('request');
let apiURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&keyword=comedy&city=Boston&size=200';


// for loop page = i
fetch(apiURL)
.then(function(res){
  return res.json();
})
.then(function(data){
  console.log(data)
})
.catch(function(err){
  console.log(err)
})


// using request
// request( apiURL, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
  // console.log(body._embedded.events[0].name);
//   // bring back the name of the first event **only bringing back 20 events have to bring back more
//   console.log(body._embedded.events[15])
// });
