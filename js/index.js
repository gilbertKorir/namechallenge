const nameForm = document.getElementById('nameForm');
const resPage = document.getElementById('resPage');
const divRes = document.getElementById('divres'); 
const exitButton = document.getElementById('exitButton');

nameForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to prevent page reload
   
    const fullNameInput = document.getElementById('fullName');
    const fullName = fullNameInput.value.trim();

    if (!fullName) {
        alert('Cheza chini na uandike jina.'); 
        return; 
    }

    let sum = 0;
    let res = 'tunarudi church. ';
    for (let i = 0; i < fullName.length; i++) {
        const char = fullName[i];
        let charCode = char.toLowerCase().charCodeAt(0) - 96; // Normalize to lowercase and get char code
        sum += charCode;
    }

    document.getElementById('loader').style.display = 'none';    
    resPage.innerHTML = `Hey <b>${fullName}</b>, ${res} <b>${sum}</b> bob tu. Ni rahisi pay Bill 303030 account number 2042607226`;
    divRes.style.display = 'inline';

});


function closeWindow() {
    window.close();
}

// Add event listener to the exit button
exitButton.addEventListener('click', function() {
    window.clearTimeout(timer); 
    closeWindow(); 
});

// Schedule the window to close after 40 seconds
var timer = setTimeout(closeWindow, 60000);
