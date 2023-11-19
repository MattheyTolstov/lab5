let matrix = []

function create_matrix() {
    matrix = []
    for (let i = 0; i < input_m.value; i++) {
        let row = []
        for (let j = 0; j < input_m.value; j++) {
            row.push(Math.round(Number(Math.random()*20-10)))
        }
        matrix.push(row)
    }
}

function print_matrix() {
    let table = document.createElement("table")
    section.append(table)

    for (let i = 0; i < input_m.value; i++) {
        let row = document.createElement("tr")
        for (let j = 0; j < input_m.value; j++) {
            let elem = document.createElement("td")
            elem.innerText = matrix[i][j]
            row.append(elem)
        }
        table.append(row)
    }
}

function zeroing_elements() {
    for (let i = 0; i < input_m.value; i++) {
        for (let j = i; j < input_m.value; j++) {
            matrix[i][j] = 0 
        }
    }
}

function print_result() {
    let text1 = document.createElement("p")
    text1.innerText = `Исходная матрица:`
    section.append(text1)
    create_matrix()
    print_matrix()

    let text2 = document.createElement("p")
    text2.innerText = `Преобразованная матрица:`
    section.append(text2)
    zeroing_elements()
    print_matrix()
}

const input_m = document.getElementById("m")
const section = document.querySelector("section")
const button_create_matrix = document.getElementById("create_matrix")

button_create_matrix.addEventListener("click", print_result)
