const openButton = document.querySelector('#open-btn');
const dialogBox = document.querySelector('#dialogbox');
const closeButton = document.querySelector('#close-btn');

closeButton.addEventListener('click', () => {
    dialogBox.close();
})

openButton.addEventListener('click', (event) => {
    event.preventDefault()
    dialogBox.showModal();
});
/************REFERENCE FOR SILVER DIALOG ELEMENT************/
const bronzeOpenButton = document.querySelector('#bronze-open-btn');
const bronzeDialogBox = document.querySelector('#bronze-dialogbox');
const bronzeCloseButton = document.querySelector('#bronze-close-btn');

bronzeCloseButton.addEventListener('click', () => {
    bronzeDialogBox.close();
});

bronzeOpenButton.addEventListener('click', (event) => {
    event.preventDefault()
    bronzeDialogBox.showModal();
});


/************REFERENCE FOR SILVER DIALOG ELEMENT************/
const silverOpenButton = document.querySelector('#silver-open-btn');
const silverDialogBox = document.querySelector('#silver-dialogbox');
const silverCloseButton = document.querySelector('#silver-close-btn');

silverCloseButton.addEventListener('click', () => {
    silverDialogBox.close();
});

silverOpenButton.addEventListener('click', (event) => {
    event.preventDefault()
    silverDialogBox.showModal();
});

/************REFERENCE FOR GOLD DIALOG ELEMENT************/
const goldOpenButton = document.querySelector('#gold-open-btn');
const goldDialogBox = document.querySelector('#gold-dialogbox');
const goldCloseButton = document.querySelector('#gold-close-btn');

goldCloseButton.addEventListener('click', () => {
    goldDialogBox.close();
});

goldOpenButton.addEventListener('click', (event) => {
    event.preventDefault()
    goldDialogBox.showModal();
});