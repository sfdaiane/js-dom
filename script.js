function applyColor(color) {
    let square = document.getElementById("square-id")
    square.style.backgroundColor = color
}

function applyRounded() {
    let square = document.getElementById("square-id")
    square.style.borderRadius = '100%'
}

function reset() {
    let square = document.getElementById("square-id")
    square.style.backgroundColor = ''
    square.style.borderRadius = ''
}
