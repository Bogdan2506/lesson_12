document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('input[type="button"]');
    saveButton.addEventListener('click', function() {
        displayData();
    });
});

function displayData() {
    const formData = document.forms["mainForm"];
    const dataTable = document.createElement('table');
    const dataBody = document.createElement('tbody');

    const newRow = dataBody.insertRow();


    ['Name', 'Surname', 'dateOfBirth', 'gender', 'city', 'description', 'languages'].forEach(function(field) {
        const newCell = newRow.insertCell();
        if (field === 'city') {
            newCell.textContent = formData.elements[field].options[formData.elements[field].selectedIndex].text;
        } else if (field === 'languages') {
            newCell.textContent = getSelectedLanguages(formData);
        } else {
            newCell.textContent = formData.elements[field].value;
        }
    });

    dataTable.appendChild(dataBody);
    document.body.appendChild(dataTable);
}

function getSelectedLanguages(formData) {
    const languages = formData.querySelectorAll('input[name="languages"]:checked');
    let languageList = '';
    for (const language of languages) {
        languageList += language.value + ', ';
    }
    return languageList.slice(0, -2);
}