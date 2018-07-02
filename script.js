var list = document.querySelector('#list-ui');
var addTextField = document.querySelector('#add-textfield')
var searchTextField = document.querySelector('#search-textfield');
var addBtn = document.querySelector('#add-button');
var itemsHTMLStrings = [];
var itemsStrings = [];
var alerts = [];
var alertsContainer = document.querySelector('#alerts-container');

//-----------------------------------------

addBtn.addEventListener('click', addItem);

function addItem(event) {
    itemsHTMLStrings.push(`<li class='list-items list-group-item'>${addTextField.value}</li>`);
    itemsStrings.push(addTextField.value);
    refreshUI(itemsHTMLStrings);
}

//-----------------------------------------

searchTextField.addEventListener('input', searchList);

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
