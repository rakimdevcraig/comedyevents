let apiURL ='https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&keyword=comedy&city=Boston&size=10';
// fetch the url
fetch(apiURL)
.then(function(res){
//  turn data from api into Json
  return res.json();
})
.then(function(data){
//   pass the data that's now json into data
  console.log(data)
// pass the data that we want into a variable
  let eventsArray = data._embedded.events;
// goes into the api until we get to the point where we want to
//   take the information for 1
  return eventsArray
})
.then(function(eventsArray){


//   goes through each instance of the data
  eventsArray.map((user, index) => {
    var parentDiv = document.createElement("div");
//     creates the parent div
    var image = document.createElement("li");
    var name = document.createElement("li");
    var info = document.createElement("li");
    var date = document.createElement("li");
    var ticket = document.createElement("li");
    var venue = document.createElement("li");
    var address = document.createElement("li");

   image.appendChild(document.createTextNode(user.images[0].url));
    name.appendChild(document.createTextNode("Name: "+user.name));
   info.appendChild(document.createTextNode("Info: " +user.info));
  date.appendChild(document.createTextNode("Date: "+user.dates.start.localDate));
   ticket.appendChild(document.createTextNode("Tickets: "+user.url));
   venue.appendChild(document.createTextNode("Venue: "+user._embedded.venues[0].name));
  address.appendChild(document.createTextNode("Address: "+user._embedded.venues[0].address.line1+ ' ' +user._embedded.venues[0].city.name + ' ' + user._embedded.venues[0].postalCode));


    parentDiv.appendChild(image)
    parentDiv.appendChild(name)
    parentDiv.appendChild(info)
    parentDiv.appendChild(date)
    parentDiv.appendChild(ticket)
    parentDiv.appendChild(venue)
    parentDiv.appendChild(address)


    document.getElementById("users").appendChild(parentDiv);
  })

})
.catch(function(err){
  console.log(err)
})
