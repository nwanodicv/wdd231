//const getString = window.location.search;
//console.log(getString)

myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p><strong>Your First Name:</strong> ${myInfo.get('firstname')} </p>
<p><strong>Your Last Name: </strong>${myInfo.get('lastName')}</p>
<p><strong>Organizational Title:</strong> ${myInfo.get('organizationalTitle')} </p>
<p><strong>Your Email:</strong> ${myInfo.get('email')} </p>
<p><strong>Phone Number:</strong> ${myInfo.get('phone')} </p>
<p><strong>Your Business Name:</strong> ${myInfo.get('businessName')} </p>
<p><strong>Your Membership Level:</strong> ${myInfo.get('membership')} </p>
<p><strong>Business Description</strong>: ${myInfo.get('businessDescription')} </p>
<p><strong>You joined the Ogwashi-uku Chamber of Commerce on the ${myInfo.get('timestamp')} </strong></p>
`;