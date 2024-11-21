function showError(inputElement, labelElement, errorMessageElement, errorMessage) {
    inputElement.classList.add("input-invalido");
    labelElement.classList.add("input-invalida"); // Adiciona classe de erro à label
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = "block"; // Exibe a mensagem de erro
}

function hideError(inputElement, labelElement, errorMessageElement) {
    inputElement.classList.remove("input-invalido");
    labelElement.classList.remove("input-invalida"); // Remove a classe de erro da label
    errorMessageElement.style.display = "none"; // Esconde a mensagem de erro
}

function calculateAge() {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const resultContainer = document.getElementById("result");

    const dayValue = parseInt(dayInput.value);
    const monthValue = parseInt(monthInput.value);
    const yearValue = parseInt(yearInput.value);

    // Elementos de erro
    const dayLabel = document.querySelector("label[for='day']");
    const monthLabel = document.querySelector("label[for='month']");
    const yearLabel = document.querySelector("label[for='year']");
    const dayErrorMessage = document.getElementById("msgErroDay");
    const monthErrorMessage = document.getElementById("msgErroMonth");
    const yearErrorMessage = document.getElementById("msgErroYear");

    let isValid = true;

    // Validação do dia
    if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
        isValid = false;
        showError(dayInput, dayLabel, dayErrorMessage, "Must be a valid day.");
    } else {
        hideError(dayInput, dayLabel, dayErrorMessage);
    }

    // Validação do mês
    if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
        isValid = false;
        showError(monthInput, monthLabel, monthErrorMessage, "Must be a valid month.");
    } else {
        hideError(monthInput, monthLabel, monthErrorMessage);
    }

    // Validação do ano
    if (isNaN(yearValue) || yearValue < 1900 || yearValue > new Date().getFullYear()) {
        isValid = false;
        showError(yearInput, yearLabel, yearErrorMessage, "Must be in the past.");
    } else {
        hideError(yearInput, yearLabel, yearErrorMessage);
    }

    if (isValid) {
        // Cálculos para idade
        const today = new Date();
        const birthDate = new Date(yearValue, monthValue - 1, dayValue);
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const ageInMonths = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        const ageInDays = Math.floor((ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        resultContainer.innerHTML = `<p><span class="result_number">${ageInYears}</span> years</p>
                                     <p><span class="result_number">${ageInMonths}</span> months</p>
                                     <p><span class="result_number">${ageInDays}</span> days</p>`;
    }
}

const button = document.querySelector(".return_result button");
button.addEventListener("click", function (e) {
    e.preventDefault();
    calculateAge();
});
