var list = document.querySelector('#list-ui'); //Main unordered list
var addTextField = document.querySelector('#add-text-field') //Text field for adding items
var searchTextField = document.querySelector('#search-text-field'); //Text field for searching items
var addBtn = document.querySelector('#add-button'); //Add item button
var itemsHTMLStrings = []; //Array containing all HTML text for list items
var itemsStrings = []; //Array containing all text for list items
var alerts = []; //Array containing all triggered alerts (EXTRA FEATURE)
var alertsContainer = document.querySelector('#alerts-container'); //div containing the alerts (EXTRA FEATURE)

//-----------------------------------------

addBtn.addEventListener('click', addItem);
//Adds HTML content of the item taked from input field to the main array containing all HTML content of all items (itemsHTMLStrings), and adds item text to 
//the main array containing all text content of all items (itemsStrings, which is used for substring search in function "searchList" below).
//Then, refreshes the list by calling "refresh" function and passing the array with the full list of item's HTML content (see refresh below)
function addItem(event) {
    itemsHTMLStrings.push(`<li class='list-items list-group-item'>${addTextField.value}</li>`);
    itemsStrings.push(addTextField.value);
    refreshUI(itemsHTMLStrings);
}

//-----------------------------------------

searchTextField.addEventListener('input', searchList);

//Creates a temporary array containing strings of HTML content of items that match substring search and sends that temporary array to refresh function.
//(See "refresh" below)
function searchList(event) {
    var temp = [];
    for (var i = 0; i < itemsStrings.length; i++) {
        if (itemsStrings[i].toLowerCase().includes(event.target.value.toLowerCase())) {
            temp.push(itemsHTMLStrings[i]);
        }
    }
    refreshUI(temp);
}

//-----------------------------------------

//Refreshes the main unordered list by taking an array of strings (inputList) containing HTML content of each list item and viewing it in the UI.
function refreshUI(inputList) {
    if (inputList.length == 0) {
        list.innerHTML = "";
        showNoItemsAlert();
    }
    for (var i = 0; i < inputList.length; i++) {
        if (i == 0) {
            list.innerHTML = inputList[i];
        } else {
            list.innerHTML += inputList[i];
        }
    }
}

//-----------------------------------------

//EXTRA FEATURE:
//Shows "No items found" alert for 3 seconds when no items are found on a key stroke, it lasts 3 seconds from the last key stroke pressed that triggered it. 
//(there could be multiple consecutive key strokes that triggered it)
function showNoItemsAlert() {

    alerts.push('<div class="alert alert-danger" id="not-found-alert" role="alert">No items found</div>');
    for (var i = 0; i < alerts.length; i++) {
        if (i == 0) {
            alertsContainer.innerHTML = '<div class="alert alert-danger" id="not-found-alert" role="alert">No items found</div>';
        } else {
            alertsContainer.innerHTML += '<div class="alert alert-danger" id="not-found-alert" role="alert">No items found</div>'
        }

    }
    setTimeout(function() {
        alerts.pop();
        if (alerts.length == 0) {
            alertsContainer.innerHTML = "";
        }
        for (var i = 0; i < alerts.length; i++) {
            if (i == 0) {
                alertsContainer.innerHTML = '<div class="alert alert-danger" id="not-found-alert" role="alert">No items found</div>';
            } else {
                alertsContainer.innerHTML += '<div class="alert alert-danger" id="not-found-alert" role="alert">No items found</div>'
            }
            alertsContainer.innerHTML
        }
    }, 2000)

}