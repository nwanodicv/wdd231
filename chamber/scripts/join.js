
/************REFERENCE FOR GOLD DIALOG ELEMENT************/
const openButton = document.querySelector('#open-btn');
const dialogBox = document.querySelector('#dialogbox');
const closeButton = document.querySelector('#close-btn');

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

openButton.addEventListener('click', (event) => {
    event.preventDefault()
    dialogBox.showModal();
});