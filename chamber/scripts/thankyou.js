const getString = window.location.search;
console.log(getString);

myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Your rating is: ${myInfo.get('rating')} </p>
<p>installation Date: ${myInfo.get('installationDate')} </p>
<p>Your comment is: ${myInfo.get('reviewText')} </p>
<p>Your username is: ${myInfo.get('userName')} </p>
<p>Your features: ${myInfo.get('features')} </p>
`;