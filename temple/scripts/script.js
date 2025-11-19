import {temples} from '../data/temple.js';
//console.log(temples)
import {url} from '../data/temple.js';
//console.log(url);

// Grab the reference to the division where we display the items
const showHere = document.querySelector('#showhere');

// GET THE REFERENCE TO THE HTML DIALOG ELEMENT
const myDialog = document.querySelector('#mydialog');
const myTitle = document.querySelector('#mydialog h2');
const myClose = document.querySelector('#mydialog button');
const myText = document.querySelector('#mydialog p');

myClose.addEventListener('click', () => {
  myDialog.close();
})

// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
  //console.log(data);
  data.forEach(element => {
    console.log(element);
    const photo = document.createElement('img');
    photo.src=`${url}${element.path}`;
    photo.alt=`${element.name}`;

    showHere.append(photo)
  });
};// END OF FUNCTION

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(temples)

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector(".nav-bar-container");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Toggle button symbol
  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖"; // Close icon
  } else {
    menuButton.textContent = "☰"; // Hamburger icon
  }
});



let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""


// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full", timeStyle: "long",
	}
).format(nLastModif)
}`;

//lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
