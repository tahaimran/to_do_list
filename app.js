var list = document.getElementById("list")


function addTodo() {
    var todo_ent = document.getElementById("todo-item")
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_ent.value)

    li.append(litext)


    // delete button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class", "btn btn btn-warning midbtn btns")
    delbtn.setAttribute("onclick", "deleteitem(this)")


    // create edit buttom
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class", "btn btn-warning sidbtn btns")
    editbtn.setAttribute("onclick", "editbutton(this)")



    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)

    todo_ent.value = ""
}



function deleteitem(e) {
    e.parentNode.remove()
}

function deleteall() {
    list.innerHTML = ""
}

function editbutton(e) {
    var val = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}