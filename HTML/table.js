//insert function
function addrow(){
    let add = document.getElementById('table');
    // console.log(add);
    //get insert place
    let length = table.rows.length;
    // console.log(length);
    let newrow = add.insertRow(length);
    console.log(newrow);
    //insert 
    var namecol = newrow.insertCell(0);
    var phonecol = newrow.insertCell(1);
    var opcol = newrow.insertCell(2);

    namecol.innerHTML = 'no';
    phonecol.innerHTML = 'no';
    opcol.innerHTML = '<button onclick="editrow(this)">edit</button><button onclick="deleterow(this)">delete</button>';

}

//delete function
function deleterow(button){
    //console.log(button);
    let row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

//edit function
function editrow(button){
    let row = button.parentNode.parentNode;
    let name = row.cells[0];
    let phone = row.cells[1];
    let inputName = prompt('input name');
    let inputphone = prompt('input phone');

    name.innerHTML = inputName;
    phone.innerHTML = inputphone;
}