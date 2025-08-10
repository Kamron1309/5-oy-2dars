// 1-mashq: Raqamli ro'yxat yasash
function createNumberList() {
    const listContainer = document.querySelector('#number-list');
    listContainer.innerHTML = ''; // Avvalgi kontentni tozalash

    const ulElement = document.createElement('ul');
    ulElement.style.listStyle = 'none';
    ulElement.style.padding = '0';

    for (let i = 1; i <= 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = i;
        liElement.style.margin = '5px 0';
        liElement.style.padding = '8px';
        liElement.style.backgroundColor = '#f9f9f9';
        ulElement.appendChild(liElement);
    }

    listContainer.appendChild(ulElement);
    colorOddEvenNumbers();
}

// 2-mashq: Toq va juft raqamlarni ranglash
function colorOddEvenNumbers() {
    const liElements = document.querySelectorAll('#number-list li');

    liElements.forEach(li => {
        const number = parseInt(li.textContent);
        li.classList.add(number % 2 === 0 ? 'even' : 'odd');
    });
}

// 3-mashq: Ismlar ro'yxatini teskari tartibda chiqarish
function displayReversedNames() {
    const names = ['Ali', 'Vali', 'Hasan', 'Husan', 'Otabek'];
    const namesContainer = document.querySelector('#names-list');
    namesContainer.innerHTML = ''; // Avvalgi kontentni tozalash

    names.reverse().forEach(name => {
        const pElement = document.createElement('p');
        pElement.textContent = name;
        namesContainer.prepend(pElement); // prepend bilan qo'shamiz
    });
}

// Dasturni ishga tushirish
document.addEventListener('DOMContentLoaded', function () {
    createNumberList();
    displayReversedNames();
});

// 3-mashq: Ismlar ro'yxatini to'g'ri teskari tartibda chiqarish
function displayReversedNames() {
    const names = ['Ali', 'Vali', 'Hasan', 'Husan', 'Otabek'];
    const namesContainer = document.querySelector('#names-list');
    namesContainer.innerHTML = ''; // Avvalgi kontentni tozalash

    // Massivni kopiyasini olamiz va teskari qilamiz
    const reversedNames = [...names].reverse();

    // reversedNames massividagi har bir ism uchun
    reversedNames.forEach(name => {
        const pElement = document.createElement('p');
        pElement.textContent = name;

        // Stil beramiz
        pElement.style.margin = '8px 0';
        pElement.style.padding = '10px';
        pElement.style.backgroundColor = '#f0f0f0';
        pElement.style.borderRadius = '4px';
        pElement.style.fontFamily = 'Arial, sans-serif';

        namesContainer.appendChild(pElement); // appendChild bilan qo'shamiz
    });
}

// Dasturni ishga tushirish
document.addEventListener('DOMContentLoaded', function () {
    displayReversedNames();
});