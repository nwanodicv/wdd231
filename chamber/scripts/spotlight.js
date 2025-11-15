async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        // Filter silver and gold members
        const qualified = data.Companies.filter(company =>
            company.membershipLevel["2"] === "silver" ||
            company.membershipLevel["3"] === "gold"
        );

        // Randomly choose 2 or 3 spotlight members
        const count = Math.random() < 0.5 ? 2 : 3;
        const spotlights = getRandomMembers(qualified, count);

        displaySpotlights(spotlights);
    } catch (error) {
        console.error("Error loading spotlight members:", error);
    }
}

function getRandomMembers(arr, count) {
    return arr.sort(() => Math.random() - 0.5).slice(0, count);
}

function displaySpotlights(members) {
    const container = document.querySelector(".spotlight");

    members.forEach(member => {
        const card = document.createElement("aside");
        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <div class="card-info">
                <div>
                    <img src="${member.image}" alt="${member.name} logo" loading="lazy">
                </div>
                <div>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Address:</strong> 
                        ${member.address.street}, ${member.address.city}, ${member.address.state}
                    </p>
                    <p><strong>Url:</strong> 
                        <a href="https://${member.website}" target="_blank">${member.website}</a>
                    </p>
                    <p><strong>Membership:</strong> 
                        ${member.membershipLevel["2"] || member.membershipLevel["3"]}
                    </p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();
