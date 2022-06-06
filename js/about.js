
let users = [
    { surname: "Berger", firstname: " Whitney", age: 22 },
    { surname: "nagy", firstname: " Árpád", age: 44 },
    { surname: "kiss", firstname: "vadölő", age: 65 },
    { surname: "jeack", firstname: " márió", age: 75 },
    { surname: "rostás", firstname: " péter", age: 23 },
    { surname: "doe", firstname: " géza", age: 21 },
    { surname: "fehér", firstname: " elemér", age: 17 },
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtongGroup = parent => {
    let group = document.childElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class= " fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class= " fas fa-sync-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtongGroup(tr);
    tableBody.appendChild(tr);
} 
