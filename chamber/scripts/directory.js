// chamber/scripts/directory.js

let members = [];


async function fetchMembersData() {
    const response = await fetch('data/members.json');// Fetch the data from the URL
    const data = await response.json();// Parse the JSON data
    members = data.Companies; // Store the data in the members array
    displayMembers(members); // Call function to display members
};
displayMembers(members);

const membersContainer = document.querySelector('#members-container');

function displayMembers(members) {
    members.forEach((member) => {
        // Create elements for the member card
        let card = document.createElement('section');
        let companyFullName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let services = document.createElement('p');

        // Set the content and attributes// Set the content and attributes
        companyFullName.textContent = member.name;
        address.textContent = `Address: ${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = member.website;
        website.setAttribute('href', `http://${member.website}`);
        website.setAttribute('target', '_blank');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');
        services.textContent = `Services: ${member.services.join(', ')}`;

        // Append elements to the card
        card.appendChild(companyFullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(image);
        card.appendChild(website);
        card.appendChild(services);

        // Append the card to the container
        membersContainer.appendChild(card);
    });
};
displayMembers(members);

// View mode buttons
const gridViewBtn = document.querySelector('#grid-view-btn');
const listViewBtn = document.querySelector('#list-view-btn');
gridViewBtn.addEventListener('click', (event) => {
    event.preventDefault();
    membersContainer.classList.toggle('add', 'members-grid');
    membersContainer.classList.toggle('remove', 'members-list');
});

listViewBtn.addEventListener('click', (event) => {
    event.preventDefault();
    membersContainer.classList.add('members-list');
    membersContainer.classList.remove('members-grid');
});

fetchMembersData();