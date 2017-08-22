console.log('total eclipse of the method');


var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


//  Use the forEach method to add the name of each planet
//  to a div element in your HTML with an id of "planets".

var el = document.getElementById("planets");


planets.forEach(function(listPlanets) {
        el.innerHTML += `<p>${listPlanets}</p>`;
    },
    "<hr>");

// Use the map method to create a new array where the first letter of each planet is capitalized

planets.map(function(upperCase) {
        el.innerHTML += "<br>" + upperCase.charAt(0).toUpperCase() + upperCase.substring(1) + "<br>";
    },
    el.innerHTML += "<hr>");


// Use the filter method to create a new array that contains planets with the letter 'e'

var filtered = planets.filter(function(eFilter) {
        if (eFilter.includes("e") === true) {
            console.log('filtered', eFilter);
            el.innerHTML += `<p>${eFilter}</p>`;
        } else {
            console.log("there are no e's in", eFilter);
            el.innerHTML += "No e's on this planet!";
        }
    },
    el.innerHTML += "<hr>");

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var senTence = words.reduce(function(currentIndex, nextValue) {
    return currentIndex + " " + nextValue;
});
el.innerHTML += "<hr>" + senTence + ".";