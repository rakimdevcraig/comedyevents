let apiURL ='https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&keyword=comedy&city=Boston&size=50';
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
  let nonDuplicates = []
  let seen = {}
  eventsArray.forEach((event) =>{
    if(!seen[event.name]){
      nonDuplicates.push(event)
      seen[event.name]= true
    }
  })

//   goes through each instance of the data
  nonDuplicates.map((user, index) => {
    var parentDiv = document.createElement("div");
//     creates the parent div
    var image = document.createElement("img");
    let imageUrl = user.images[3].url
    user.images.forEach((image1)=>{
      console.log("checking image for fallback false:", image1.fallback)
      if(image1.fallback===false){
        console.log("found false", image1.url)
        imageUrl=image1.url
      }
    })
    image.setAttribute("src", imageUrl);
    // set the setAttribute of the image as the source
    var name = document.createElement("li");
    var info = document.createElement("li");
    var date = document.createElement("li");
    var ticketText = document.createElement("span");
    var anchor = document.createElement("a");
    anchor.href = user.url;
    anchor.innerText = user.url;
    var venue = document.createElement("li");
    var address = document.createElement("li");

    name.appendChild(document.createTextNode("Name: "+user.name));
   info.appendChild(document.createTextNode("Info: " +user.info));
  date.appendChild(document.createTextNode("Date: "+user.dates.start.localDate));
  ticketText.appendChild(document.createTextNode(" Tickets: "))
  anchor.innerText = user.url;
   venue.appendChild(document.createTextNode("Venue: "+user._embedded.venues[0].name));
  address.appendChild(document.createTextNode("Address: "+user._embedded.venues[0].address.line1+ ' ' +user._embedded.venues[0].city.name + ' ' + user._embedded.venues[0].postalCode));


    parentDiv.appendChild(image)
    parentDiv.appendChild(name)
    parentDiv.appendChild(info)
    parentDiv.appendChild(date)
    parentDiv.appendChild(ticketText)
    parentDiv.appendChild(anchor)
    parentDiv.appendChild(venue)
    parentDiv.appendChild(address)

    document.getElementById("browse").appendChild(parentDiv);
    // document.getElementById("users").appendChild(parentDiv);

  })

})
.catch(function(err){
  console.log(err)
})
