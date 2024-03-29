// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('div');
            categoryElement.innerHTML = `<h2>${category}</h2>`;
            const itemListElement = document.createElement('ul');

            menu[category].forEach(item => {
                const listItemElement = document.createElement('li');
                listItemElement.textContent = item;
                listItemElement.addEventListener('click', () => addToOrder(item));
                itemListElement.appendChild(listItemElement);
            });

            categoryElement.appendChild(itemListElement);

            menuContainer.appendChild(categoryElement);
        }
    }
}

function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    const listItem = document.createElement('li');

    listItem.textContent = itemName;

    orderItemsList.appendChild(listItem);

    const totalPrice = parseFloat(orderTotalElement.textContent) + 60;
    orderTotalElement.textContent = totalPrice.toFixed(2);
}


function initMenuSystem(menu) {
    displayMenuItems(menu);
}

initMenuSystem(menu);
