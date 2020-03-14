let inputTitle = document.querySelector('.header__song-title');
let inputChords = document.querySelector('.header__chords');
let inputButton = document.querySelector('.header__button');
let charts = document.querySelector('.charts');

document.addEventListener('keypress', (event) => {
    if(event.keyCode === 13 && (inputTitle.value) && (inputChords.value)) {
        clearUI();
        formatChords(inputChords.value);
        displayTitle(inputTitle.value);
        //clearFields();
    }
});

inputButton.addEventListener('click', () => {
    if ((inputTitle.value) && (inputChords.value)) {
        clearUI();
        formatChords(inputChords.value);
        displayTitle(inputTitle.value);
    }
});

displayTitle = (title) => {
    charts.insertAdjacentHTML("afterbegin",
    `<h1 class="charts__h1">${title}</h1>`
    );
};

formatChords = (values) => {
    values = values.toUpperCase();
    values = values.replace(/\s+/g, '');
    let newValues = values.split(',');
    
    for(let i=0; i<newValues.length; i++) {
        if(newValues[i].length === 2) {  
            newValues[i] = newValues[i].charAt(0).toUpperCase() + newValues[i].slice(1).toLowerCase();
        }
    }
    displayChordPics(newValues);
};

displayChordPics = (chords) => {
    chords.forEach(element => {
        charts.insertAdjacentHTML("beforeend", 
        `<div class="charts__div">
            <h1 class="charts__element-title" >${element}</h1>
            <img src="images/placeholder-image.png" class="charts__image" alt="chord chart">
        </div>`
        );
    });
};

clearUI = () => {
    charts.innerHTML = ``;
}; 

clearFields = () => {
    inputTitle.value = "";
    inputChords.value = "";
    inputTitle.focus();
}