let selectedRow = null;

function onFormSubmit() {    
    if (validate()) {
        let formData = readFormData();
        if(selectedRow == null)
            inserNewRecord(formData)
        else 
            updateRecord(formData)
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["productName"] = document.getElementById("productName").value;
    formData["cost"] = document.getElementById("cost").value;
    formData["description"] = document.getElementById("description").value;
    formData["image"] = document.getElementById("image").value;
    return formData;
}

function inserNewRecord(data) {
    let table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cost;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.image;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() {
    document.getElementById("productName").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("image").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[1].innerHTML = formData.cost;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.image;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('productList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("productName").value == "") {
        isValid = false;
        document.getElementById("productNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("productNameValidationError").classList.contains("hide"))
            document.getElementById("productNameValidationError").classList.add("hide");
    }
    return isValid;
}