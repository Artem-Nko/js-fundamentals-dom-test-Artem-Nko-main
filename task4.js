// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 


// Ваш код ..

function submitForm(event) {
    event.preventDefault(); // Зупинити подію, щоб форма не відправлялася

    const nameInput = document.querySelector('[data-form="ПІБ"]');
    const phoneInput = document.querySelector('[data-form="Номер телефону"]');
    const birthdayInput = document.querySelector('[data-form="Дата народження"]');
    const emailInput = document.querySelector('[data-form="Електронна пошта"]');

    const name = nameInput.value;
    const phoneNumber = phoneInput.value;
    const dateOfBirth = birthdayInput.value;
    const emailAddress = emailInput.value;

    // Записуємо дані у div class="out"
    const outputDiv = document.querySelector('.out');
    outputDiv.innerHTML = `<p>Name: ${name}</p>
                           <p>Phone Number: ${phoneNumber}</p>
                           <p>Date of Birth: ${dateOfBirth}</p>
                           <p>Email Address: ${emailAddress}</p>`;

    // Виведення даних у консоль
    console.log("name:", name);
    console.log("phoneNumber:", phoneNumber);
    console.log("dateOfBirth:", dateOfBirth);
    console.log("emailAddress:", emailAddress);
}

// Отримання кнопки за її id і прив'язка функції до події click
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', submitForm);

// module.exports = {
//     name,
//     phoneNumber,
//     dataOfBirth,
//     emailAddress
// };