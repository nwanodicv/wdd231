//const getString = window.location.search;
//console.log(getString)

myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p><strong>Your First Name:</strong> ${myInfo.get('firstname')} </p>
<p><strong>Your Last Name: </strong>${myInfo.get('lastName')}</p>
<p><strong>Your Email:</strong> ${myInfo.get('email')} </p>
<p><strong>Phone Number:</strong> ${myInfo.get('phone')} </p>
<p><strong>Your Business Name:</strong> ${myInfo.get('homeaddress')} </p>
<p><strong>You signed Up on the ${myInfo.get('timestamp')} </strong></p>
`;