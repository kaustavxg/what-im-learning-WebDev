let ctr = 0
function callback() {
    const ele = document.querySelectorAll("h4")[1];
    ele.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000)