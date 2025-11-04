const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.getElementById('cards');

// Function to display prophets data
async function getProphetsData() {
    const responds = await fetch(url); // Fetch the data from the URL
    const data = await responds.json(); // Parse the JSON data
    displayProphets(data.prophets); // Call function to display prophets
    //console.table(data.prophets);// Log the data to the console for debugging
};
getProphetsData(); // Call the function to get and display data

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements for the prophet card
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let potrait = document.createElement('img');

        // Set the content and attributes
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        potrait.setAttribute('src', prophet.imageurl);
        potrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`);
        potrait.setAttribute('loading', 'lazy');
        potrait.setAttribute('width', '340');
        potrait.setAttribute('height', '440');

        //append elements to the card
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(potrait);

        // Append the card to the container
        cards.appendChild(card);
    });
}