function Vacation(name, price, rating, location, rooms, availability, features) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.rooms = rooms;
    this.availability = availability;
    this.features = features;
} //Created an objects template that represents a vacation rental.

Vacation.prototype.description = function() {
    let main = document.querySelector('main');
    let newpara = document.createElement('p');
    let sentence = 'The name of this hotel is ' + this.name + ' and Price to book this hotel is  ' + this.price +
        ' and its an  ' + this.rating + ' rated hotel which is located at ' + this.location + ' and has ' + this.features[0] + ' and ' + this.features[1] + '.';
    newpara.innerHTML = sentence;
    console.log(sentence);
}; // method to display discription of property
Vacation.prototype.available = function() {
    let main = document.querySelector('main');
    let newpara = document.createElement('p');
    let sentence = 'This hotel is ' + this.availability + ' with ' + this.rooms + ' Rooms. ';
    newpara.innerHTML = sentence;
    console.log(sentence);
}; // method to display Avalibility of property

let place = new Vacation('Chelsea Hotel', 175, 4.5, 'Toronto', 8, 'Available', ['location', 'view']); // object instance for rental property 1
let place2 = new Vacation('Delux Inn Hotel', 149, 4.0, 'Toronto', 7, 'Available', ['Structure', 'view']); // object instance for rental property 2

function Special(name, price, rating, location, rooms, availability, features, type) {
    Vacation.call(name, price, rating, location, rooms, availability, features);
    this.type = type;
} // object template for special rate property.

Special.prototype = Object.create(Vacation.prototype);

function getPrice() {

    var totalValue = place2.price * 0.8
    document.getElementById("total").value = totalValue;
    document.getElementById("to").innerHTML = 'Boo Yaa ! You got 80% Discount';
} // to get discount.

let specialplace = new Special('Chelsea Hotel', 175, 4.5, 'Toronto', 8, 'Available', ['location', 'view'], 'specialrate'); //instance of special rate.

function SuperHost(name, price, rating, location, rooms, availability, features, rate) {
    Vacation.call(name, price, rating, location, rooms, availability, features);
    this.rating = rate;
} // object template for super host  property.

SuperHost.prototype = Object.create(Vacation.prototype);

SuperHost.prototype.rating = function() {
    alert('The rating is ' + this.rate);
}

let superHost = new SuperHost('Holiday Inn', 120, 4.0, 'Barrie', 10, 'Available', ['Quite', 'Nature View'], 'SuperHost'); //instance of Super rate.

// used functions to display different things when user click different buttons

function myFunction() {
    document.getElementById("h1").innerHTML = 'The name of this beautiful hotel is ' + place.name + ' located in ' + place.location + ' And It has a rating of ' + place.rating + ' .This hotel contains ' + place.rooms + ' rooms and Everyone like it because of its ' + place.features[0] + ' and ' + place.features[1];
}

function Function() {
    document.getElementById("h2").innerHTML = 'The name of this beautiful hotel is ' + place2.name + ' located in ' + place2.location + ' And It has a rating of ' + place2.rating + ' .This hotel contains ' + place2.rooms + ' rooms and Everyone like it because of its ' + place2.features[0] + ' and ' + place2.features[1];
}

function A1Function() {
    document.getElementById("h3").innerHTML = 'The ' + place.name + ' Hotel is ' + place.availability + ' for renting';
}

function A2Function() {
    document.getElementById("h4").innerHTML = 'The ' + place2.name + ' Hotel is ' + place2.availability + ' for renting';
}

let para = document.querySelector('p');
let button = document.querySelector('button');

//Create a function to get the my location and use the if-else
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        para.innerHTML = '<p> Geolocation is not supported. Booo! :( ';
    }
}
//create a function to give the current location and print in the browser
function showPosition(position) {
    para.innerHTML = '<p> Latitude is ' + position.coords.latitude +
        ' and longitude is ' + position.coords.longitude + '</p>';
}

button.onclick = getLocation;


//create the init function to get my location
function initMap() {
    let Home = {
        lat: 44.3987291,
        lng: -79.6776734
    }
    let div = document.querySelector('.container');

    let map = new google.maps.Map(div, {
        Zoom: 13,
        center: Home
    });

    //set the marker on map
    let marker = new google.maps.Marker({
        position: Home,
        map: map,
        animation: google.maps.Animation.DROP
    });
}
