import { dcompanies } from "../data/company.mjs";

console.log(dcompanies);

const displayAllCards = document.querySelector('#js-card-container')

function displayCompanyCards(dcompanies){
    dcompanies.forEach((compy) => {
        /************GENERATE HTML ELEMENTS AND THE CONTENTS ******************/
        const card = document.createElement('section');
        /************* Image Element ******/
        const cardPhotos = document.createElement('img');
        cardPhotos.src = `images/${compy.photo}`
        cardPhotos.alt = compy.name
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

        displayAllCards.appendChild(card);
        

    })
}
displayCompanyCards(dcompanies);