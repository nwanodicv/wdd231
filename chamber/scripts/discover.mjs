import { dcompanies } from "../data/company.mjs";
console.log(dcompanies);


const dialogBox = document.querySelector('#dialogbox');
const dialogTitle = document.querySelector('dialogbox h3');
const dialogContent = document.querySelector('#dialogbox p');
const dialogClose = document.querySelector('#dialogbox button')

dialogClose.addEventListener('click', () => {
    dialogBox.close();
})

const displayAllCards = document.querySelector('#js-card-container')

function displayCompanyCards(dcompanies){
    dcompanies.forEach((compy) => {
        /************GENERATE HTML ELEMENTS AND THE CONTENTS ******************/
        const card = document.createElement('figure');
        /************* Image Element ******/
        const cardPhotos = document.createElement('img');
        cardPhotos.src = `images/${compy.photo}`
        cardPhotos.alt = compy.name
        cardPhotos.loading = "lazy";
        card.appendChild(cardPhotos);
        /********** Title  */
        const title = document.createElement('h2')
        title.innerText = compy.name
        card.appendChild(title);

         /************* Image Element ******/
        const location = document.createElement('address')
        location.innerText = `${compy.address.street}, ${compy.address.city}, ${compy.address.state}`
        card.appendChild(location)

        /*********** Description Element */
        const desc = document.createElement('p')
        desc.innerText = compy.description
        card.appendChild(desc);
        
        /*********** LEARN MORE ELEMENT */
        const learnMore = document.createElement('button')
        learnMore.innerText = compy.info
        card.appendChild(learnMore)

        learnMore.addEventListener('click', () => {
            dialogBox.showModal();
        });
        displayAllCards.appendChild(card);
    }) 
}
displayCompanyCards(dcompanies);

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;
