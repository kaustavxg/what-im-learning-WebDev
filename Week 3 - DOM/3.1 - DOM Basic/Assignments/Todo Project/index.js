let ctr = 1;
function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    const Ele = document.querySelector("input");
    const ExtractedValue = Ele.value;

    const newDivEle = document.createElement("div");
    newDivEle.setAttribute("id", ctr);

    newDivEle.innerHTML = "<div>" + ExtractedValue + "</div> <button onclick='deleteTodo(" + ctr + ")'> Delete </button>"

    document.querySelector("body").appendChild(newDivEle);
    ctr += 1;
}